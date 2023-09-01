import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { User } from './user.interface';
const BASE_URL = 'http://localhost:3030/user/';

@Injectable()
export class UserService {
    async findUser(email: string): Promise<User> {
        const res = await fetch(BASE_URL);
        if (!res.ok) 
            throw new HttpException(
        'Internal Server Error',
        HttpStatus.INTERNAL_SERVER_ERROR,
        );
    const allUser = await res.json();const user = allUser.find((usr: User) => usr.email === email);
    return user;
    }
}
