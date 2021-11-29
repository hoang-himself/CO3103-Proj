import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('api/v1/ping')
  ping(): string[] {
    return this.appService.ping();
  }
}
