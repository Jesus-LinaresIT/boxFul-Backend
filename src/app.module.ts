import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { PrismaService } from './prisma/prisma.service';
import { JwtService } from '@nestjs/jwt';
import { AuthService } from './auth/auth.service';
import { OrdersModule } from './orders/orders.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    AuthModule,
    OrdersModule
  ],
  controllers: [AppController],
  providers: [AppService, PrismaService, JwtService],
  exports: [PrismaService]
})
export class AppModule {}
