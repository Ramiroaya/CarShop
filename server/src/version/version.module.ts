import { Module } from '@nestjs/common';
import { VersionService } from './version.service';
import { VersionController } from './version.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Version } from './entities/version.entity';
import { Modelo } from 'src/modelo/entities/modelo.entity';
import { Vehiculo } from 'src/vehiculo/entities/vehiculo.entity';

@Module({
  imports: [ TypeOrmModule.forFeature([Version, Modelo, Vehiculo])],
  controllers: [VersionController],
  providers: [VersionService]
})
export class VersionModule {}
