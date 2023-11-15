import { Module } from '@nestjs/common';
import { PerfilService } from './perfil.service';
import { PerfilController } from './perfil.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Usuario } from 'src/usuario/entities/usuario.entity';
import { Provincia } from 'src/provincia/entities/provincia.entity';
import { Perfil } from './entities/perfil.entity';
import { ProvinciaService } from 'src/provincia/provincia.service';

@Module({
  imports: [TypeOrmModule.forFeature([Perfil, Usuario, Provincia])],
  controllers: [PerfilController],
  providers: [PerfilService, ProvinciaService]
})
export class PerfilModule {}
