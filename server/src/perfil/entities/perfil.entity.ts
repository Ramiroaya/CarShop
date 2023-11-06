import { Provincia } from "src/provincia/entities/provincia.entity";
import { Usuario } from "src/usuario/entities/usuario.entity";
import { Column, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";



@Entity('perfil')
export class Perfil {
    @PrimaryGeneratedColumn()
    idPerfil: number;
    @Column("varchar", {length: 255})
    nombre: string;
    @Column("varchar", {length: 255})
    apellido: string;
    @Column("varchar", {length: 20})
    telefono: string;
    @ManyToOne(type => Provincia, provincia => provincia.perfil)
    @JoinColumn()
    public provincia: Provincia;
    @OneToOne( type => Usuario, usuario => usuario.perfil)
    @JoinColumn()
    public usuario: Usuario;

    constructor (nombre: string, apellido: string, telefono: string){
        this.nombre = nombre;
        this.apellido = apellido;
        this.telefono = telefono
    }
}
