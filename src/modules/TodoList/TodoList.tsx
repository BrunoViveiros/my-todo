import { Container, List } from "./TodoList.styles";
import { ListItem, Footer, TodoInput } from "./components";

function TodoList() {
  return (
    <Container>
      <TodoInput />
      <List>
        <ListItem completed={true}>asda</ListItem>
        <ListItem completed={false}>asda</ListItem>
        <ListItem completed={true}>asda</ListItem>
        <ListItem completed={false}>asda</ListItem>
        <ListItem completed={true}>asda</ListItem>
      </List>
      <Footer />
    </Container>
  );
}

export default TodoList;
