import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsuarioModule } from './usuario/usuario.module';
import { VehiculoModule } from './vehiculo/vehiculo.module';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [TypeOrmModule.forRoot(
    {
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'carshop',
      entities: ['dist/**/**.entity{.ts,.js}'],
      synchronize: true,
    }
  ), UsuarioModule, VehiculoModule, UserModule, AuthModule ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
