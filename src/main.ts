import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({
    transform: true, // convierte tipos automáticamente según el DTO
    whitelist: true, // elimina propiedades que no están en el DTO
    forbidNonWhitelisted: true, // lanza error si envían campos extra
  }));
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
 