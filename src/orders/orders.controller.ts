import { Body, Controller, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { CreateOrderDto } from './dto/order.dto';

@Controller('orders')
export class OrdersController {
   constructor(private readonly OrdersService: OrdersService) {

   }

   @Post('create')
   @UsePipes(new ValidationPipe({ whitelist: true, forbidNonWhitelisted: true }))
   async createOrder(@Body() createOrderDto: CreateOrderDto) {
      return this.OrdersService.createOrder(createOrderDto);
   }
}
