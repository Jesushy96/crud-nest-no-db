import { Injectable } from '@nestjs/common';
import { User } from './users.entity';

@Injectable()
export class UsersService {
    private users: User[] = [];

    obtenerTodosUsuarios(): User[] {
        return this.users;
    }
}
