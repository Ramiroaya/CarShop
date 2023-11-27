import { Module } from '@nestjs/common';
import { UsuarioService } from './usuario.service';
import { UsuarioController } from './usuario.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Usuario } from './entities/usuario.entity';
import { Vehiculo } from 'src/vehiculo/entities/vehiculo.entity';
import { Perfil } from 'src/perfil/entities/perfil.entity';
import { PerfilModule } from 'src/perfil/perfil.module';

@Module({
  imports: [TypeOrmModule.forFeature([Usuario, Vehiculo, Perfil])],
  controllers: [UsuarioController],
  providers: [UsuarioService],
  exports: [TypeOrmModule, UsuarioService],
})
export class UsuarioModule {}
