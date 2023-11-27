import { Usuario } from "src/usuario/entities/usuario.entity";
import { Version } from "src/version/entities/version.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('vehiculo')
export class Vehiculo {
    @PrimaryGeneratedColumn()
    idVehiculo: number;
    @Column({type:"int"})
    año: number;
    @Column({type:"int"})
    kilometros: number;
    @Column("varchar",{ length :10 })
    tipoVehiculo: string;
    @Column("varchar",{ length :10 })
    transmision: string;
    @Column({type:"int"})
    precio: number;
    @Column( {type: 'varchar', length: 255, array: false, default: '' })
    fotos: string;
    @ManyToOne( type => Usuario, usuario => usuario.vehiculos)
    @JoinColumn({ name: 'idUsuario'})
    public usuario: Usuario;
    @ManyToOne( type => Version, version => version.vehiculos)
    @JoinColumn( { name: 'IdVersion'})
    public version: Version;
    

    constructor(  año: number, kilometros: number, tipoVehiculo: string, transmision: string, precio: number, fotos: string) {
        
        this.año = año;
        this.kilometros = kilometros;
        this.tipoVehiculo = tipoVehiculo;
        this.transmision = transmision;
        this.precio = precio;
        this.fotos = fotos;

    }
}
