import { IsString } from 'class-validator';
// import { IAnswer } from '@qanda/interfaces';

export namespace GetAllAnswersQuery {
  export const topic = 'get-all-answers.command';

  export class Request {
    @IsString()
    questionId: string;
  }

  export class Response {
    // answers: IAnswer[];
  }
}
