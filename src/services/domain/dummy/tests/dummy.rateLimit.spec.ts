import { shutdownComponents } from '@appstack-io/main';
import { v4 as uuid } from 'uuid';
import {
  getMetadata,
  isE2E,
  login,
  runMain,
  setupArangoDb,
  sleep,
  useHost,
  usePorts,
} from '@appstack-io/tests';
import { DummyService, Metadata } from '../../../../client';
import * as process from 'process';
import { MainMicroservicesPublicModule } from '../../../../main/components/main.microservices.public.module';
import { MainMicroservicesPrivateModule } from '../../../../main/components/main.microservices.private.module';
import { PubsubServerModule } from '@appstack-io/pubsub';
import { MainHttpModule } from '../../../../main/components/main.http.module';
import { MainWorkersModule } from '../../../../main/components/main.workers.module';

jest.setTimeout(10000);

describe('Dummy: Rate limits', () => {
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
    process.env.WRITE_RPM_LIMIT = '1';
    process.env.READ_RPM_LIMIT = '1';
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
    await sleep(1000);
    const { accessToken } = await login(ports);
    metadata.set('jwt', accessToken);
  });

  afterAll(async () => {
    process.env.WRITE_RPM_LIMIT = '10';
    process.env.READ_RPM_LIMIT = '100';
    if (!isE2E()) await shutdownComponents();
  });

  test('FindOne: Exceed rate limit', async () => {
    // Arrange
    const input = {
      text: uuid(),
    };
    const metadata1 = await getMetadata(ports);
    const created = await client.createOne(input, metadata1);

    // Act
    const bombard = async () => {
      const requests = [];
      for (let i = 0; i < Number(process.env.WRITE_RPM_LIMIT) * 5; i++) {
        requests.push(client.findOne({ id: created.id }, metadata1));
      }
      return await Promise.all(requests);
    };
    const p = bombard();

    // Assert
    await expect(p).rejects.toThrow(
      '/main.DummyService/FindOne UNKNOWN: rate limit exceeded',
    );
  });

  test('Search: Exceed rate limit', async () => {
    // Arrange
    const input = {
      text: uuid(),
    };
    const metadata1 = await getMetadata(ports);

    // Act
    const bombard = async () => {
      const requests = [];
      for (let i = 0; i < Number(process.env.WRITE_RPM_LIMIT) * 5; i++) {
        requests.push(client.search({ filter: input }, metadata1));
      }
      return await Promise.all(requests);
    };
    const p = bombard();

    // Assert
    await expect(p).rejects.toThrow(
      '/main.DummyService/Search UNKNOWN: rate limit exceeded',
    );
  });

  test('CreateOne: Exceed rate limit', async () => {
    // Arrange
    const input = {
      text: uuid(),
    };
    const metadata1 = await getMetadata(ports);

    // Act
    const bombard = async () => {
      const requests = [];
      for (let i = 0; i < Number(process.env.WRITE_RPM_LIMIT) * 5; i++) {
        requests.push(client.createOne(input, metadata1));
      }
      return await Promise.all(requests);
    };
    const p = bombard();

    // Assert
    await expect(p).rejects.toThrow(
      '/main.DummyService/CreateOne UNKNOWN: rate limit exceeded',
    );
  });

  test('UpdateOne: Exceed rate limit', async () => {
    // Arrange
    const input = {
      text: uuid(),
    };
    const metadata1 = await getMetadata(ports);
    const created = await client.createOne(input, metadata1);

    // Act
    const bombard = async () => {
      const requests = [];
      for (let i = 0; i < Number(process.env.WRITE_RPM_LIMIT) * 5; i++) {
        requests.push(
          client.updateOne({ id: created.id, ...input }, metadata1),
        );
      }
      return await Promise.all(requests);
    };
    const p = bombard();

    // Assert
    await expect(p).rejects.toThrow(
      '/main.DummyService/UpdateOne UNKNOWN: rate limit exceeded',
    );
  });

  test('RemoveOne: Exceed rate limit', async () => {
    // Arrange
    const input = {
      text: uuid(),
    };
    const metadata1 = await getMetadata(ports);
    const createMany = async () => {
      process.env.WRITE_RPM_LIMIT = '99999';
      const many = [];
      for (let i = 0; i < 5; i++) {
        const created = await client.createOne({ ...input }, metadata1);
        await sleep(10);
        many.push(created);
      }
      process.env.WRITE_RPM_LIMIT = '1';
      return many;
    };

    const bombard = async (many) => {
      const requests = [];
      requests.push(
        ...many.map((created) =>
          client.removeOne({ id: created.id, ...input }, metadata1),
        ),
      );
      return await Promise.all(requests);
    };

    // Act
    const many = await createMany();
    const p = bombard(many);

    // Assert
    await expect(p).rejects.toThrow(
      '/main.DummyService/RemoveOne UNKNOWN: rate limit exceeded',
    );
  });
});
