import { Body, Controller, Get, Inject, Param, Post, ParseIntPipe } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { ANSWERS_SERVICE } from '../constants/service.contant';
import { CreateAnswerDto } from '../dtos/create-answer.dto';

@Controller('/answers')
export class AnswersController {
  constructor(
    @Inject(ANSWERS_SERVICE)
    private clientAnswer: ClientProxy,
  ) {}

  @Post()
  async createAnswer(@Body() dto: CreateAnswerDto) {
    console.log(dto);
    // return this.clientAnswer.emit('answer_created', '');
    // return this.clientAnswer.emit('answer_created', '');
    // createAnswer.questionId = questionsId;
    // return this.clientAnswer.emit('answer_created', createAnswer);
  }

  @Get(':id')
  async getAnswers(@Param() { id }: { id: string }) {
    console.log('getAnswers', id);
    // createAnswer.questionId = questionsId;
    // return this.clientAnswer.emit('answer_created', createAnswer);
  }

  /*@Post('/:questionsId/answers')
  async createAnswer(
    @Body() createAnswer: CreateAnswerDto,
    @Param('questionsId', ParseIntPipe) questionsId: number,
  ) {
    createAnswer.questionId = questionsId;
    return this.clientAnswer.emit('answer_created', createAnswer);
  }

  @Get('/:questionsId/answers')
  async getAnswers(@Param('questionsId', ParseIntPipe) questionsId: number) {
    return this.clientAnswer.send({ cmd: 'get-all-answers' }, { questionsId });
  }*/
}
