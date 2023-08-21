import { Module } from '@nestjs/common';
import { VehiculoService } from './vehiculo.service';
import { VehiculoController } from './vehiculo.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Usuario } from 'src/usuario/entities/usuario.entity';
import { Vehiculo } from './entities/vehiculo.entity';

@Module({
  imports: [ TypeOrmModule.forFeature([Vehiculo, Usuario])],
  controllers: [VehiculoController],
  providers: [VehiculoService]
})
export class VehiculoModule {}
