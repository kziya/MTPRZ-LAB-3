import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = await app.get(ConfigService);
  const PORT = configService.get('APP_PORT') || 3000;
  await app.listen(PORT);
}
bootstrap();
