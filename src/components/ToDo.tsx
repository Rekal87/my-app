import React from 'react';
import './TodoList.css';
import { ToDoListProps } from '../todo.model';

export const ToDo = ({ items, onDeleteTodo }: ToDoListProps) => {
  return (
    <ul>
      {items.map((todo) => (
        <li key={todo.id}>
          <span>{todo.text}</span>
          <button onClick={onDeleteTodo.bind(null, todo.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};
