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
      // TRANSFORM QUERY-PARAMS FROM STRING TO DESIRE VALUE
      transform: true,
      transformOptions: {
        enableImplicitConversion: true,
      },
    }),
  );
  await app.listen(process.env.PORT);
  console.log(`App running on port: ${process.env.PORT}`);
}
bootstrap();
