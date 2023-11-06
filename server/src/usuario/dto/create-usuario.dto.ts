import { IsEmail, IsNotEmpty, IsString } from "class-validator";


export class CreateUsuarioDto {
   
    @IsNotEmpty()
    @IsString()
    @IsEmail()
    email: string;
    @IsNotEmpty()
    @IsString()
    password: string;
}
