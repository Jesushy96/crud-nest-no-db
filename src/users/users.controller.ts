import { Body, Controller, Delete, Get, HttpCode, Param, ParseIntPipe, Post, Put, Query, Res, UsePipes, ValidationPipe } from '@nestjs/common';
import { UsersService } from './users.service';
import { response, type Response } from 'express';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ValidateUserPipe } from './pipes/validate-user/validate-user.pipe';
import { SaludarQueryDto } from './dto/saludar-query.dto';

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

    // Forma erronea - funcional
    // @Get('/saludar')
    // saludar(@Query(ValidateUserPipe) query: { nombre: string, age: number }) {
    //     return `Hola ${query.nombre}, tienes ${query.age + 1} años`
    // }

    // Forma buenas practicas 
    @Get('/saludar')
    saludar(@Query() query: SaludarQueryDto) {
        return `Hola ${query.nombre}, tienes ${query.edad + 1} años`
    }



    @Get('/:id')
    obtenerUsuarioUnico(@Param('id') id: string) {
        return this.usersService.obtenerUsuarioUnico(parseInt(id))
    }

    @Put('/:id')
    actualizarUsuario(@Param('id', ParseIntPipe) id: number, @Body() usuario: UpdateUserDto) {
        return this.usersService.actualizarUsuario(id, usuario)
    }

    @Delete('/:id')
    @HttpCode(204)
    eliminarUsuario(@Param('id') id: string) {
        return this.usersService.eliminarUsuario(parseInt(id));
    }


}
