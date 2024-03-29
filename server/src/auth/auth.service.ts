import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { PerfilService } from 'src/perfil/perfil.service';
import { UsuarioService } from 'src/usuario/usuario.service';

@Injectable()
export class AuthService {
    constructor(
        private usuarioService: UsuarioService,
        private jwtService: JwtService,
        private perfilService: PerfilService
    ) {}


    async login(email: string, pass: string): Promise<any> {
        console.log('Email recibido:', email);
        console.log('Contraseña recibida:', pass);
        const user = await this.usuarioService.findEmail(email);

        if (!user || !(await bcrypt.compare(pass, user.password))) {
            console.log('Usuario no encontrado');
            throw new UnauthorizedException('Credenciales Incorrectas');
        }
        const perfil = await this.perfilService.findOne(user.idUsuario);
        const payload = { 
            sub: user.idUsuario,
            email: user.email,
            nombre: perfil.nombre,
        };
            console.log(payload);
            const token = this.jwtService.sign(payload);
            console.log(token);

            return {
            access_token: token,
            perfil: {
                nombre: perfil.nombre,
            }            
        };
        
    }       
}

