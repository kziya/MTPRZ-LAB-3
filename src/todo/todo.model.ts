import mongoose from 'mongoose';
export type Todo = {
  title: string;
  description: string;
  createdAt: Date;
  updatedAt: Date;
  isDone: boolean;
};

export const TodoSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    isDone: { type: Boolean, default: false },
  },
  { timestamps: true },
);

export type TodoDocument = Todo & mongoose.Document;
