import { IsNotEmpty, IsString } from "class-validator";

export class CreateModeloDto {
    @IsNotEmpty()
    @IsString()
    nombre: string;
}
