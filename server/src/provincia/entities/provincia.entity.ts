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
    @JoinColumn({ name: 'provincia_id' })
    public usuario: Usuario[];

    constructor( nombre: string){
        
        this.nombre= nombre;
    }
}
