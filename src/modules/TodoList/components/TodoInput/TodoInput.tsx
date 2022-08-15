import { Container, Input, SelectAllIcon } from "./TodoInput.styles";

type TodoInputProps = {
  addTodo: (text: string) => void;
};

const handleKeyDown =
  (addTodo: (text: string) => void) =>
  (e: React.KeyboardEvent<HTMLInputElement>) => {
    const { value } = e.currentTarget;

    if (value.trim() && e.key === "Enter") {
      addTodo(value);
      e.currentTarget.value = "";
    }
  };

const TodoInput = ({ addTodo }: TodoInputProps) => {
  return (
    <Container>
      <SelectAllIcon>❯</SelectAllIcon>
      <Input
        type="text"
        placeholder="What needs to be done?"
        onKeyDown={handleKeyDown(addTodo)}
      />
    </Container>
  );
};

export default TodoInput;
