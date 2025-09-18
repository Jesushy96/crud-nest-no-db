import { Type } from "class-transformer"
import { IsInt, IsString } from "class-validator"

export class SaludarQueryDto {
    @IsString()
    nombre: string

    @Type(() => Number) // convierte string => numer
    @IsInt()
    edad: number
}