import { ListItem, Footer, TodoInput } from "./components";
import { TodoProvider } from "./context/TodoContext";
import { Container, List } from "./TodoList.styles";

const TodoList = () => {
  return (
    <TodoProvider>
      <Container>
        <TodoInput />
        <List>
          <ListItem>asd</ListItem>
        </List>
        <Footer />
      </Container>
    </TodoProvider>
  );
};

export default TodoList;
