import { NextRequest, NextResponse } from 'next/server';
import { dummyTodos } from '@/dummy_data';
import { Todo } from '@/app/todos/types';

// 仮のメモリ上のデータ
let todos: Todo[] = dummyTodos;

// GET /api/todos - ToDo一覧取得
export async function GET() {
  return NextResponse.json(todos);
}

// POST /api/todos - ToDo追加
export async function POST(request: NextRequest) {
  const data = await request.json();
  const newTodo: Todo = {
    id: todos.length + 1,
    title: data.title,
    completed: false,
    tags: data.tags || [],
  };
  todos.push(newTodo);
  return NextResponse.json(newTodo);
}
