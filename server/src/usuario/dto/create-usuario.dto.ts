import { IsEmail, IsNotEmpty, IsString } from "class-validator";

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
    administrador: boolean;
    @IsNotEmpty()
    @IsString()
    password: string
}
