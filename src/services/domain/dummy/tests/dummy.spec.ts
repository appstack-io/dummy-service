import { shutdownComponents } from '@appstack-io/main';
import { v4 as uuid } from 'uuid';
import {
  isE2E,
  login,
  runMain,
  setupArangoDb,
  useHost,
  usePorts,
} from '@appstack-io/tests';
import { DummyService, Metadata } from '../../../../client';
import { MainMicroservicesPublicModule } from '../../../../main/components/main.microservices.public.module';
import { MainMicroservicesPrivateModule } from '../../../../main/components/main.microservices.private.module';
import { MainHttpModule } from '../../../../main/components/main.http.module';
import { PubsubServerModule } from '@appstack-io/pubsub';
import { MainWorkersModule } from '../../../../main/components/main.workers.module';

jest.setTimeout(10000);

describe('Dummy', () => {
  let client: DummyService;
  const metadata = new Metadata();
  let ports: {
    protoInternal: number;
    proto: number;
    http: number;
    httpInternal: number;
    ws: number;
    workers: number;
  };

  beforeAll(async () => {
    await setupArangoDb();
    ports = await usePorts();
    const host = useHost();
    client = new DummyService({ host, port: String(ports.proto) });
    if (!isE2E())
      await runMain({
        publicMicroservicesModule: MainMicroservicesPublicModule,
        privateMicroservicesModule: MainMicroservicesPrivateModule,
        publicHttpModule: MainHttpModule,
        privateHttpModule: MainHttpModule,
        pubsubModule: PubsubServerModule,
        workersModule: MainWorkersModule,
      });
    const { accessToken } = await login(ports);
    metadata.set('jwt', accessToken);
  });

  afterAll(async () => {
    if (!isE2E()) await shutdownComponents();
  });

  test('CreateOne + FindOne', async () => {
    // Arrange
    const input = {
      text: uuid(),
    };

    // Act
    const created = await client.createOne(input, metadata);
    const found = await client.findOne({ id: created.id }, metadata);

    // Assert
    expect(found).toEqual(created);
  });

  test('CreateOne + FindOne: Non Public', async () => {
    // Arrange
    const input = {
      text: uuid(),
    };
    const { accessToken } = await login(ports);
    const otherMetadata = new Metadata();
    otherMetadata.set('jwt', accessToken);

    // Act
    const created = await client.createOne(input, metadata);
    const p = client.findOne({ id: created.id }, otherMetadata);

    // Assert
    await expect(p).rejects.toThrow('permission denied');
  });

  test('CreateOne + FindOne: Public', async () => {
    // Arrange
    const input = {
      text: uuid(),
      isPublic: true,
    };
    const { accessToken } = await login(ports);
    const otherMetadata = new Metadata();
    otherMetadata.set('jwt', accessToken);

    // Act
    const created = await client.createOne(input, metadata);
    const found = await client.findOne({ id: created.id }, otherMetadata);

    // Assert
    expect(found).toEqual(created);
  });

  test('UpdateOne', async () => {
    // Arrange
    const input = { text: uuid() };
    const update = { text: uuid() };
    const created = await client.createOne(input, metadata);

    // Act
    const updated = await client.updateOne(
      { id: created.id, ...update },
      metadata,
    );

    // Assert
    expect(updated).toEqual({ ...created, ...updated });
  });

  test('RemoveOne', async () => {
    // Arrange
    const input = {
      text: uuid(),
    };
    const created = await client.createOne(input, metadata);

    // Act
    await client.removeOne({ id: created.id }, metadata);

    // Assert
    await expect(client.findOne({ id: created.id }, metadata)).rejects.toThrow(
      'not found',
    );
  });

  test('Search', async () => {
    // Arrange
    const input = { text: uuid().replace(/-/g, ' ') };
    const token = input.text.split(' ')[0];
    for (let i = 0; i < 4; i++) {
      await client.createOne(
        { ...input, text: `${input.text} ${i}` },
        metadata,
      );
    }

    // Act
    const all = await client.search(
      {
        filter: { text: token },
        opts: { limit: 10, offset: 0, waitForSync: true },
      },
      metadata,
    );
    const page1 = await client.search(
      {
        filter: { text: token },
        opts: { limit: 3, offset: 0, waitForSync: true },
      },
      metadata,
    );
    const lastOffset = page1.meta.offset;
    const page2 = await client.search(
      {
        filter: { text: token },
        opts: { limit: 3, offset: lastOffset, waitForSync: true },
      },
      metadata,
    );

    // Assert
    expect(all.results.length).toEqual(4);
    expect(page1.results).toEqual(all.results.slice(0, 3));
    expect(page2.results).toEqual(all.results.slice(3, 6));
  });
});
