import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('py')
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Post()
  RunCode(@Body() CodetoRun: any): any {
    return this.appService.PostCode(CodetoRun);
  }
}
