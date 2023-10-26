import { IsEmail, IsNotEmpty, IsString } from "class-validator";
import { Provincia } from "src/provincia/entities/provincia.entity";

export class CreateUsuarioDto {
    @IsNotEmpty()
    @IsString()
    nombre: string;
    @IsNotEmpty()
    @IsString()
    apellido: string;
    @IsNotEmpty()
    @IsString()
    @IsEmail()
    email: string;
    @IsNotEmpty()
    @IsString()
    telefono: string;
    @IsNotEmpty()
    @IsString()
    password: string;
    provincia_id: number;
}
