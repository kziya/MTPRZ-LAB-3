import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { Todo } from './todo.model';
import { TodoService } from './todo.service';
import { TodoCreateDto } from './dtos/todo-create.dto';

@Controller('todo')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}
  @Get('all')
  async all(): Promise<Todo[]> {
    const [todos, err] = await this.todoService.getAll();
    if (err) throw err;

    return todos;
  }

  @Get('/:id')
  async byId(@Param('id') id: string): Promise<Todo> {
    const [todo, err] = await this.todoService.getById(id);
    if (err) throw err;

    return todo;
  }
  @Post()
  async create(@Body() createBody: TodoCreateDto): Promise<Todo> {
    const [todo, err] = await this.todoService.create(createBody);
    if (err) throw err;

    return todo;
  }
}
