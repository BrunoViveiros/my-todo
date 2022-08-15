import { Container, Input, SelectAllIcon } from "./TodoInput.styles";

type TodoInputProps = {
  addTodo: (text: string) => void;
  handleInputSubmit: (
    actionTodo: (text: string) => void
  ) => (e: React.KeyboardEvent<HTMLInputElement>) => void;
};

const TodoInput = ({ addTodo, handleInputSubmit }: TodoInputProps) => {
  return (
    <Container>
      <SelectAllIcon>❯</SelectAllIcon>
      <Input
        type="text"
        placeholder="What needs to be done?"
        onKeyDown={handleInputSubmit(addTodo)}
      />
    </Container>
  );
};

export default TodoInput;
