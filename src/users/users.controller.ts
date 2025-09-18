import { Controller, Get, Res } from '@nestjs/common';
import { UsersService } from './users.service';
import type { Response } from 'express';

@Controller()
export class UsersController {
    constructor(private usersService: UsersService) { }
    @Get('/users')
    obtenerTodosUsuarios(@Res() response: Response) {
        response.status(200).json(this.usersService.obtenerTodosUsuarios());
    }

}
