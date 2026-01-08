import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TasksController } from './tasks.controller';
import { TasksService } from './tasks.service';
import { Task, TaskSchema } from './schema/task.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Task.name, schema: TaskSchema }
    ])
  ],
  controllers: [TasksController], // ⬅️ OBLIGATOIRE
  providers: [TasksService],       // ⬅️ OBLIGATOIRE
})
export class TasksModule {}
