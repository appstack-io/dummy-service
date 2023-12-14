import { Injectable, Logger, OnModuleInit } from '@nestjs/common';
import { MqService } from '@appstack-io/mq';
import { Job } from 'bullmq';
import { WorkerJobData } from '@appstack-io/workers';
import {
  ClientService,
  DummyServiceClient,
  DummyServiceDefinition,
} from '@appstack-io/client';
import { DummyJobPayload } from '../../../../combined.interfaces';

export type DummyJobData = WorkerJobData<DummyJobPayload>;

@Injectable()
export class DummyWorkerService implements OnModuleInit {
  private logger: Logger = new Logger(DummyWorkerService.name);
  private dummyServiceClient: DummyServiceClient;

  constructor(private mq: MqService, private clientService: ClientService) {
    this.dummyServiceClient =
      this.clientService.getServiceInternalClient<DummyServiceClient>(
        DummyServiceDefinition,
      );
  }

  async onJob(dummyJobData: DummyJobData): Promise<void> {
    const { data, jobId } = dummyJobData;
    const dummy = await this.dummyServiceClient.findOne({ id: data.id });
    this.logger.log({ jobId, data, dummy });
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
