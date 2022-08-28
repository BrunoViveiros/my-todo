export type Todo = {
  id: number;
  text: string;
  done: boolean;
};

export enum Filters {
  ALL = "all",
  ACTIVE = "active",
  COMPLETED = "completed",
}

type editTodoProps = {
  todo: Todo;
  newText: string;
};

const createTodo = ({ id, text }: Omit<Todo, "done">): Todo => {
  return {
    id,
    text,
    done: false,
  };
};

const editTodoText = ({ todo, newText }: editTodoProps): Todo => {
  return {
    ...todo,
    text: newText,
  };
};

const toggleTodo = (todo: Todo): Todo => {
  return {
    ...todo,
    done: !todo.done,
  };
};

export { createTodo, editTodoText, toggleTodo };
