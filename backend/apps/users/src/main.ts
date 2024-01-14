import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { ConfigService } from '@nestjs/config';
import { AUTH_QUEUE } from '@backend/queues';
import { AppModule } from './app/app.module';

async function bootstrap() {
  const appContext = await NestFactory.createApplicationContext(AppModule);
  const configService = appContext.get(ConfigService);
  console.log('FIRE', configService.get<string>('RABBITMQ_PORT'));
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    {
      transport: Transport.RMQ,
      options: {
        urls: [
          `amqp://${configService.get<string>(
            'RABBITMQ_USER'
          )}:${configService.get<string>(
            'RABBITMQ_PASS'
          )}@${configService.get<string>(
            'RABBITMQ_HOST'
          )}:${configService.get<string>('RABBITMQ_PORT')}`,
        ],
        queue: AUTH_QUEUE,
        queueOptions: {
          durable: false,
        },
      },
    }
  );

  await app.listen();
}

bootstrap();
