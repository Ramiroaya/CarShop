import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { UsuarioService } from 'src/usuario/usuario.service';
import { User } from './user.interface';

@Injectable()
export class UserService {
  constructor(private readonly usuarioService: UsuarioService) {}

  async findUser(email: string): Promise<User> {
    try {
      const usuario = await this.usuarioService.findEmail(email);
      if (!usuario) {
        throw new HttpException('Usuario no encontrado', HttpStatus.NOT_FOUND);
      }

      const user: User = {
        idUser: usuario.idUsuario,
        email: usuario.email,
        password: usuario.password, 
      };

      return user;
    } catch (error) {
      throw new HttpException('Error interno del servidor', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}

