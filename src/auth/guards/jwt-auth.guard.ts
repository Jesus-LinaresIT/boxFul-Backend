import { Injectable, CanActivate, ExecutionContext, UnauthorizedException } from "@nestjs/common";
import { Reflector } from "@nestjs/core";
import { JwtService } from "@nestjs/jwt";
import { Observable } from "rxjs";

@Injectable()
export class JwtAuthGuard implements CanActivate {
   constructor(private readonly jwtService: JwtService, private readonly reflector: Reflector){

   }

   canActivate(context: ExecutionContext): boolean  {
      const request = context.switchToHttp().getRequest();
      const authHeader = request.headers.authorization;

      if(!authHeader){
         throw new UnauthorizedException('Token no proporcionado')
      }

      // Extrae el token después de "Bearer"
      const token = authHeader.split(' ')[1];
      if (!token){
         throw new UnauthorizedException('Formato de token invalido');
      }

      try{
         const decoded = this.jwtService.verify(token);
         request.user = decoded; //Se guarda la info del usuariio en la request
         return true;
      }catch(error){
         throw new UnauthorizedException('Token invalido o expirado');
      }
   }
}