import { Module } from '@nestjs/common';
import { ModeloService } from './modelo.service';
import { ModeloController } from './modelo.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Modelo } from './entities/modelo.entity';
import { Marca } from 'src/marca/entities/marca.entity';
import { Version } from 'src/version/entities/version.entity';

@Module({
  imports: [ TypeOrmModule.forFeature([ Modelo, Marca, Version])],
  controllers: [ModeloController],
  providers: [ModeloService]
})
export class ModeloModule {}
