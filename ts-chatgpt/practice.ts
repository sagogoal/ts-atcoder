// chatgptとTSの復習を実施

enum TodoStatus {
    Todo = "todo",
    InProgress = "in progress",
    Done = "done",
  }
  
  class Todo {
    private _id: number;
    private _title: string;
    private _description?: string;
    private _status: TodoStatus;
  
    constructor(id: number, title: string, status: TodoStatus = TodoStatus.Todo, description?: string) {
      this._id = id;
      this._title = title;
      this._status = status;
      this._description = description;
    }
  
    get id(): number {
      return this._id;
    }
  
    get title(): string {
      return this._title;
    }
  
    set title(newTitle: string) {
      this._title = newTitle;
    }
  
    get status(): TodoStatus {
      return this._status;
    }
  
    toggleStatus() {
      switch (this._status) {
        case TodoStatus.Todo:
          this._status = TodoStatus.InProgress;
          break;
        case TodoStatus.InProgress:
          this._status = TodoStatus.Done;
          break;
        case TodoStatus.Done:
          this._status = TodoStatus.Todo;
          break;
      }
    }
  
    toString(): string {
      return `${this._id}: ${this._title} [${this._status}]`;
    }
  }
  
  class TodoApp {
    private todos: Todo[] = [];
  
    addTodo(title: string, description?: string) {
      const id = this.todos.length + 1;
      const todo = new Todo(id, title, TodoStatus.Todo, description);
      this.todos.push(todo);
    }
  
    removeTodo(id: number) {
      this.todos = this.todos.filter(todo => todo.id !== id);
    }
  
    getDoneTodos(): Todo[] {
      return this.todos.filter(todo => todo.status === TodoStatus.Done);
    }
  
    toggleTodoStatus(id: number) {
      const todo = this.todos.find(todo => todo.id === id);
      if (todo) {
        todo.toggleStatus();
      }
    }
  
    printTodos() {
      this.todos.forEach(todo => console.log(todo.toString()));
    }
  }

  function fetchTodo(): Promise<Todo[]> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const success = true;
            if (success) {
                resolve([
                    new Todo(1, "筋トレ", TodoStatus.Todo),
                    new Todo(2, "掃除", TodoStatus.InProgress),
                ]);
            } else {
                reject(new Error("サーバーエラー"));
            }
        }, 1000)
    })
  }

async function main() {
    try {
        const todos = await fetchTodo();
        console.log("完了");
        todos.forEach(todo => {
            console.log(`ID: ${todo.id}, Title: ${todo.title}, Status: ${todo.status}`);
        })
    } catch (error){
        console.error("エラー:", (error as Error).message);
    }
}
main();
  
  // 確認
  
  const app = new TodoApp();
  app.addTodo("筋トレ");
  app.addTodo("掃除");
  app.printTodos();
  
  app.toggleTodoStatus(1);
  app.toggleTodoStatus(1);
  app.printTodos();
  
  console.log("Done Todos:", app.getDoneTodos().map(todo => todo.toString()));
  