import { Module } from '@nestjs/common';
import { HealthModule } from '@appstack-io/health';
import { IdentityServicesModule } from '@appstack-io/identity';

@Module({
  imports: [IdentityServicesModule, HealthModule],
})
export class MainHttpModule {}
