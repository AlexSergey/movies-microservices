import { Body, Controller, Get, Inject, Post } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { AUTH_SERVICE } from '../constants/service.contant';
import { CreateQuestionDto } from '../dtos/create-question.dto';
import { AuthRegisterCommand } from '@backend/contracts';

@Controller('/auth')
export class AuthController {
  constructor(
    @Inject(AUTH_SERVICE)
    private clientAuth: ClientProxy
  ) {}

  @Post('register')
  async registerNewUser() {
    const a = this.clientAuth.emit(AuthRegisterCommand.topic, {
      test: 'register ',
    });
    console.log('registerNewUser', a);
  }

  @Post('login')
  async loginExistedUser() {
    console.log('loginExistedUser');
  }

  @Get('refresh')
  async refreshAuthToken() {
    console.log('refreshAuthToken');
  }

  @Post('restorePassword')
  async restorePassword() {
    console.log('restorePassword');
  }
}
