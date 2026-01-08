import { Controller, Get, Post, Body, Param, Delete, Put, Patch, Query } from '@nestjs/common';
import { TasksService } from './tasks.service';

@Controller('tasks')
export class TasksController {
    constructor(private readonly service: TasksService) {}

    @Post()
    create(@Body() body) {
        return this.service.create(body);
    }

    @Get()
    findAll(@Query('status') status, @Query('sort') sort) {
        return this.service.findAll(status, sort);
    }

    @Put(':id')
    update(@Param('id') id, @Body() body) {
        return this.service.update(id, body);
    }

    @Patch(':id/finish')
    finish(@Param('id') id) {
        return this.service.finish(id);
    }

    @Delete(':id')
    delete(@Param('id') id) {
        return this.service.delete(id);
    }
}