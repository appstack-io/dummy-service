import { Module } from '@nestjs/common';
import { DummyWorkerModule } from '../../services/domain/dummy/workers/dummyWorker.module';
import { WorkersModule } from '@appstack-io/workers';
import { MessagingWorkersModule } from '@appstack-io/messaging';

const imports = [WorkersModule, DummyWorkerModule, MessagingWorkersModule];

export { imports };

@Module({
  imports,
})
export class MainWorkersModule {
  static __filename = __filename;
}
