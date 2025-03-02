import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcryptjs';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class AuthService {
   constructor(
      private jwtService: JwtService,
      private prisma: PrismaService
   ) {}

   async validateUser(email: string, password: string) {
      const user = await this.prisma.user.findUnique({
         where: { email }
      });
      if(!user) throw new UnauthorizedException('Credenciales incorrectas');

      const isMatch = await bcrypt.compare(password, user.password);
      if(!isMatch) throw new UnauthorizedException('Credenciales incorrectas');

      const payload = {email: user.email, sub: user.id};

      return { access_token: this.jwtService.sign(payload) };
   }

   async register(name: string, email: string, password: string) {
      const hashedPassword = await bcrypt.hash(password, 10);
      const user = await this.prisma.user.create({
         data: {
            name,
            email,
            password: hashedPassword
         }
      });

      return user;
   }
}
