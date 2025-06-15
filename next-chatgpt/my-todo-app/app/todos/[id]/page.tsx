'use client';

import { useParams } from 'next/navigation';
import { useState, useEffect } from 'react';
import { Todo } from '../types';
import { dummyTodos } from '@/dummy_data';

export default function TodoDetailPage() {
  const params = useParams();
  const id = params.id; // URLのidパラメータを取得（string）

  const [todo, setTodo] = useState<Todo | null>(null);

  useEffect(() => {
    if (!id) return;

    const found = dummyTodos.find((t) => t.id === Number(id));
    setTodo(found || null);
  }, [id]);

  if (!todo) return <p>ToDoが見つかりません</p>;

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">ToDo詳細</h1>
      <p>ID: {todo.id}</p>
      <p>タイトル: {todo.title}</p>
      <p>状態: {todo.completed ? '完了' : '未完了'}</p>
      <div className='flex'>タグ:       {todo.tags.map((tag, i) => (
        <div
          key={i}
          className="bg-blue-200 text-blue-800 px-2 py-0.5 rounded-full text-xs"
        >
          {tag}
        </div>
      ))}</div>
    </div>
  );
}
