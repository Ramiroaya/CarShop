import { Controller, Get, Post, Body, Patch, Param, Delete, Put, NotFoundException } from '@nestjs/common';
import { UsuarioService } from './usuario.service';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { ProvinciaService } from 'src/provincia/provincia.service';
import { Provincia } from 'src/provincia/entities/provincia.entity';

@Controller('usuario')
export class UsuarioController {
  constructor(private readonly usuarioService: UsuarioService
  ){}

  @Post()
  async create(@Body() createUsuarioDto: CreateUsuarioDto) {
    /*const { provincia_id, ...userData } = createUsuarioDto;
    const provincia = await this.provinciaService.findOneByNombre(provincia_id);

    if (!provincia) {
      throw new NotFoundException('Provincia no encontrada');
    }*/
    const usuario = await this.usuarioService.create(createUsuarioDto);
    return usuario;
  }

  @Get()
  findAll() {
    return this.usuarioService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usuarioService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUsuarioDto: UpdateUsuarioDto) {
    return this.usuarioService.update(+id, updateUsuarioDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usuarioService.remove(+id);
  }
}
