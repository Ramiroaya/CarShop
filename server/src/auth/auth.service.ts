import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { UsuarioService } from 'src/usuario/usuario.service';

@Injectable()
export class AuthService {
    constructor(
        private usuarioService: UsuarioService,
        private jwtService: JwtService
    ) {}


    async login(email: string, pass: string): Promise<any> {
        console.log('Email recibido:', email);
        console.log('Contraseña recibida:', pass);
        const user = await this.usuarioService.findEmail(email);
        console.log(user.email);
        console.log(user.password);

        if (!user) {
            console.log('Usuario no encontrado');
            throw new UnauthorizedException('Credenciales Incorrectas');
        }
        
        const isPasswordCorrect = await bcrypt.compare(pass, user.password);
        console.log(isPasswordCorrect);
        
        if (!isPasswordCorrect) {
            console.log('Contraseña incorrecta');
            throw new UnauthorizedException('Credenciales Incorrectas');
        } else {
            const payload = { sub: user.idUsuario, email: user.email };
            console.log(payload);
            const token = this.jwtService.sign(payload);
            console.log(token);
            return {
            access_token: token            
        };
        
    }       
    }
}
