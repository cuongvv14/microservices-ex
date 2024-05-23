import { OrderService } from './../microservices/order/src/order.service';
import { OrderController } from './../microservices/order/src/order.controller';
import { UserService } from './../microservices/user/src/user.service';
import { UserController } from './../microservices/user/src/user.controller';
import { Module } from '@nestjs/common';

@Module({
  imports: [],
  controllers: [OrderController, UserController],
  providers: [OrderService, UserService],
})
export class AppModule {}
