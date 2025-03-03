import { Body, Controller, Post, UseGuards, UsePipes, ValidationPipe } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { CreateOrderDto } from './dto/order.dto';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';

@Controller('orders')
export class OrdersController {
   constructor(private readonly OrdersService: OrdersService) {

   }

   @Post('create')
   @UseGuards(JwtAuthGuard)
   @UsePipes(new ValidationPipe({ whitelist: true, forbidNonWhitelisted: true }))
   async createOrder(@Body() createOrderDto: CreateOrderDto) {
      return this.OrdersService.createOrder(createOrderDto);
   }
}
