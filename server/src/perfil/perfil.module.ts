import { Module } from '@nestjs/common';
import { PerfilService } from './perfil.service';
import { PerfilController } from './perfil.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Usuario } from 'src/usuario/entities/usuario.entity';
import { Provincia } from 'src/provincia/entities/provincia.entity';
import { Perfil } from './entities/perfil.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Perfil, Usuario, Provincia])],
  controllers: [PerfilController],
  providers: [PerfilService]
})
export class PerfilModule {}
