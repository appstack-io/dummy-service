import '@appstack-io/config';
import { NestFactory } from '@nestjs/core';
import { SetupModule } from './setup.module';

const setup = async () => {
  console.log(`waiting for infra to start...`);
  await new Promise((resolve) => setTimeout(resolve, 10000));
  const setup = await NestFactory.create(SetupModule);
  await setup.init();
};

export { setup };
