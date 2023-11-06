import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreatePerfilDto {

    @IsNotEmpty()
    @IsString()
    nombre: string;
    @IsNotEmpty()
    @IsString()
    apellido: string;
    @IsNotEmpty()
    @IsString()
    telefono: string;
}
