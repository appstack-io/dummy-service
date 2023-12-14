import { Module, OnModuleInit } from '@nestjs/common';
import { ArangodbModule, ArangodbService } from '@appstack-io/arangodb';

@Module({
  imports: [ArangodbModule],
  providers: [ArangodbService],
})
export class SetupModule implements OnModuleInit {
  constructor(private arangodb: ArangodbService) {}

  async onModuleInit(): Promise<any> {
    await this.arangodb.initDb();
  }
}
