// auth.guard.ts
import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { AuthGuard as PassportAuthGuard } from '@nestjs/passport';

@Injectable()
export class AuthGuard extends PassportAuthGuard('jwt') {
  canActivate(context: ExecutionContext) {
    // Aquí puedes agregar lógica personalizada antes de permitir o denegar el acceso
    return super.canActivate(context);
  }
}
