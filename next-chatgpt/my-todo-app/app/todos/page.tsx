'use client';

import { useState, useEffect } from 'react';

type Todo = {
  id: number;
  title: string;
  completed: boolean;
  tags: string[];
};

export default function Todos() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [title, setTitle] = useState('');

  // 初回データ取得
  useEffect(() => {
    fetch('/api/todos')
      .then((res) => res.json())
      .then(setTodos);
  }, []);

  // 新規ToDo追加
  const addTodo = async () => {
    if (!title.trim()) return;
    const res = await fetch('/api/todos', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title }),
    });
    const newTodo = await res.json();
    setTodos([...todos, newTodo]);
    setTitle('');
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">ToDo一覧</h1>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="新しいToDoタイトル"
        className="border p-2 mr-2"
      />
      <button onClick={addTodo} className="bg-blue-500 text-white px-4 py-2 rounded">
        追加
      </button>

      <ul className="mt-4">
        {todos.map((todo) => (
          <li key={todo.id} className="mb-2">
            {todo.title} {todo.completed ? '(完了)' : '(未完了)'}
          </li>
        ))}
      </ul>
    </div>
  );
}
