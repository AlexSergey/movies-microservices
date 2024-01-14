import { Body, Controller, Get, Inject, Post } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { QUESTIONS_SERVICE } from '../constants/service.contant';
import { CreateQuestionDto } from '../dtos/create-question.dto';

@Controller('/questions')
export class QuestionsController {
  constructor(
    @Inject(QUESTIONS_SERVICE)
    private clientQuestions: ClientProxy,
  ) {}

  @Post()
  async createQuestion(@Body() dto: CreateQuestionDto) {
    console.log('createQuestions', dto);
    // createAnswer.questionId = questionsId;
    // return this.clientAnswer.emit('answer_created', createAnswer);
  }

  @Get()
  async getQuestions() {
    console.log('getQuestions');
    // createAnswer.questionId = questionsId;
    // return this.clientAnswer.emit('answer_created', createAnswer);
  }

  /*@Post()
  async createQuestion(@Body() createQuestionDto: CreateQuestionDto) {
    return this.clientQuestions.emit('question_created', createQuestionDto);
  }

  @Get()
  async getQuestions() {
    return this.clientQuestions.send(
      {
        cmd: 'get-all-questions',
      },
      '',
    );
  }*/
}
