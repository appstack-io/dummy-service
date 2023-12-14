import { Controller, UseInterceptors } from '@nestjs/common';
import { GrpcMethod, Payload } from '@nestjs/microservices';
import { DummyLogic } from './dummy.logic';
import {
  Dummy,
  DummyCreateOneInput,
  DummyFindOneInput,
  DummyRemoveOneInput,
  DummySearchInput,
  DummySearchResult,
  DummyUpdateOneInput,
} from '../../../combined.interfaces';
import {
  RpcAuthEntityAssertReadableInterceptor,
  RpcAuthEntityAssertWriteableInterceptor,
  RpcAuthEntityCreateOwnershipInterceptor,
  RpcAuthRequiredInterceptor,
} from '@appstack-io/authnz';
import {
  RpcRateLimitReadInterceptor,
  RpcRateLimitWriteInterceptor,
} from '@appstack-io/limits';
import { RpcNotFoundException } from '@appstack-io/exceptions';

@Controller()
export class DummyController {
  constructor(private logic: DummyLogic) {}

  @UseInterceptors(
    RpcAuthEntityAssertReadableInterceptor,
    RpcRateLimitReadInterceptor,
  )
  @GrpcMethod('DummyService', 'FindOne')
  async findOne(@Payload() input: DummyFindOneInput): Promise<Dummy> {
    const found = await this.logic.findOne(input);
    if (!found) {
      throw new RpcNotFoundException();
    }
    return found;
  }

  @UseInterceptors(
    RpcAuthEntityCreateOwnershipInterceptor,
    RpcRateLimitWriteInterceptor,
  )
  @GrpcMethod('DummyService', 'CreateOne')
  async createOne(@Payload() input: DummyCreateOneInput): Promise<Dummy> {
    return await this.logic.createOne(input);
  }

  @UseInterceptors(
    RpcAuthEntityAssertWriteableInterceptor,
    RpcRateLimitWriteInterceptor,
  )
  @GrpcMethod('DummyService', 'UpdateOne')
  async updateOne(@Payload() input: DummyUpdateOneInput): Promise<Dummy> {
    return await this.logic.updateOne(input);
  }

  @UseInterceptors(
    RpcAuthEntityAssertWriteableInterceptor,
    RpcRateLimitWriteInterceptor,
  )
  @GrpcMethod('DummyService', 'RemoveOne')
  async removeOne(@Payload() input: DummyRemoveOneInput): Promise<void> {
    await this.logic.removeOne(input);
  }

  @UseInterceptors(RpcAuthRequiredInterceptor, RpcRateLimitReadInterceptor)
  @GrpcMethod('DummyService', 'Search')
  async search(@Payload() input: DummySearchInput): Promise<DummySearchResult> {
    const results = await this.logic.search(input);
    return {
      meta: { offset: (input.opts.offset || 0) + results.length },
      results,
    };
  }
}
