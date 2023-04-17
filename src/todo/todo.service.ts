import {
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { TodoRepository } from './todo.repository';
import { AsyncResTuple } from '../app.types';
import { Todo } from './todo.model';
import { TodoCreateDto } from './dtos/todo-create.dto';

@Injectable()
export class TodoService {
  constructor(private readonly todoRepository: TodoRepository) {}

  async getById(id: string): AsyncResTuple<Todo> {
    const res = await this.todoRepository.getById(id);
    if (!res) return [null, new NotFoundException()];
    return [res, null];
  }

  async create(todoCreateDto: TodoCreateDto): AsyncResTuple<Todo> {
    const res = await this.todoRepository.create(todoCreateDto);
    if (!res) return [null, new InternalServerErrorException()];
    return [res, null];
  }

  async getAll(): AsyncResTuple<Todo[]> {
    const res = await this.todoRepository.getAll();
    if (!res) return [null, new InternalServerErrorException()];
    return [res, null];
  }
}
