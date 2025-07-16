import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function main() {
  const app = await NestFactory.create(AppModule);

  //Para que todas las rutas empiecen con /api/
  app.setGlobalPrefix('api');

  //* Usamos los pipelines para que nos manden datos que no pedimos y ademas que le mande error al cliente
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true
    })
  );


  await app.listen(process.env.PORT ?? 3000);
}
main();
