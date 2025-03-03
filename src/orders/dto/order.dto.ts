import {  IsNotEmpty, IsString, IsNumber, IsArray, IsOptional, Validate, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { PackageDto } from './package.dto';

export class CreateOrderDto {
   @IsNotEmpty({ message: 'La dirección de recolección es obligatoria' })
   @IsString({ message: 'La dirección de recolección debe ser un texto' })
   pickupAddress: string;

   @IsNotEmpty({ message: 'El nombre del remitente es obligatorio' })
   @IsString({ message: 'El nombre del remitente debe ser un texto' })
   senderName: string;

   @IsNotEmpty({ message: 'El apellido del remitente es obligatorio' })
   @IsString({ message: 'El apellido del remitente debe ser un texto' })
   senderLastName: string;

   @IsNotEmpty({ message: 'El teléfono del remitente es obligatorio' })
   @IsString({ message: 'El teléfono del remitente debe ser un texto' })
   senderPhone: string;

   @IsNotEmpty({ message: 'El correo del remitente es obligatorio' })
   @IsString({ message: 'Debe ser un correo válido' })
   senderEmail: string;

   @IsNotEmpty({ message: 'La dirección del destinatario es obligatoria' })
   @IsString({ message: 'La dirección del destinatario debe ser un texto' })
   recipientAddress: string;

   @IsNotEmpty({ message: 'El departamento es obligatorio' })
   @IsString({ message: 'El departamento debe ser un texto' })
   department: string;

   @IsNotEmpty({ message: 'El municipio es obligatorio' })
   @IsString({ message: 'El municipio debe ser un texto' })
   municipality: string;

   @IsNotEmpty({ message: 'El punto de referencia es obligatorio' })
   @IsString({ message: 'El punto de referencia debe ser un texto' })
   referencePoint: string;

   @IsNotEmpty({ message: 'La fecha programada es obligatoria' })
   @IsString({ message: 'La fecha programada debe ser un texto en formato válido' })
   scheduledDate: string;

   @IsNotEmpty({ message: 'Debe de incluir al menos un paquete' })
   @IsArray({ message: 'El listado de paquetes debe de ser un Array' })
   @ValidateNested({ each: true })
   @Type(() => PackageDto)
   packages: PackageDto[];
}