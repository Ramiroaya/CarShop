import { Modelo } from "src/modelo/entities/modelo.entity";
import { Vehiculo } from "src/vehiculo/entities/vehiculo.entity";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity('version')
export class Version {
    @PrimaryGeneratedColumn()
    idVersion: number;
    @Column("varchar", {length:255})
    nombre: string;
    @ManyToOne( type => Modelo, modelo => modelo.versiones)
    @JoinColumn()
    public modelo: Modelo;
    @OneToMany( type => Vehiculo, vehiculo => vehiculo.version)
    @JoinColumn()
    public vehiculos: Vehiculo[];

    constructor(nombre: string) {
        this.nombre = nombre;
    }
}
