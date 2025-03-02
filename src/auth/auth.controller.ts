import { Controller, Post, Body, UsePipes, ValidationPipe } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthDto } from './dto/auth.dto';

@Controller('auth')
export class AuthController {
   constructor( private authService: AuthService ) {

   }

   @Post('register')
   @UsePipes(new ValidationPipe({ whitelist: true, forbidNonWhitelisted: true }))
   async register( @Body() authDto: AuthDto) {
      const { name, email, password } = authDto;
      return this.authService.register(name, email, password);
   }

   @Post('login')
   async login(@Body() authDto: AuthDto) {
      const { email, password } = authDto;
      return this.authService.validateUser(email, password);
   }
}
