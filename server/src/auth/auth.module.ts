import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UsuarioService } from 'src/usuario/usuario.service';
import { UsuarioModule } from 'src/usuario/usuario.module';
import { JwtService } from '@nestjs/jwt';

@Module({
  imports: [UsuarioModule],
  providers: [AuthService, UsuarioService, JwtService],
  controllers: [AuthController]
})
export class AuthModule {}
