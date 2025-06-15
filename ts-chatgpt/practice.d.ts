declare enum TodoStatus {
    Todo = "todo",
    InProgress = "in progress",
    Done = "done"
}
declare class Todo {
    private _id;
    private _title;
    private _description?;
    private _status;
    constructor(id: number, title: string, status?: TodoStatus, description?: string);
    get id(): number;
    get title(): string;
    set title(newTitle: string);
    get status(): TodoStatus;
    toggleStatus(): void;
    toString(): string;
}
declare class TodoApp {
    private todos;
    addTodo(title: string, description?: string): void;
    removeTodo(id: number): void;
    getDoneTodos(): Todo[];
    toggleTodoStatus(id: number): void;
    printTodos(): void;
}
declare function fetchTodo(): Promise<Todo[]>;
declare function main(): Promise<void>;
declare const app: TodoApp;
