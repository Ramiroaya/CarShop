import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { Usuario } from './entities/usuario.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { FindManyOptions, FindOneOptions, Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { response } from 'express';




@Injectable()
export class UsuarioService {
  constructor(
    @InjectRepository(Usuario)
    private readonly usuarioRepository: Repository<Usuario>
  ) {}

  async create(usuarioDto: CreateUsuarioDto) {
    const existingUser = await this.usuarioRepository.findOne({ where: { email: usuarioDto.email } });
  
    if (existingUser) {
      throw new HttpException('El correo electrónico ya está en uso.', HttpStatus.BAD_REQUEST);
    }
    
    const hashedPassword = await bcrypt.hash(usuarioDto.password, 10);
    const newUser = await this.usuarioRepository.create({
      email: usuarioDto.email,
      password: hashedPassword, 
    });
    await this.usuarioRepository.save(newUser);
    return newUser;
  } catch (error) {
    throw new HttpException('Error en el servidor al crear el usuario.', HttpStatus.INTERNAL_SERVER_ERROR);
  }



  
  async findAll(): Promise<Usuario[]> {
    let criterio : FindManyOptions = { relations: [ 'vehiculo' ] }
    let usuarios : Usuario[] = await this.usuarioRepository.find( criterio );
    return usuarios ;
  }

  async findOne(id: number): Promise<Usuario> {
    let criterio : FindOneOptions = { relations: [ 'vehiculo' ], where: { idUsuario: id } }
    let usuario : Usuario = await this.usuarioRepository.findOne( criterio );
    
    if(!usuario){
      throw new HttpException(
        'No existe un Usuario con ese id',
        HttpStatus.NOT_FOUND
      );
    }
    return usuario ;

  
  }

  async findEmail(email: string): Promise<Usuario | null> {
    const usuario = await this.usuarioRepository.findOne({ where: { email } });
    return usuario || null; 
  }
  

  async update(id: number, updateUsuarioDto: UpdateUsuarioDto) {
    await this.findOne(id);

    try {
      const result = await this.usuarioRepository.update(
        { idUsuario: id},
        {...updateUsuarioDto, idUsuario: id}
      );

      console.log(`Update, id: ${id}, result: ${result}`);

      return result;
    } catch (error){
      console.log(error);
      throw new HttpException('no se encontro el Usuario', HttpStatus.NOT_FOUND);
      }
    }
  

  async remove(id: number) {
    const r = await this.usuarioRepository.delete(id);

    console.log(
      `Remove, id: ${id}, result: ${r.affected ? 'Eliminado' : 'No eliminado'}`
    );
    if (r.affected) {
      return new HttpException(`Remove, id: ${id}`, HttpStatus.OK);
    } throw new HttpException(
      'No existe un Usuario con ese id',
      HttpStatus.NOT_FOUND
    );
  }
}
