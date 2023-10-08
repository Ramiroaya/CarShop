import { type } from "os";
import { Usuario } from "src/usuario/entities/usuario.entity";
import { Column, Entity, JoinColumn, OneToMany, PrimaryGeneratedColumn } from "typeorm";


@Entity('provincia')
export class Provincia {
    @PrimaryGeneratedColumn()
    idProvincia: number;
    @Column("varchar", {length: 45})
    nombre: string;
    @OneToMany( type => Usuario, usuario => usuario.provincia)
    @JoinColumn()
    public usuario: Usuario;

    constructor(idProvincia: number, nombre: string){
        this.idProvincia = idProvincia;
        this.nombre= nombre;
    }
}