import { useState } from "react";
import { ListItem, Footer, TodoInput } from "./components";
import { Container, List } from "./TodoList.styles";

type Todo = {
  id: number;
  text: string;
  done: boolean;
};

const TodoList = () => {
  const [todos, setTodos] = useState<Todo[]>([
    {
      id: 1,
      text: "Learn React",
      done: false,
    },
    {
      id: 2,
      text: "Learn React Native",
      done: true,
    },
    {
      id: 3,
      text: "Learn GraphQL",
      done: false,
    },
  ]);

  const addTodo = (text: string) => {
    const newTodo: Todo = {
      id: todos.length + 1,
      text,
      done: false,
    };

    setTodos([...todos, newTodo]);
  };

  const handleInputSubmit =
    (actionTodo: (text: string) => void) =>
    (e: React.KeyboardEvent<HTMLInputElement>) => {
      const { value } = e.currentTarget;

      if (value.trim() && e.key === "Enter") {
        actionTodo(value);
        e.currentTarget.value = "";
      }
    };
  
  return (
    <Container>
      <TodoInput addTodo={addTodo} handleInputSubmit={handleInputSubmit} />
      <List>
        {todos.map(({ id, text, done }) => (
          <ListItem key={id} id={id} done={done}>
            {text}
          </ListItem>
        ))}
      </List>
      <Footer />
    </Container>
  );
};

export default TodoList;
