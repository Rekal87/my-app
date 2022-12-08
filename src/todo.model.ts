export interface Todo {
  id: string;
  text: string;
}

export interface ToDoListProps {
  items: { id: string; text: string }[];
  onDeleteTodo: (id: string) => void;
}
