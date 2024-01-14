import { Body, Controller, Get, Inject, Post } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { QUESTIONS_SERVICE } from '../constants/service.contant';
import { CreateQuestionDto } from '../dtos/create-question.dto';

@Controller('/users')
export class QuestionsController {
  constructor(
    @Inject(QUESTIONS_SERVICE)
    private clientQuestions: ClientProxy
  ) {}

  @Get('me')
  async getUserInformation() {
    console.log('getUserInformation');
  }
}
