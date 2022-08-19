type Todo = {
  id: number;
  text: string;
  done: boolean;
};

type TodoList = Todo[];

const createTodo = ({ id, text }: Omit<Todo, "done">): Todo => {
  return {
    id,
    text,
    done: false,
  };
};

const editTodoText = ({ text, ...todo }: Todo) => {
  return {
    ...todo,
    text,
  };
};

const toggleTodoStatus = ({ done, ...todo }: Todo) => {
  return {
    ...todo,
    done: !done,
  };
};

const addTodoToList = (todo: Todo, todoList: TodoList): TodoList => {
  return [...todoList, todo];
};

const removeTodoFromList = (
  { id }: Pick<Todo, "id">,
  todoList: TodoList
): TodoList => {
  const newList = todoList.filter((todo) => {
    if (todo.id === id) return false;
    return true;
  });

  return newList;
};

const getTodosLength = (todoList: TodoList): number => {
  return todoList.length;
};

const toggleAllTodosStatus = (todoList: TodoList): TodoList => {
  return todoList;
};

export { createTodo, toggleTodoStatus, editTodoText };
