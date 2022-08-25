import { createContext, ReactNode, useState, useContext } from "react";

import { Todo } from "../domain/todo";

type TodoProviderProps = {
  children: ReactNode;
};

type TodoContextData = {
  todos: Todo[];
  createNewTodo: (text: string) => void;
};

const contextDefaultValues: TodoContextData = {
  todos: [],
  createNewTodo: () => {},
};

export const TodosContext =
  createContext<TodoContextData>(contextDefaultValues);

export const TodoProvider = ({ children }: TodoProviderProps) => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const createNewTodo = (text: string) => {
    setTodos([...todos, { id: 2, done: false, text }]);
    console.log(todos);
  };

  return (
    <TodosContext.Provider value={{ todos, createNewTodo }}>
      {children}
    </TodosContext.Provider>
  );
};

export const useTodos = () => {
  const context = useContext(TodosContext);

  return context;
};
