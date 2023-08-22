import { Vehiculo } from "src/vehiculo/entities/vehiculo.entity";
import { Column, Entity, JoinColumn, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity('usuario')
export class Usuario {
    @PrimaryGeneratedColumn()
    idUsuario: number;
    @Column("varchar",{ length :15 })
    nombre: string;
    @Column("varchar",{ length :15 })
    apellido: string;
    @Column("varchar",{ length :25 ,unique:true})
    email:string ;
    @Column("varchar",{ length :20 })
    telefono: string;
    @Column("varchar",{ length :20 })
    provincia: string;
    @Column("varchar",{ length :20 })
    localidad: string;
    @Column("varchar",{ length :30 })
    direccion: string;
    @Column({ unique:true })
    administrador: boolean;
    @OneToMany( type => Vehiculo, vehiculo => vehiculo.usuario)
    @JoinColumn()
    public vehiculo: Vehiculo[];

    constructor(nombre: string, apellido: string, email: string, telefono: string, provincia: string, localidad: string, direccion: string, administrador: boolean){
        this.nombre = nombre;
        this.apellido= apellido;
        this.email= email;
        this.telefono= telefono;
        this.provincia= provincia;
        this.localidad= localidad;
        this.direccion= direccion;
        this.administrador= false;
    }
    
}
    