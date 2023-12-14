import '@appstack-io/config';
import { MainMicroservicesPublicModule } from './components/main.microservices.public.module';
import { main } from '@appstack-io/main';
import { MainHttpModule } from './components/main.http.module';
import { PubsubServerModule } from '@appstack-io/pubsub';
import { MainMicroservicesPrivateModule } from './components/main.microservices.private.module';
import { MainWorkersModule } from './components/main.workers.module';

(async () => {
  await main({
    publicMicroservicesModule: MainMicroservicesPublicModule,
    privateMicroservicesModule: MainMicroservicesPrivateModule,
    publicHttpModule: MainHttpModule,
    privateHttpModule: MainHttpModule,
    pubsubModule: PubsubServerModule,
    workersModule: MainWorkersModule,
    otel: true,
  });
})();
