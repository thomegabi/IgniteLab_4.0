import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe()) // Essa função é necessária para fazer a validação, ela sempre deve estar presente antes do main

  await app.listen(3000);
}
bootstrap();
