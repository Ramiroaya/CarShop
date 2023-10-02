export class CreateUsuarioDto {
    nombre: string;
    apellido: string;
    email: string;
    telefono: string;
    provincia_id: number;
    administrador: boolean;
    password: string
}
