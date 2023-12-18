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
import { WorkersService } from '../../../client';

@Injectable()
export class DummyLogic {
  private workers: WorkersService = new WorkersService({
    host: 'localhost',
    port: process.env.ASIO_WORKERS_PORT,
  });

  constructor(private service: DummyService) {}

  async createOne(input: DummyCreateOneInput): Promise<Dummy> {
    const result = await this.service.createOne(input);
    await this.workers.publishJob({
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
