import { Module } from '@nestjs/common';
import { DomainServicesModule } from '../../services/domain/domain.services.module';
import { PermissionModule } from '@appstack-io/permissions';
import { IdentityServicesModule } from '@appstack-io/identity';
import { SocialServicesModule } from '@appstack-io/social';
import { MessagingServicesModule } from '@appstack-io/messaging';

const imports = [
  DomainServicesModule,
  IdentityServicesModule,
  SocialServicesModule,
  MessagingServicesModule,
  PermissionModule,
];

export { imports };

@Module({
  imports,
})
export class MainMicroservicesPrivateModule {
  static __filename = __filename;
}
