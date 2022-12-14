import React, { useState } from 'react';

import { ToDo } from './components/ToDo';
import { NewTodo } from './components/NewTodo';
import { Todo } from './todo.model';

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  const todoAddHandler = (text: string) => {
    setTodos((prevTodos) => [
      ...prevTodos,
      { id: Math.random().toString(), text: text },
    ]);
  };

  // const deleteItem -> ...prevtols => return filter(todo => todo.id !== todoId)

  const deleteHandler = (todoId: string) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => todo.id !== todoId);
    });
  };

  return (
    <div className='App'>
      <NewTodo onAddTodo={todoAddHandler} />
      <ToDo items={todos} onDeleteTodo={deleteHandler} />
    </div>
  );
}

export default App;
