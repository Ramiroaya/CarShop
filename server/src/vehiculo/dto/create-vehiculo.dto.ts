import { IsInt, IsNotEmpty, IsString } from "class-validator";

export class CreateVehiculoDto {
    @IsInt()
    año: number;
    @IsInt()
    kilometros: number;
    @IsNotEmpty()
    @IsString()
    tipoVehiculo: string;
    @IsNotEmpty()
    @IsString()
    transmision: string;
    @IsInt()
    precio: number;
    fotos: string;

}
