import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { Usuario } from './entities/usuario.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { FindManyOptions, FindOneOptions, Repository } from 'typeorm';

@Injectable()
export class UsuarioService {
constructor(
  @InjectRepository(Usuario)
  private readonly usuarioRepository: Repository<Usuario>
){}

  create(usuarioDto: CreateUsuarioDto) {
    const c = this.usuarioRepository.create(usuarioDto);
    return this.usuarioRepository.save(c);
  }

  
  async findAll(): Promise<Usuario[]> {
    let criterio : FindManyOptions = { relations: [ 'vehiculo' ] }
    let usuarios : Usuario[] = await this.usuarioRepository.find( criterio );
    return usuarios ;
  }

  async findOne(id: number): Promise<Usuario> {
    let criterio : FindOneOptions = { relations: [ 'vehiculo' ], where: { idUsuario: id } }
    let usuario : Usuario = await this.usuarioRepository.findOne( criterio );
    return usuario ;

    throw new HttpException(
      'No existe un Usuario con ese id',
      HttpStatus.NOT_FOUND
    );
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
