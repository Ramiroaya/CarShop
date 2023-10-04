import { Module } from '@nestjs/common';
import { UsuarioService } from './usuario.service';
import { UsuarioController } from './usuario.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Usuario } from './entities/usuario.entity';
import { Vehiculo } from 'src/vehiculo/entities/vehiculo.entity';
import { Provincia } from 'src/provincia/entities/provincia.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Usuario, Vehiculo, Provincia])],
  controllers: [UsuarioController],
  providers: [UsuarioService],
  exports: [TypeOrmModule, UsuarioService],
})
export class UsuarioModule {}
