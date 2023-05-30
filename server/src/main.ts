import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    credentials: true,
    origin: (origin, callback) => {
      callback(null, true);
    },
  });
  await app.listen(3000);
}
bootstrap().then(() => {
  console.log('Server is running on http://localhost:3000');
});