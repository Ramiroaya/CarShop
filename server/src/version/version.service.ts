import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateVersionDto } from './dto/create-version.dto';
import { UpdateVersionDto } from './dto/update-version.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { FindManyOptions, FindOneOptions, Repository } from 'typeorm';
import { Version } from './entities/version.entity';

@Injectable()
export class VersionService {
  constructor(
    @InjectRepository(Version)
    private readonly versionRepository: Repository<Version>){}


  create(versionDto: CreateVersionDto) {
    const c = this.versionRepository.create(versionDto);
    return  this.versionRepository.save(c);
  }

  async findAll(): Promise<Version[]> {
    let criterio : FindManyOptions = { relations: [ 'modelo']};
    let versiones: Version[] = await this.versionRepository.find(criterio);
    return versiones;
  }

  async findOne(id: number): Promise<Version> {
    let criterio : FindOneOptions = { relations: [], where: {idVersion : id} };
    let version : Version = await this.versionRepository.findOne(criterio);
    return version;

    throw new HttpException(
      'No existe una Version con ese Id',
      HttpStatus.NOT_FOUND
    );
  }

  async update(id: number, updateVersionDto: UpdateVersionDto) {
    await this.findOne(id);

    try {
      const result = await this.versionRepository.update(
        { idVersion : id },
        {...updateVersionDto, idVersion : id});

        console.log(`Update, id: ${id}, result: ${result}`);
        return result;
      }catch (error) {
        console.log(error);
        throw new HttpException('no se pudo realizar la accion', HttpStatus.NOT_FOUND);
    }
  }

  async remove(id: number) {
    const r = await this.versionRepository.delete(id);
    console.log(`
    Remove, id: ${id}, result: ${r.affected ? 'Eliminado' : 'No Eliminado'}`);
    if (r.affected) {
      return new HttpException(`Remove, id: ${id}`, HttpStatus.OK);
    } throw new HttpException('No existe una Version con ese Id',
      HttpStatus.NOT_FOUND);
  }
}
