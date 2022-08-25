import { Container, Input, SelectAllIcon } from "./TodoInput.styles";

const TodoInput = () => {
  return (
    <Container>
      <SelectAllIcon>❯</SelectAllIcon>
      <Input type="text" placeholder="What needs to be done?" />
    </Container>
  );
};

export default TodoInput;
