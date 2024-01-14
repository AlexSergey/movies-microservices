import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { QuestionsController } from './controllers/questions.controller';
import { AnswersController } from './controllers/answers.controller';
import {
  QUESTIONS_SERVICE,
  ANSWERS_SERVICE,
  AUTH_SERVICE,
} from './constants/service.contant';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { ANSWERS_QUEUE, AUTH_QUEUE, QUESTIONS_QUEUE } from '@backend/queues';
import { AuthController } from './controllers/auth.controller';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    ClientsModule.registerAsync([
      {
        name: AUTH_SERVICE,
        imports: [ConfigModule],
        useFactory: async (configService: ConfigService) => ({
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
        }),
        inject: [ConfigService],
      },
      {
        name: QUESTIONS_SERVICE,
        imports: [ConfigModule],
        useFactory: async (configService: ConfigService) => ({
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
            queue: QUESTIONS_QUEUE,
            queueOptions: {
              durable: false,
            },
          },
        }),
        inject: [ConfigService],
      },
      {
        name: ANSWERS_SERVICE,
        imports: [ConfigModule],
        useFactory: async (configService: ConfigService) => ({
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
            queue: ANSWERS_QUEUE,
            queueOptions: {
              durable: false,
            },
          },
        }),
        inject: [ConfigService],
      },
    ]),
  ],
  controllers: [QuestionsController, AnswersController, AuthController],
  providers: [],
})
export class ApiGatewayModule {}
