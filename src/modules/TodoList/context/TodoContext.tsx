import { createContext, ReactNode, useState, useContext } from "react";

import { Todo, createTodo } from "../domain/todo";

type TodoProviderProps = {
  children: ReactNode;
};

type TodoContextData = {
  todos: Todo[];
  createNewTodo: (text: string) => void;
  activeTodosQuantity: number;
  listHasTodos: boolean;
};

export const TodosContext = createContext<TodoContextData>(
  {} as TodoContextData
);

export const TodoProvider = ({ children }: TodoProviderProps) => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const generateNewId = (): number => {
    const maxId = todos.reduce((max, todo) => Math.max(max, todo.id), 0);
    return maxId + 1;
  };

  const createNewTodo = (text: string) => {
    const newTodo = createTodo({ id: generateNewId(), text });
    setTodos([...todos, newTodo]);
    console.log(todos);
  };

  const activeTodosQuantity = todos.reduce((acc, todo) => {
    if (todo.done === false) {
      return acc + 1;
    }
    return acc;
  }, 0);

  const listHasTodos = !!todos.length;

  return (
    <TodosContext.Provider
      value={{ todos, createNewTodo, activeTodosQuantity, listHasTodos }}
    >
      {children}
    </TodosContext.Provider>
  );
};

export const useTodos = () => {
  const context = useContext(TodosContext);

  return context;
};
