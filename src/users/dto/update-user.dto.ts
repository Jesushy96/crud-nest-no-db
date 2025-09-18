import { PartialType } from "@nestjs/mapped-types";
import { CreateTaskDto } from "src/tasks/dto/create-task.dto";

export class UpdateUserDto extends PartialType(CreateTaskDto) { }