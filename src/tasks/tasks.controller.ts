import { Body, Controller, Delete, Get, Param, Patch, Post, Put, Query, Req, Res, UsePipes, ValidationPipe } from "@nestjs/common";
import { TasksService } from "./tasks.service";
import type { Request, Response } from "express";
import { CreateTaskDto } from "./dto/create-task.dto";
import { UpdateTaskDto } from "./dto/update-task.dto";

@Controller('/tasks')
export class TaskController {
    constructor(private tasksService: TasksService) { }
    @Get()
    getAllTasks(@Req() request: Request, @Res() response: Response, @Query() query: any) {
        response.status(200).json(this.tasksService.getTasks())
    }

    @Get('/:id')
    getAllTask(@Param('id') id: string) {
        return this.tasksService.getTask(parseInt(id));
    }

    @Post()
    @UsePipes(new ValidationPipe())
    createTask(@Body() task: CreateTaskDto) {
        return this.tasksService.createTask(task);
    }

    @Put('/:id')
    updateTask(@Param('id') id: string, @Body() task: UpdateTaskDto) {
        return this.tasksService.updateTask(parseInt(id), task);
    }

    @Delete()
    deleteTask() {
        return this.tasksService.deleteTask();
    }

    @Patch()
    patchTask() {
        return this.tasksService.updateTaskStatus();
    }
}