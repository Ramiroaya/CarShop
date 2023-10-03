import { Usuario } from "src/usuario/entities/usuario.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('vehiculo')
export class Vehiculo {
    @PrimaryGeneratedColumn()
    idVehiculo: number;
    @Column("varchar",{ length :10 ,unique:true })
    dominio: string;
    @Column({type:"number"})
    version_id: number;
    @Column({type:"number"})
    año: number;
    @Column({type:"number"})
    kilometros: number;
    @Column("varchar",{ length :10 })
    tipoVehiculo: string;
    @Column("varchar",{ length :10 })
    transmision: string;
    @Column({type:"number"})
    precio: number;
    @Column()
    fotos: string[];
    @ManyToOne( type => Usuario, usuario => usuario.vehiculo)
    @JoinColumn()
    public usuario: Usuario;

    constructor( version_id: number, año: number, kilometros: number, tipoVehiculo: string, transmision: string, precio: number, fotos: []){

        this.version_id = version_id;
        this.año = año;
        this.kilometros = kilometros;
        this.tipoVehiculo = tipoVehiculo;
        this.transmision = transmision;
        this.precio = precio;
        this.fotos = fotos;

    }
}
