import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsuarioService } from 'src/usuario/usuario.service';

@Injectable()
export class AuthService {
    constructor(
        private usuarioService: UsuarioService,
        private jwtService: JwtService
    ) {}


    async login(email: string, pass: string): Promise<any> {
        const user = await this.usuarioService.findEmail(email);

        if (!user || user?.password !== pass) {
            throw new UnauthorizedException('Credenciales Incorrectas');
        }

        const payload = { sub: user.idUsuario, name: user.nombre, email: user.email};
        const token = this.jwtService.sign(payload, { expiresIn: '1h' });
        return  {
            access_token: await this.jwtService.signAsync(payload)
        };
    }
}
