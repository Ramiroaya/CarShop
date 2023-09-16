import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from 'src/user/user.service';

@Injectable()
export class AuthService {
    constructor(
        private userService: UserService,
        private jwtService: JwtService
        ) {}


    async login(email: string, pass: string): Promise<any> {
        const user = await this.userService.findUser(email);
        if (user?.password !== pass) {
            throw new UnauthorizedException();
        }

        const payload = { sub: user.idUser, name: user.fullName, email: user.email};
        return  {
            acces_token: await this.jwtService.signAsync(payload)
        };
    }
}
