import { HttpException, Injectable, HttpCode, HttpStatus } from '@nestjs/common';
import { CreateMarcaDto } from './dto/create-marca.dto';
import { UpdateMarcaDto } from './dto/update-marca.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Marca } from './entities/marca.entity';
import { Repository, FindManyOptions, FindOneOptions } from 'typeorm';

@Injectable()
export class MarcaService {
  constructor(
    @InjectRepository(Marca)
    private readonly marcaRepository: Repository<Marca>){}
  

  create(marcaDto: CreateMarcaDto) {
    const c = this.marcaRepository.create(marcaDto);
    return this.marcaRepository.save(c);
  }

  async findAll(): Promise<Marca[]> {
    let criterio : FindManyOptions = { relations : [ 'modelo' ] };
    let marcas: Marca[] = await this.marcaRepository.find(criterio);
    return marcas;
  }

  async findOne(id: number): Promise<Marca> {
    let criterio : FindOneOptions = { relations : [ 'modelo' ], where: { idMarca : id } };
    let marca : Marca = await this.marcaRepository.findOne(criterio);
    return marca;

    throw new HttpException(
      'No existe una Marca con ese Id',
      HttpStatus.NOT_FOUND
    );
  }

  async update(id: number, updateMarcaDto: UpdateMarcaDto) {
    await this.findOne(id);

    try {
      const result = await this.marcaRepository.update(
        { idMarca : id},
        {...updateMarcaDto, idMarca: id}
      );

      console.log(`Update, id: ${id}, result: ${result}`);
      return result;
    }catch (error) {
      console.log(error);
      throw new HttpException('no se pudo realizar la accion', HttpStatus.NOT_FOUND)
    }
  }

  async remove(id: number) {
    const r = await this.marcaRepository.delete(id);
    console.log(
      `Remove, id: ${id}, result: ${r.affected ? 'Elimindao' : 'No Eliminado'}`);
      if (r.affected) {
        return new HttpException(`Remove, id: ${id}`, HttpStatus.OK);
      throw new HttpException('No existe una Marca con ese Id',
      HttpStatus.NOT_FOUND);
   }
 }
}