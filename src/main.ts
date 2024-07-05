import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';

import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // GLOBAL PREFIX
  app.setGlobalPrefix('api/v2');
  app.useGlobalPipes(
    // VALIDATION PIPE
    new ValidationPipe({
      whitelist: true, // REQUIRES WHITELISTED VALUES
      forbidNonWhitelisted: true, // REJECT NON WHITELISTED VALUES
    }),
  );
  await app.listen(3000);
}
bootstrap();
