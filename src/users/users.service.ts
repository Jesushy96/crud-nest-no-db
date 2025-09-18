import { Injectable, NotFoundException } from '@nestjs/common';
import { User } from './users.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
    private users: User[] = [];

    obtenerTodosUsuarios(): User[] {
        return this.users;
    }

    crearUsuario(usuario: CreateUserDto) {
        const newUser: User = {
            id: this.users.length + 1,
            ...usuario,
            estado: usuario.estado ?? true
        }
        this.users.push(newUser)
        return this.users
    }

    obtenerUsuarioUnico(id: number): User {
        const usuarioEncontrado = this.users.find(users => users.id === id)
        if (!usuarioEncontrado) {
            throw new NotFoundException(`Usuario con id ${id} no encontrado`)
        }
        return usuarioEncontrado;

    }

    actualizarUsuario(id: number, datos: UpdateUserDto): User {
        const usuarioEncontrado = this.users.find(usuario => usuario.id === id);

        if (!usuarioEncontrado) {
            throw new NotFoundException(`Usuario con id ${id} no encontrado`);
        }

        Object.assign(usuarioEncontrado, datos);

        return usuarioEncontrado;

    }

    eliminarUsuario(id: number) {
        const usuarioId = this.users.findIndex(usuarios => usuarios.id === id);
        if (usuarioId === -1) {
            throw new NotFoundException(`No existe el usuario con el id ${id}`)
        }

        this.users.splice(usuarioId, 1);
        return {
            'message': 'Usuario eliminado correctamente'
        }
    }
}
