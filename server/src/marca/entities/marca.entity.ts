import { Modelo } from "src/modelo/entities/modelo.entity";
import { Column, Entity, JoinColumn, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity('marca')
export class Marca {
   @PrimaryGeneratedColumn() 
   idMarca: number;
   @Column("varchar", {length : 255})
   nombre: string;
   @OneToMany(type => Modelo, modelo=> modelo.marca)
   @JoinColumn()
   public modelo: Modelo[];
   

   constructor(nombre: string) {
      this.nombre = nombre;
   }
}
