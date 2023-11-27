import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Req, HttpException, HttpStatus } from '@nestjs/common';
import { VehiculoService } from './vehiculo.service';
import { CreateVehiculoDto } from './dto/create-vehiculo.dto';
import { UpdateVehiculoDto } from './dto/update-vehiculo.dto';
import { Vehiculo } from './entities/vehiculo.entity';
import { AuthGuard } from '../auth/auth.guard';

@Controller('vehiculo')
@UseGuards(AuthGuard)
export class VehiculoController {
  constructor(private readonly vehiculoService: VehiculoService) {}

  @Post('cargar')
  async cargarVehiculo(@Body() vehiculoDto: CreateVehiculoDto, @Req() req): Promise<Vehiculo> {
    try {
      const idUsuarioLogueado = req.usuario.idUsuario;
      const vehiculoCreado = await this.vehiculoService.cargarVehiculo(vehiculoDto, idUsuarioLogueado);

      return vehiculoCreado;
    } catch (error) {
      console.error('Error al cargar el vehículo:', error);
      throw new HttpException('Error al cargar el vehículo', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Get()
  findAll() {
    return this.vehiculoService.findAll();
  }
  @Get('datos-prtotegidos')
  @UseGuards(AuthGuard)
  obtenerDatosProtegidos() {
    return {
      mensaje: 'Esta es una rtuta protegida, Solo e puede acceder con un token valido,',
    };
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.vehiculoService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateVehiculoDto: UpdateVehiculoDto) {
    return this.vehiculoService.update(+id, updateVehiculoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.vehiculoService.remove(+id);
  }
}
