import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateModeloDto } from './dto/create-modelo.dto';
import { UpdateModeloDto } from './dto/update-modelo.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Modelo } from './entities/modelo.entity';
import { FindManyOptions, FindOneOptions, Repository } from 'typeorm';

@Injectable()
export class ModeloService {
  constructor(
    @InjectRepository(Modelo)
    private readonly modelorRepository: Repository<Modelo>){}
  
  create(modeloDto: CreateModeloDto) {
    const c = this.modelorRepository.create(modeloDto);
    return this.modelorRepository.save(c);
  }

  async findAll(): Promise<Modelo[]> {
    let criterio : FindManyOptions = { relations : [ 'version' ]};
    let modelos : Modelo[] = await this.modelorRepository.find(criterio);
    return modelos;
  }

  async findOne(id: number): Promise<Modelo> {
    let criterio : FindOneOptions = { relations : [ 'version' ], where: {idModelo: id } };
    let modelo : Modelo  = await this.modelorRepository.findOne(criterio);
    return modelo;

    throw new HttpException(
      'No existe una Modelo con ese Id',
      HttpStatus.NOT_FOUND
    );
  }

  async update(id: number, updateModeloDto: UpdateModeloDto) {
    await this.findOne(id);

    try {
      const result = await this.modelorRepository.update(
        { idModelo : id},
        {...updateModeloDto, idModelo: id}
      );
      console.log(`Update, id: ${id}, result: ${result}`);
      return result;
    }catch (error) {
      console.log(error);
      throw new HttpException('no se pudo realizar la accion', HttpStatus.NOT_FOUND);
    }
  }

  async remove(id: number) {
    const r = await this.modelorRepository.delete(id);
    console.log(
      `Remove, id: ${id}, result: ${r.affected ? 'Eliminado' : 'No Eliminado'}`);  
      if (r.affected) {
      return new HttpException(`Remove, id: ${id}`, HttpStatus.OK);
      }
      throw new HttpException('No existe una Marca con ese Id',
      HttpStatus.NOT_FOUND);
 }
}
