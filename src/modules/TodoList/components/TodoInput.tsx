import styled from "styled-components";

import { useTodos } from "../context/TodoContext";

type Status = {
  hasTodos: boolean;
};

const TodoInput = () => {
  const { createNewTodo, listHasTodos, toggleAllTodosStatus } = useTodos();

  const handleOnKeyDown =
    (keyName: string) => (e: React.KeyboardEvent<HTMLInputElement>) => {
      const { value } = e.currentTarget;
      const trimmedValue = value.trim();

      if (trimmedValue && e.key === keyName) {
        createNewTodo(trimmedValue);
        e.currentTarget.value = "";
      }
    };

  return (
    <Container hasTodos={listHasTodos}>
      {listHasTodos && (
        <SelectAllIcon onClick={toggleAllTodosStatus}>❯</SelectAllIcon>
      )}
      <Input
        type="text"
        placeholder="What needs to be done?"
        onKeyDown={handleOnKeyDown("Enter")}
      />
    </Container>
  );
};

const SelectAllIcon = styled.span`
  display: block;
  transform: rotate(90deg);
  font-size: 1rem;
  width: 1rem;
  cursor: pointer;
  user-select: none;
`;

const Container = styled.div<Status>`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  position: relative;

  border-radius: ${({ hasTodos }) =>
    hasTodos ? "1.3rem 1.3rem 0 0" : "1.3rem"};
  padding: 1rem 1.3rem;
  font-size: 1.6rem;

  background-color: ${({ theme }) => theme.colors.secondary};
`;

const Input = styled.input`
  width: 100%;
  border: 0;

  font-size: inherit;
  background-color: inherit;
  border-radius: inherit;

  outline: none;
  padding: 0 1rem;

  color: ${({ theme }) => theme.colors.text};

  ::placeholder {
    color: ${({ theme }) => theme.colors.placeholderText};
  }
`;

export default TodoInput;
