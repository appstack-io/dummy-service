import { Module } from '@nestjs/common';
import { DummyController } from './dummy.controller';
import { DummyService } from './dummy.service';
import { DummyLogic } from './dummy.logic';
import { ClientModule } from '@appstack-io/client';
import { LimitsModule } from '@appstack-io/limits';

@Module({
  imports: [ClientModule, LimitsModule],
  controllers: [DummyController],
  providers: [DummyService, DummyLogic],
  exports: [],
})
export class DummyModule {}
