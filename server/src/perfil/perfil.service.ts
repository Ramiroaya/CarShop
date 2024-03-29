import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreatePerfilDto } from './dto/create-perfil.dto';
import { UpdatePerfilDto } from './dto/update-perfil.dto';
import { DeepPartial, FindManyOptions, FindOneOptions, Repository } from 'typeorm';
import { Perfil } from './entities/perfil.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { ProvinciaService } from 'src/provincia/provincia.service';



@Injectable()
export class PerfilService {
  constructor(
    @InjectRepository(Perfil) 
    private readonly perfilRepository: Repository<Perfil>,
    private readonly provinciaService: ProvinciaService,
  ) {}


  async create(createPerfilDto: CreatePerfilDto): Promise<Perfil> {

    const { provinciaNombre, ...userData } = createPerfilDto;

    const provincia = await this.provinciaService.findOneByNombre(provinciaNombre);
    console.log(provincia);
    if (!provincia) {
      throw new Error(`La provincia ${provinciaNombre} no fue encontrada.`);
    }

    const newProfile = this.perfilRepository.create({
      ...userData,
      provincia: provincia,
    } as DeepPartial<Perfil>);
    console.log(newProfile);

    return await this.perfilRepository.save(newProfile);
  }



async findAll(): Promise<Perfil[]> {
    let criterio : FindManyOptions = { relations: [ 'usuario', 'provincia' ]}
    let perfil : Perfil[] = await this.perfilRepository.find(criterio);
    return perfil;
  }
      
  
async findOne(id: number): Promise<Perfil> {
  let criterio : FindOneOptions = { relations: [ ' usuario ', 'provincia' ], where: {idPerfil: id} }
  let perfil : Perfil = await this.perfilRepository.findOne(criterio);

  if(!perfil){
    throw new HttpException(
      'No existe un Perfil con ese id',
      HttpStatus.NOT_FOUND
    );
  }
  return perfil;

  
    }


        
    
async update(id: number, updatePerfilDto: UpdatePerfilDto) {
  await this.findOne(id);

  try {
    const result = await this.perfilRepository.update(
      { idPerfil: id},
      {...updatePerfilDto, idPerfil: id}
    );

    console.log(`Update, id: ${id}, result: ${result}`);

    return result;
  } catch (error){
    console.log(error);
    throw new HttpException('no se encontro el Perfil', HttpStatus.NOT_FOUND);
    }
  }
          
      
  async remove(id: number) {
    const r = await this.perfilRepository.delete(id);

    console.log(
      `Remove, id: ${id}, result: ${r.affected ? 'Eliminado' : 'No eliminado'}`
    );
    if (r.affected) {
      return new HttpException(`Remove, id: ${id}`, HttpStatus.OK);
    } throw new HttpException(
      'No existe un Perfil con ese id',
      HttpStatus.NOT_FOUND
    );
  }
}

