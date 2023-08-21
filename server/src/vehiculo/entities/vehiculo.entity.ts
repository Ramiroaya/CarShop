import { Usuario } from "src/usuario/entities/usuario.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('vehiculo')
export class Vehiculo {
    @PrimaryGeneratedColumn()
    idVehiculo: number;
    @Column("varchar",{ length :10 ,unique:true})
    dominio: string;
    @Column("varchar",{ length :10 ,unique:true})
    marca: string;
    @Column("varchar",{ length :10 ,unique:true})
    modelo: string ;
    @Column("varchar",{ length :10 ,unique:true})
    version: string;
    @Column({type:"number"})
    año: number;
    @Column({type:"number"})
    kilometros: number;
    @Column("varchar",{ length :10 ,unique:true})
    tipoVehiculo: string;
    @Column("varchar",{ length :10 ,unique:true})
    transmision: string;
    @Column({type:"number"})
    precio: number;
    @Column()
    fotos: string[];
    @ManyToOne( type => Usuario, usuario => usuario.vehiculo)
    @JoinColumn()
    public usuario: Usuario;

    constructor(dominio: string, marca: string, modelo: string, version: string, año: number, kilometros: number, tipoVehiculo: string, transmision: string, precio: number, fotos: []){
        this.dominio = dominio;
        this.marca = marca;
        this.modelo = modelo;
        this.version = version;
        this.año = año;
        this.kilometros = kilometros;
        this.tipoVehiculo = tipoVehiculo;
        this.transmision = transmision;
        this.precio = precio;
        this.fotos = fotos;

    }
}
