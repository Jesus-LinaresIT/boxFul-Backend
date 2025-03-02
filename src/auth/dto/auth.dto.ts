import { IsEmail, isNotEmpty, IsNotEmpty, MinLength } from "class-validator";

export class AuthDto {
   @IsEmail({}, { message: 'Debe de ser un correo válido.'})
   email: string;

   @IsNotEmpty({ message: 'El nombre es obligatorio'})
   name: string;

   @IsNotEmpty({ message: 'La contraseña es obligatoria'})
   @MinLength(6, { message: 'La contraseña debe de tener al menos 6 caracteres.'})
   password: string;
}