import { NestFactory } from '@nestjs/core';
import helmet from 'helmet';
import { ValidationPipe, Logger } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { ApiGatewayModule } from './api-gateway.module';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const logger = new Logger('api-gateway');
  const app = await NestFactory.create(ApiGatewayModule, { cors: true });
  const configService: ConfigService = app.get(ConfigService);
  const port = configService.get<string>('PORT');
  const globalPrefix = 'api';

  app.use(helmet());
  app.setGlobalPrefix(globalPrefix);
  app.useGlobalPipes(new ValidationPipe());

  const config = new DocumentBuilder()
    .setTitle('Median')
    .setDescription('The Median API description')
    .setVersion('0.1')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup(globalPrefix, app, document);

  await app.listen(port);

  logger.log(`🚀 Api is running on: http://localhost:${port}/${globalPrefix}`);
}

bootstrap();
