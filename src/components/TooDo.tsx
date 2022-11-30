import React from 'react';

interface ToDoListProps {
  items: { id: string; text: string }[];
}

const TooDo = ({ items }: ToDoListProps) => {
  return (
    <ul>
      {items.map((todo) => (
        <li key={todo.id}>{todo.text}</li>
      ))}
    </ul>
  );
};

export default TooDo;
