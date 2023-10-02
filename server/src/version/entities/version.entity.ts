import { Modelo } from "src/modelo/entities/modelo.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('version')
export class Version {
    @PrimaryGeneratedColumn()
    idVersion: number;
    @Column()
    nombre: string;
    @ManyToOne( type => Modelo, modelo => modelo.version)
    @JoinColumn()
    public modelo: Modelo[];

    constructor(nombre: string) {
        this.nombre = nombre;
    }
}
