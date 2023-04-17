import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { TodoController } from './todo.controller';
import { TodoService } from './todo.service';
import { TodoSchema } from './todo.model';
import { TodoRepository } from './todo.repository';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'todo', schema: TodoSchema, collection: 'todo' },
    ]),
  ],
  controllers: [TodoController],
  providers: [TodoService, TodoRepository],
})
export class TodoModule {}
