import { Module } from '@nestjs/common';
import { DummyController } from './dummy.controller';
import { DummyService } from './dummy.service';
import { DummyLogic } from './dummy.logic';
import { LimitsModule } from '@appstack-io/limits';
import { PermissionModule } from '@appstack-io/permissions';

@Module({
  imports: [LimitsModule, PermissionModule],
  controllers: [DummyController],
  providers: [DummyService, DummyLogic],
  exports: [],
})
export class DummyModule {}
