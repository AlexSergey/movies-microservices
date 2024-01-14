import { IsString } from 'class-validator';

export class CreateQuestionDto {
  @IsString()
  public text: string;
}
