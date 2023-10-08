import { Provincia } from "src/provincia/entities/provincia.entity";
import { Vehiculo } from "src/vehiculo/entities/vehiculo.entity";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity('usuario')
export class Usuario {
    @PrimaryGeneratedColumn()
    idUsuario: number;
    @Column("varchar",{ length :255 })
    nombre: string;
    @Column("varchar",{ length :255 })
    apellido: string;
    @Column("varchar",{ length :255 ,unique:true})
    email:string ;
    @Column("varchar",{ length :20 })
    telefono: string;
    @Column("boolean", { unique:true })
    administrador: boolean;
    @Column("varchar", {length : 255})
    password: string;
    @OneToMany( type => Vehiculo, vehiculo => vehiculo.usuario)
    @JoinColumn()
    public vehiculo: Vehiculo[];
    @ManyToOne( type => Provincia, provincia => provincia.usuario)
    @JoinColumn()
    public provincia: Provincia;

    constructor(nombre: string, apellido: string, email: string, telefono: string,  administrador: boolean, password: string){
        this.nombre = nombre;
        this.apellido= apellido;
        this.email= email;
        this.telefono= telefono;
        this.administrador= false;
        this.password = password;
    }
    
}
    