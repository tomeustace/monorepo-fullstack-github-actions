import { Injectable } from '@nestjs/common';
import { Message } from '@monorepo-fullstack-github-actions/api-interfaces';

@Injectable()
export class AppService {
  getData(): Message {
    return { message: 'Welcome to nestjs api!' };
  }
}
