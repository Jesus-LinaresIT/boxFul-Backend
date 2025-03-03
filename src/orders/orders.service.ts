import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateOrderDto } from './dto/order.dto';

@Injectable()
export class OrdersService {
   constructor(private readonly prisma: PrismaService) {}

   async createOrder(dto: CreateOrderDto) {
      return this.prisma.order.create({
         data: {
            pickupAddress: dto.pickupAddress,
            senderName: dto.senderName,
            senderLastName: dto.senderLastName,
            senderEmail: dto.senderEmail,
            senderPhone: dto.senderPhone,
            recipientAddress: dto.recipientAddress,
            department: dto.department,
            municipality: dto.municipality,
            referencePoint: dto.referencePoint,
            scheduledDate: dto.scheduledDate,
            packages: {
               create: dto.packages.map(pkg => ({
                  weight: pkg.weight,
                  content: pkg.content,
                  length: pkg.length,
                  height: pkg.height,
                  width: pkg.width,
               })),
            },
         },
         include: { packages: true },
      });
   }
}
