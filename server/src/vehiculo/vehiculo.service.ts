import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateVehiculoDto } from './dto/create-vehiculo.dto';
import { UpdateVehiculoDto } from './dto/update-vehiculo.dto';
import { FindManyOptions, FindOneOptions, Repository } from 'typeorm';
import { Vehiculo } from './entities/vehiculo.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class VehiculoService {
  constructor(
    @InjectRepository(Vehiculo)
     private readonly vehiculoRepository: Repository<Vehiculo>
  ){}

  create(vehiculoDto: CreateVehiculoDto) {
    const c = this.vehiculoRepository.create(vehiculoDto);
    return this.vehiculoRepository.save(c);
  }

  
  async findAll(): Promise<Vehiculo[]> {
    let criterio : FindManyOptions = { relations: [ 'usuario' ] };
    let vehiculos : Vehiculo[] = await this.vehiculoRepository.find( criterio );
    return vehiculos ;
  }

  async findOne(id: number): Promise<Vehiculo> {
    let criterio : FindOneOptions = { relations: [ 'usuario' ], where: { idVehiculo: id } };
    let vehiculo : Vehiculo = await this.vehiculoRepository.findOne( criterio );
    return vehiculo ;

    throw new HttpException(
      'No existe un Vehiculo con ese id',
      HttpStatus.NOT_FOUND
    );
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
