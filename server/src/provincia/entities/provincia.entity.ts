import { type } from "os";
import { Perfil } from "src/perfil/entities/perfil.entity";
import { Column, Entity, JoinColumn, OneToMany, PrimaryGeneratedColumn } from "typeorm";


@Entity('provincia')
export class Provincia {
    @PrimaryGeneratedColumn()
    idProvincia: number;
    @Column("varchar", {length: 45})
    nombre: string;
    @OneToMany( type => Perfil, perfil => perfil.provincia)
    @JoinColumn({ name: 'provincia_id' })
    public perfil: Perfil[];

    constructor( nombre: string){
        
        this.nombre= nombre;
    }
}
