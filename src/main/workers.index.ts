import '@appstack-io/config';
import { main } from '@appstack-io/main';
import { MainWorkersModule } from './components/main.workers.module';

(async () => {
  await main({
    workersModule: MainWorkersModule,
    otel: true,
  });
})();
