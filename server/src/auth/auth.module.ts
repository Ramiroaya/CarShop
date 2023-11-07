import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UsuarioService } from 'src/usuario/usuario.service';
import { UsuarioModule } from 'src/usuario/usuario.module';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    UsuarioModule, 
    JwtModule.register({
      secret: 'tu_clave_secreta', 
      signOptions: { expiresIn: '1h' }, 
    }),],
  providers: [AuthService, UsuarioService],
  controllers: [AuthController]
})
export class AuthModule {}
