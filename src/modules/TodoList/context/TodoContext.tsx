import { createContext, ReactNode, useState, useContext } from "react";

import {
  Todo,
  Filters,
  createTodo,
  toggleTodo,
  editTodoText,
} from "../domain/todo";

type TodoProviderProps = {
  children: ReactNode;
};

type TodoContextData = {
  createNewTodo: (text: string) => void;
  toggleTodoStatus: (id: number) => void;
  removeTodoFromList: (id: number) => void;
  changeTodoText: ({ id, text }: Omit<Todo, "done">) => void;
  setEditingTodo: (id: number) => void;
  isEditingTodo: (id: number) => boolean;
  clearEditingTodo: () => void;
  activeTodosQuantity: number;
  listHasTodos: boolean;
  filteredTodos: Todo[];
  setTodoFilter: (filter: Filters) => void;
  activeFilter: Filters;
  toggleAllTodosStatus: () => void;
};

export const TodosContext = createContext<TodoContextData>(
  {} as TodoContextData
);

export const TodoProvider = ({ children }: TodoProviderProps) => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [editing, setEditing] = useState(0);
  const [activeFilter, setActiveFilter] = useState<Filters>(Filters.ALL);

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

  const isEditingTodo = (id: number) => editing === id;

  const setEditingTodo = (id: number) => {
    setEditing(id);
  };

  const clearEditingTodo = () => {
    setEditing(0);
  };

  const filteredTodos = () => {
    switch (activeFilter) {
      case Filters.ALL:
        return todos;
      case Filters.ACTIVE:
        return todos.filter((todo) => todo.done === false);
      case Filters.COMPLETED:
        return todos.filter((todo) => todo.done === true);
      default:
        return todos;
    }
  };

  const setTodoFilter = (filter: Filters) => {
    setActiveFilter(filter);
  };

  const toggleAllTodosStatus = () => {
    const allCompleted = todos.reduce((acc, { done }) => {
      if (done) return acc;

      return false;
    }, true);

    const updatedList = todos.map((todo) => {
      return {
        ...todo,
        done: !allCompleted,
      };
    });

    setTodos(updatedList);
  };

  return (
    <TodosContext.Provider
      value={{
        createNewTodo,
        toggleTodoStatus,
        removeTodoFromList,
        changeTodoText,
        activeTodosQuantity,
        listHasTodos,
        isEditingTodo,
        setEditingTodo,
        clearEditingTodo,
        filteredTodos: filteredTodos(),
        setTodoFilter,
        activeFilter,
        toggleAllTodosStatus,
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
