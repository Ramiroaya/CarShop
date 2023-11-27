import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UsuarioService } from 'src/usuario/usuario.service';
import { UsuarioModule } from 'src/usuario/usuario.module';
import { JwtModule } from '@nestjs/jwt';
import { PerfilService } from 'src/perfil/perfil.service';
import { PerfilModule } from 'src/perfil/perfil.module';
import { ProvinciaModule } from 'src/provincia/provincia.module';
import { PassportModule } from '@nestjs/passport';
import { JwtStrategy } from './jwt.strategy';
import { AuthGuard } from './auth.guard';


@Module({
  imports: [
    UsuarioModule,
    PerfilModule, 
    ProvinciaModule,
    ConfigModule,
    PassportModule,
    JwtModule.register({
        secret: 'clave-secreta',
        signOptions: { expiresIn: '1h' },
    }),
],
  exports: [JwtModule, UsuarioService, PerfilService],
  providers: [AuthGuard, AuthService, UsuarioService, PerfilService, JwtStrategy],
  controllers: [AuthController]
})
export class AuthModule {}
