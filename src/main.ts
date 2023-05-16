import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const xmlParser = require('express-xml-bodyparser');

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(xmlParser());
  await app.listen(3000);
}
bootstrap();
