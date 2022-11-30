import React, { useState } from 'react';
import TooDo from './components/TooDo';
import NewTodo from './components/NewTodo';
import { Todo } from './todo.model';

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  const todoAddHandler = (text: string) => {
    setTodos([{ id: Math.random().toString(), text: text }]);
  };

  return (
    <div className='App'>
      <NewTodo onAddTodo={todoAddHandler} />
      <TooDo items={todos} />
    </div>
  );
}

export default App;
