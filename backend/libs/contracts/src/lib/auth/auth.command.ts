import { IsString } from 'class-validator';

export namespace AuthRegisterCommand {
  export const topic = 'auth.register';

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
