import { Injectable, Logger, OnModuleInit } from '@nestjs/common';
import { MqService } from '@appstack-io/mq';
import { Job } from 'bullmq';
import { WorkerJobData } from '@appstack-io/workers';
import { DummyJobPayload } from '../../../../combined.interfaces';

export type DummyJobData = WorkerJobData<DummyJobPayload>;

@Injectable()
export class DummyWorkerService implements OnModuleInit {
  private logger: Logger = new Logger(DummyWorkerService.name);

  constructor(private mq: MqService) {}

  async onJob(dummyJobData: DummyJobData): Promise<void> {
    const { data, jobId } = dummyJobData;
    this.logger.log({ jobId, data });
  }

  async onModuleInit(): Promise<void> {
    await this.mq.startWorker({
      queue: 'dummy',
      handler: async (job: Job) => {
        const { data, id } = job;
        const dummyJobData: DummyJobData = {
          jobId: id,
          data,
        };
        await this.onJob(dummyJobData);
      },
    });
  }
}
