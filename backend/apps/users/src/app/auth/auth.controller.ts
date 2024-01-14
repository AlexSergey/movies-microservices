import { Controller, Get } from '@nestjs/common';
import { EventPattern } from '@nestjs/microservices';
import { AuthRegisterCommand } from '@backend/contracts';

@Controller()
export class AuthController {
  @EventPattern(AuthRegisterCommand.topic)
  registerUser() {
    console.log('createQuestions service');
  }
  getData() {
    // return this.appService.getData();
  }
}
