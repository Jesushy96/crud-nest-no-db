import { IsBoolean, IsNotEmpty, IsString, Length, Matches, MinLength } from "class-validator";

export class CreateUserDto {
    @IsString()
    @IsNotEmpty()
    @Length(1, 100)
    @Matches(/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/, { message: 'El nombre solo puede contener letras y espacios' })
    nombre: string;

    @IsString()
    @IsNotEmpty()
    @Length(1, 100)
    @Matches(/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/, { message: 'El apellido solo puede contener letras y espacios' })
    apellido: string;

    @IsString()
    @IsNotEmpty()
    @Length(3, 50)
    @Matches(/^[a-zA-Z0-9_.-]+$/, { message: 'El login solo puede contener letras, números, puntos, guiones y guion bajo' })
    login: string;

    @IsString()
    @IsNotEmpty()
    @Length(8, 50, {message: "La contraseña tiene que tener minino 8 caracteres"})
    @Matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).+$/,
        { message: 'La contraseña debe tener al menos una mayúscula, una minúscula, un número y un carácter especial' })
    password: string;

    @IsBoolean()
    estado?: boolean = true;
}