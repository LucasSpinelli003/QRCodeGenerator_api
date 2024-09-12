import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: 'http://localhost:5173', // Ou a origem que você deseja permitir
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true, // Se precisar permitir cookies, por exemplo
  });
  await app.listen(process.env.PORT).then(() => {
    console.log(
      `🚀  HTTP server running! - http://localhost:${process.env.PORT}`,
    );
  });
}
bootstrap();
