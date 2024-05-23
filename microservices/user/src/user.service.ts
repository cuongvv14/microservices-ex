import { Injectable, OnModuleInit } from '@nestjs/common';
import {
  ClientProxy,
  ClientProxyFactory,
  Transport,
} from '@nestjs/microservices';

@Injectable()
export class UserService implements OnModuleInit {
  private client: ClientProxy;

  constructor() {
    this.client = ClientProxyFactory.create({
      transport: Transport.TCP,
      options: {
        host: '127.0.0.1',
        port: 3002,
      },
    });
  }
  getUser(id: string) {
    return { id: 1, name: 'John Doe' };
  }

  onModuleInit() {
    console.log('abc');
    this.client.send({ cmd: 'get_order' }, { userId: 1 }).toPromise();
  }
}
