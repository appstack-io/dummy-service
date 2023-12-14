import { Module } from '@nestjs/common';
import { DummyWorkerModule } from '../../services/domain/dummy/workers/dummyWorker.module';
import { IntegrityWorkerModule } from '@appstack-io/integrity';
import { MessageWorkerModule } from '@appstack-io/messaging';
import { WorkersModule } from '@appstack-io/workers';

const imports = [
  WorkersModule,
  DummyWorkerModule,
  IntegrityWorkerModule,
  MessageWorkerModule,
];

export { imports };

@Module({
  imports,
})
export class MainWorkersModule {
  static __filename = __filename;
}
