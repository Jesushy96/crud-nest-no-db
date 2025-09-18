import { Body, Controller, Delete, Get, Param, Post, Put, Res, UsePipes, ValidationPipe } from '@nestjs/common';
import { UsersService } from './users.service';
import { response, type Response } from 'express';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('/users')
export class UsersController {
    constructor(private usersService: UsersService) { }
    @Get()
    obtenerTodosUsuarios(@Res() response: Response) {
        response.status(200).json(this.usersService.obtenerTodosUsuarios());
    }

    @Post()
    crearUsuario(@Body() usuario: CreateUserDto) {
        return this.usersService.crearUsuario(usuario)
    }

    @Get('/:id')
    obtenerUsuarioUnico(@Param('id') id: string) {
        return this.usersService.obtenerUsuarioUnico(parseInt(id))
    }

    @Put('/:id')
    actualizarUsuario(@Param('id') id: string, @Body() usuario: UpdateUserDto) {
        return this.usersService.actualizarUsuario(parseInt(id), usuario)
    }

    @Delete('/:id')
    eliminarUsuario(@Param('id') id: string) {
        return this.usersService.eliminarUsuario(parseInt(id));
    }
}
