import { Injectable } from '@nestjs/common';
import {
  Dummy,
  DummyCreateOneInput,
  DummyFindOneInput,
  DummyRemoveOneInput,
  DummySearchInput,
  DummyUpdateOneInput,
} from '../../../combined.interfaces';
import { DummyService } from './dummy.service';
import {
  ClientService,
  WorkersServiceClient,
  WorkersServiceDefinition,
} from '@appstack-io/client';

@Injectable()
export class DummyLogic {
  private workersServiceClient: WorkersServiceClient;

  constructor(
    private service: DummyService,
    private clientService: ClientService,
  ) {
    this.workersServiceClient =
      this.clientService.getWorkersClient<WorkersServiceClient>(
        WorkersServiceDefinition,
      );
  }

  async createOne(input: DummyCreateOneInput): Promise<Dummy> {
    const result = await this.service.createOne(input);
    await this.workersServiceClient.publishJob({
      dummyJobPayload: { id: result.id },
    });
    return result;
  }

  async findOne(input: DummyFindOneInput): Promise<Dummy | void> {
    return await this.service.findOne(input);
  }

  async updateOne(input: DummyUpdateOneInput): Promise<Dummy> {
    return await this.service.updateOne(input);
  }

  async removeOne(input: DummyRemoveOneInput): Promise<void> {
    await this.service.removeOne(input);
  }

  async search(input: DummySearchInput): Promise<Dummy[]> {
    return await this.service.search(input);
  }
}
