// GraphQL Types for Frontend
export interface User {
  id: string;
  name: string;
  email: string;
}

export interface Todo {
  id: string;
  title: string;
  description?: string;
  completed: boolean;
  userId: string;
  user?: User;
}

export interface TodoInput {
  title: string;
  description?: string;
  userId: string;
}

// GraphQL Response Types
export interface GetTodosResponse {
  todos: Todo[];
}

export interface GetUsersResponse {
  users: User[];
}

export interface CreateTodoResponse {
  createTodo: Todo;
}

export interface ToggleTodoStatusResponse {
  toggleTodoStatus: Todo;
}

export interface DeleteTodoResponse {
  deleteTodo: boolean;
} 