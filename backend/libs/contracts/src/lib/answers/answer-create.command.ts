import { IsString } from 'class-validator';

export namespace AnswerCreateCommand {
  export const topic = 'answer-create.command';

  export class Request {
    @IsString()
    questionId: string;

    @IsString()
    text: string;
  }

  export class Response {
    id: string;
  }
}
