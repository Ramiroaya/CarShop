import { IsNotEmpty, IsString } from "class-validator";

export class CreateVersionDto {
    @IsNotEmpty()
    @IsString()
    nombre: string
}
