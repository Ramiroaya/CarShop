import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UsuarioService } from 'src/usuario/usuario.service';
import { UsuarioModule } from 'src/usuario/usuario.module';
import { JwtModule } from '@nestjs/jwt';
import { PerfilService } from 'src/perfil/perfil.service';
import { PerfilModule } from 'src/perfil/perfil.module';
import { ProvinciaModule } from 'src/provincia/provincia.module';


@Module({
  imports: [
    UsuarioModule, PerfilModule, ProvinciaModule,
    JwtModule.register({
      secret: 'tu_clave_secreta', 
      signOptions: { expiresIn: '1h' }, 
    }),],
  exports: [JwtModule, UsuarioService, PerfilService],
  providers: [AuthService, UsuarioService, PerfilService],
  controllers: [AuthController]
})
export class AuthModule {}
