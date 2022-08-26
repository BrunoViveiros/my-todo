import styled from "styled-components";
import { useTodos } from "../context/TodoContext";

const TodoInput = () => {
  const { createNewTodo, listHasTodos } = useTodos();

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
    <S.Container hasTodos={listHasTodos}>
      {listHasTodos && <S.SelectAllIcon>❯</S.SelectAllIcon>}
      <S.Input
        type="text"
        placeholder="What needs to be done?"
        onKeyDown={handleOnKeyDown("Enter")}
      />
    </S.Container>
  );
};

const S = (() => {
  type Status = {
    hasTodos: boolean;
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

    background-color: #282833;
  `;

  const Input = styled.input`
    width: 100%;
    border: 0;

    font-size: inherit;
    background-color: inherit;
    border-radius: inherit;

    outline: none;
    padding: 0 1rem;

    color: #fcfcfc;
  `;

  return { SelectAllIcon, Container, Input };
})();

export default TodoInput;
