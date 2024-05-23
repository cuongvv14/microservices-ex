import { Controller } from '@nestjs/common';
import {
  ClientProxy,
  ClientProxyFactory,
  MessagePattern,
  Transport,
} from '@nestjs/microservices';
import { OrderService } from './order.service';
@Controller()
export class OrderController {
  private client: ClientProxy;
  constructor(private readonly orderService: OrderService) {
    this.client = ClientProxyFactory.create({
      transport: Transport.TCP,
      options: {
        host: '127.0.0.1',
        port: 3001,
      },
    });
  }

  async onModuleInit() {
    // await this.client.connect();
  }

  @MessagePattern({ cmd: 'get_order' })
  async createOrder(data: any) {
    console.log(data);
    const user = await this.client
      .send({ cmd: 'get_user' }, { id: data.userId })
      .toPromise();
    return this.orderService.createOrder(user, data.product);
  }
}
