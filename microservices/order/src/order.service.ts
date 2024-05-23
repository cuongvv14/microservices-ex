import { Injectable } from '@nestjs/common';

@Injectable()
export class OrderService {
  createOrder(user: any, product: any) {
    return { orderId: '123', user, product };
  }
}
