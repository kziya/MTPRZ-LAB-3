import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { Todo } from './todo.model';
import { TodoCreateDto } from './dtos/todo-create.dto';

@Injectable()
export class TodoRepository {
  constructor(@InjectModel('todo') private readonly todoModel: Model<Todo>) {}
  async getAll(): Promise<Todo[]> {
    return this.todoModel.find();
  }
  async getById(id: string): Promise<Todo> {
    return this.todoModel.findById(id);
  }
  async create(todoCreateDto: TodoCreateDto): Promise<Todo> {
    return this.todoModel.create(todoCreateDto);
  }
}
