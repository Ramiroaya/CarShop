import { Module } from '@nestjs/common';
import { ProvinciaService } from './provincia.service';
import { ProvinciaController } from './provincia.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Provincia } from './entities/provincia.entity';
import { Perfil } from 'src/perfil/entities/perfil.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Provincia, Perfil])],
  controllers: [ProvinciaController],
  providers: [ProvinciaService]
})
export class ProvinciaModule {}
