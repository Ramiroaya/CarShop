export class CreateVehiculoDto {
    idVehiculo: number;
    version_id: number;
    año: number;
    kilometros: number;
    tipoVehiculo: string;
    transmision: string;
    precio: number;
    fotos: string[];
    usuario_id: number
}
