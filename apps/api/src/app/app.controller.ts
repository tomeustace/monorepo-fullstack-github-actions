import { Controller, Get } from '@nestjs/common';

import { Message } from '@monorepo-fullstack-github-actions/api-interfaces';

import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('hello')
  getData(): Message {
    return this.appService.getData();
  }
}
// can call with below in terminal
// curl -m 70 -X GET https://europe-west1-firebase-nestjs-api-demo.cloudfunctions.net/api/hello -H "Authorization:bearer $(gcloud auth print-identity-token)"
