import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateProvinciaDto } from './dto/create-provincia.dto';
import { UpdateProvinciaDto } from './dto/update-provincia.dto';
import { Provincia } from './entities/provincia.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { FindManyOptions, FindOneOptions, Repository } from 'typeorm';


@Injectable()
export class ProvinciaService {
constructor(
  @InjectRepository(Provincia)
   private readonly provinciaRepository: Repository<Provincia>
){}

  create(provinciaDto: CreateProvinciaDto) {
    const provincia = this.provinciaRepository.create(provinciaDto);
    return this.provinciaRepository.save(provincia);
  }

  async findAll(): Promise<Provincia[]> {
    return await this.provinciaRepository.find();
      
  }

  async findOneByNombre(nombre: string): Promise<Provincia | undefined> {
    const provincia = await this.provinciaRepository.findOne({ where: { nombre } });
    if (!provincia) {
      throw new HttpException('Provincia no encontrada', HttpStatus.NOT_FOUND);
    }
    return provincia;
  }

  async findOne(id: number): Promise<Provincia> {
    let criterio : FindOneOptions = { relations : [ 'usuario'], where :  { idProvincia: id } };
    let provincia :  Provincia = await this.provinciaRepository.findOne(criterio);
    return provincia;

    throw new HttpException(
      'No existe una Provincia con ese id',
      HttpStatus.NOT_FOUND
    );;
  }

  async update(id: number, updateProvinciaDto: UpdateProvinciaDto) {
   await this.findOne(id);

   try {
    const result = await this.provinciaRepository.update(
      { idProvincia : id },
      {...updateProvinciaDto, idProvincia: id},
    );

    console.log(`Update, id: ${id}, result: ${result}`);
    return result;
   } catch (error) {
    console.log(error);
    throw new HttpException('no se pudo actuazlizar la provincia', HttpStatus.NOT_FOUND);
    }
  }

  async remove(id: number) {
    const remov = await this.provinciaRepository.delete(id);

    console.log(
      `Remove, id: ${id}, result: ${remov.affected ? 'Eliminado' : 'No Eliminado'}`,

    );
    if (remov.affected){
      return new HttpException(`Remove, id : ${id}`, HttpStatus.OK);
    }
      throw new HttpException(
        'No existe una Provincia con ese id',
        HttpStatus.NOT_FOUND
    );
  }
}

