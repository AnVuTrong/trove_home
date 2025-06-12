import { gql } from '@apollo/client';

// GraphQL Queries
export const GET_TODOS = gql`
  query GetTodos {
    todos {
      id
      title
      description
      completed
      user {
        id
        name
      }
    }
  }
`;

export const GET_USERS = gql`
  query GetUsers {
    users {
      id
      name
      email
    }
  }
`;

// GraphQL Mutations
export const CREATE_TODO = gql`
  mutation CreateTodo($input: TodoInput!) {
    createTodo(input: $input) {
      id
      title
      description
      completed
    }
  }
`;

export const TOGGLE_TODO_STATUS = gql`
  mutation ToggleTodoStatus($id: ID!) {
    toggleTodoStatus(id: $id) {
      id
      completed
    }
  }
`;

export const DELETE_TODO = gql`
  mutation DeleteTodo($id: ID!) {
    deleteTodo(id: $id)
  }
`; 