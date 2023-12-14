import { Module } from '@nestjs/common';
import { DummyWorkerService } from './dummyWorker.service';
import { MqModule } from '@appstack-io/mq';

@Module({
  imports: [MqModule],
  providers: [DummyWorkerService],
})
export class DummyWorkerModule {
  static getDirname() {
    return __dirname;
  }
}
