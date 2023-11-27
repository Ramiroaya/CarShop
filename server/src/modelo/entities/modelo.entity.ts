import { Marca } from "src/marca/entities/marca.entity";
import { Version } from "src/version/entities/version.entity";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity('modelo')
export class Modelo {
    @PrimaryGeneratedColumn()
    idModelo: number;
    @Column('varchar', {length:45})
    nombre: string;
    @ManyToOne( type => Marca, marca => marca.modelos)
    @JoinColumn()
    public marca: Marca;
    @OneToMany( type => Version, version => version.modelo)
    @JoinColumn()
    public versiones: Version[];
    
    
    constructor(nombre: string) {
        this.nombre = nombre;
    }
    
    
}
