import { IsBoolean, IsString, MinLength } from "class-validator";

export class CreateTaskDto {

  @IsString()
  @MinLength(1)
  title: string;

  @IsString()
  @MinLength(1)
  description: string;

  @IsBoolean()
  status?: boolean = true;
}