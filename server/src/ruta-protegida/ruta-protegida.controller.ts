// ruta-protegida.controller.ts

import { Controller, Get, UseGuards } from '@nestjs/common';
import { AuthGuard } from '../auth/auth.guard';

@Controller('ruta-protegida')
export class RutaProtegidaController {
  @Get()
  @UseGuards(AuthGuard)
  obtenerDatosProtegidos() {
    return {
      mensaje: 'Esta es una ruta protegida. Solo se puede acceder con un token válido.',
    };
  }
}
