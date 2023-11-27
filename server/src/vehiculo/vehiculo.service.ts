import { HttpException, HttpStatus, Injectable, Version } from '@nestjs/common';
import { CreateVehiculoDto } from './dto/create-vehiculo.dto';
import { UpdateVehiculoDto } from './dto/update-vehiculo.dto';
import { FindManyOptions, FindOneOptions, Repository } from 'typeorm';
import { Vehiculo } from './entities/vehiculo.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Usuario } from 'src/usuario/entities/usuario.entity';
import { UsuarioService } from 'src/usuario/usuario.service';



@Injectable()
export class VehiculoService {
  constructor(
    @InjectRepository(Vehiculo)
    private readonly vehiculoRepository: Repository<Vehiculo>,
    @InjectRepository(Usuario)
    private readonly usuarioRepository: Repository<Usuario>,  
  ) {}

  async cargarVehiculo(vehiculoDto: CreateVehiculoDto, idUsuario: number): Promise<Vehiculo> {
    const usuario = await this.usuarioRepository.findOne({
      where: { idUsuario },
      relations: ['vehiculos'],
    });

    if (!usuario) {
        throw new HttpException('Usuario no encontrado', HttpStatus.NOT_FOUND);
    }

    const vehiculo = this.vehiculoRepository.create(vehiculoDto);
    console.log('vehiculo');
    usuario.vehiculos.push(vehiculo);

    const usuarioActualizado = await this.usuarioRepository.save(usuario);
    console.log('usuarioActualizado');
    return vehiculo;
  }





  
  

  
  async findAll(): Promise<Vehiculo[]> {
    let criterio : FindManyOptions = { relations: [ 'usuario' ] };
    let vehiculos : Vehiculo[] = await this.vehiculoRepository.find( criterio );
    return vehiculos ;
  }

  async findOne(id: number): Promise<Vehiculo> {
    let criterio : FindOneOptions = { relations: [ 'usuario' ], where: { idVehiculo: id } };
    let vehiculo : Vehiculo = await this.vehiculoRepository.findOne( criterio );
    if (!vehiculo) {
      throw new HttpException(
        'No existe un Vehiculo con ese id',
        HttpStatus.NOT_FOUND
      );
    } else {
      return vehiculo ;
    }
  }

  async update(id: number, updateUsuarioDto: UpdateVehiculoDto) {
    await this.findOne(id);

    try {
      const result = await this.vehiculoRepository.update(
        { idVehiculo: id},
        {...UpdateVehiculoDto, idVehiculo: id}
      );

      console.log(`Update, id: ${id}, result: ${result}`);

      return result;
    } catch (error){
      console.log(error);
      throw new HttpException('no se pudo realizar la accion', HttpStatus.NOT_FOUND);
      }
    }
  

  async remove(id: number) {
    const r = await this.vehiculoRepository.delete(id);

    console.log(
      `Remove, id: ${id}, result: ${r.affected ? 'Eliminado' : 'No eliminado'}`
    );
    if (r.affected) {
      return new HttpException(`Remove, id: ${id}`, HttpStatus.OK);
    } throw new HttpException(
      'No existe un Vehiculo con ese id',
      HttpStatus.NOT_FOUND
    );
  }
}
