import { IsString } from 'class-validator';

export namespace QuestionCreateCommand {
  export const topic = 'question-create.command';

  export class Request {
    @IsString()
    text: string;
  }

  export class Response {
    @IsString()
    id: string;
  }
}
