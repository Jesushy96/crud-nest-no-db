import { Injectable, NotFoundException } from "@nestjs/common";
import { CreateTaskDto } from "./dto/create-task.dto";
import { Task } from "./tasks.entity";
import { UpdateTaskDto } from "./dto/update-task.dto";

@Injectable()
export class TasksService {

    private tasks: Task[] = [];

    getTasks(): Task[] {
        return this.tasks;
    }

    getTask(id: number): Task {
        const taskFound = this.tasks.find((tasks) => tasks.id === id);

        if (!taskFound) {
            throw new NotFoundException(`Tarea con id ${id} no existe`);
        }
        return taskFound;
    }

    createTask(taskDto: CreateTaskDto) {
        const newTask: Task = {
            id: this.tasks.length + 1,
            ...taskDto,
            status: taskDto.status ?? true,
        }
        this.tasks.push(newTask)
        return this.tasks
    }

    updateTask(id: number, updateDto: UpdateTaskDto): Task {
        const taskIndex = this.tasks.findIndex((task) => task.id === id);
        if (taskIndex === -1) {
            throw new NotFoundException(`Tarea con id ${id} no existe`);
        }

        // Actualizamos solo los campos enviados
        this.tasks[taskIndex] = {
            ...this.tasks[taskIndex],
            ...updateDto
        }
        return this.tasks[taskIndex];
    }

    deleteTask() {
        return "Eliminando tarea";
    }

    updateTaskStatus() {
        return "Actualizando el estado de una tarea";
    }
}