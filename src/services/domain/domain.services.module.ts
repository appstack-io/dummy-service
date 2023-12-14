import { Module } from '@nestjs/common';
import { DummyModule } from './dummy/dummy.module';

@Module({
  imports: [DummyModule],
})
export class DomainServicesModule {
  static getDirname() {
    return __dirname;
  }
}
