import { IsNotEmpty, IsNumber, IsString, Min } from "class-validator";

export class PackageDto {
   @IsNotEmpty({ message: 'El peso es obligatorio' })
   @IsNumber({}, { message: 'El peso debe ser un número' })
   @Min(1, { message: 'El peso debe ser mayor a 1 lb' })
   weight: number;

   @IsNotEmpty({ message: 'El contenido es obligatorio' })
   @IsString({ message: 'El peso debe ser un número' })
   content: string;

   @IsNotEmpty({ message: 'El largo es obligatorio' })
   @IsNumber({}, { message: 'El largo debe ser un número' })
   @Min(1, { message: 'El largo debe ser al menos 1 cm' })
   length: number;

   @IsNotEmpty({ message: 'El alto es obligatorio' })
   @IsNumber({}, { message: 'El alto debe ser un número' })
   @Min(1, { message: 'El alto debe ser al menos 1 cm' })
   height: number;

   @IsNotEmpty({ message: 'El ancho es obligatorio' })
   @IsNumber({}, { message: 'El ancho debe ser un número' })
   @Min(1, { message: 'El ancho debe ser al menos 1 cm' })
   width: number;
}