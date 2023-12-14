import { Module } from '@nestjs/common';
import { DomainServicesModule } from '../../services/domain/domain.services.module';
import { IdentityServicesModule } from '@appstack-io/identity';
import { SocialServicesModule } from '@appstack-io/social';
import { MessagingServicesModule } from '@appstack-io/messaging';

const imports = [
  DomainServicesModule,
  IdentityServicesModule,
  SocialServicesModule,
  MessagingServicesModule,
];

export { imports };

@Module({
  imports,
})
export class MainMicroservicesPublicModule {
  static __filename = __filename;
}
