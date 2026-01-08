import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Task, TaskDocument } from './schema/task.schema';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';


@Injectable()
export class TasksService {
    constructor(@InjectModel(Task.name) private taskModel: Model<TaskDocument>) {}

    async create(dto) {
        return await this.taskModel.create(dto);
    }


    findAll(status?: string, sort?: string) {
    const filter = status ? { status } : {};
        return this.taskModel.find(filter).sort(sort === 'title' ? { title: 1 } : {});
    }

    update(id: string, dto: UpdateTaskDto) {
        return this.taskModel.findByIdAndUpdate(id, dto, { new: true });
    }

    finish(id: string) {
        return this.taskModel.findByIdAndUpdate(id, { status: 'TERMINEE' }, { new: true });
    }


    delete(id: string) {
        return this.taskModel.findByIdAndDelete(id);
    }
}
