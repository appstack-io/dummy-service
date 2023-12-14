import { Module } from '@nestjs/common';
import { HealthModule } from '@appstack-io/health';
import { IdentityServicesModule } from '@appstack-io/identity';
import { GatewayModule } from '@appstack-io/gateway';

@Module({
  imports: [IdentityServicesModule, HealthModule, GatewayModule],
})
export class MainHttpModule {}
