import { createContext, ReactNode, useState, useContext } from "react";

import { Todo, createTodo, toggleTodo, editTodoText } from "../domain/todo";

type TodoProviderProps = {
  children: ReactNode;
};

type TodoContextData = {
  todos: Todo[];
  createNewTodo: (text: string) => void;
  toggleTodoStatus: (id: number) => void;
  removeTodoFromList: (id: number) => void;
  changeTodoText: ({ id, text }: Omit<Todo, "done">) => void;
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
  };

  const toggleTodoStatus = (id: number) => {
    const updatedList = todos.map((todo) => {
      if (todo.id === id) {
        return toggleTodo(todo);
      }
      return todo;
    });

    setTodos(updatedList);
  };

  const removeTodoFromList = (id: number) => {
    const updatedList = todos.filter((todos) => todos.id !== id);

    setTodos(updatedList);
  };

  const changeTodoText = ({ id, text }: Omit<Todo, "done">) => {
    const updatedList = todos.map((todo) => {
      if (todo.id === id) {
        return editTodoText({ todo, newText: text });
      }
      return todo;
    });

    setTodos(updatedList);
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
      value={{
        todos,
        createNewTodo,
        toggleTodoStatus,
        removeTodoFromList,
        changeTodoText,
        activeTodosQuantity,
        listHasTodos,
      }}
    >
      {children}
    </TodosContext.Provider>
  );
};

export const useTodos = () => {
  const context = useContext(TodosContext);

  return context;
};
