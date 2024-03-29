import { IsEmail, IsNotEmpty, IsString, MaxLength, MinLength } from "class-validator";

export class LoginDto {
    @IsEmail()
    @IsNotEmpty()
    email: string;   
    @MinLength(6)
    @MaxLength(15)
    @IsString()
    @IsNotEmpty()
    password: string;
}