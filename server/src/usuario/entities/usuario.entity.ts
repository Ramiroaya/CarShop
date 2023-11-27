import { Perfil } from "src/perfil/entities/perfil.entity";
import { Provincia } from "src/provincia/entities/provincia.entity";
import { Vehiculo } from "src/vehiculo/entities/vehiculo.entity";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('usuario')
export class Usuario {
    @PrimaryGeneratedColumn()
    idUsuario: number;
    @Column("varchar",{ length :255 ,unique:true})
    email:string ;
    @Column("varchar", {length : 255})
    password: string;
    @OneToMany( type => Vehiculo, vehiculo => vehiculo.usuario)
    public vehiculos: Vehiculo[];
    @OneToOne( type => Perfil, perfil => perfil.usuario)
    @JoinColumn()
    public perfil : Perfil;

    constructor( email: string, password: string){
        this.email= email;
        this.password = password;
    }
    
}
    