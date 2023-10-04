import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { UsuarioService } from 'src/usuario/usuario.service';
import { User } from './user.interface';

@Injectable()
export class UserService {
  constructor(private readonly usuarioService: UsuarioService) {}

  async findUser(email: string): Promise<User> {
    try {
      // Utiliza el UsuarioService para buscar un usuario por su correo electrónico
      const usuario = await this.usuarioService.findEmail(email);
      if (!usuario) {
        // El usuario no se encontró, puedes lanzar una excepción o manejarlo según tus necesidades
        throw new HttpException('Usuario no encontrado', HttpStatus.NOT_FOUND);
      }

      // Mapea el tipo Usuario a User si es necesario
      const user: User = {
        idUser: usuario.idUsuario,
        email: usuario.email,
        password: usuario.password, // Asegúrate de manejar esto de forma segura
      };

      return user;
    } catch (error) {
      // Maneja errores como problemas de servidor o problemas de conexión a la base de datos
      throw new HttpException('Error interno del servidor', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}

