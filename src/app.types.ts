import { HttpException } from '@nestjs/common';

export type ResTuple<T, E = HttpException> = [T, null] | [null, E];
export type AsyncResTuple<T, E = HttpException> = Promise<ResTuple<T, E>>;
