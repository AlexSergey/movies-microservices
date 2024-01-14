import { IsNumber, IsString } from 'class-validator';

export class CreateAnswerDto {
  @IsString()
  public text: string;

  @IsNumber()
  public questionId: number;
}
