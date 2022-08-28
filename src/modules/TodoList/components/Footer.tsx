import styled from "styled-components";

import FiltersOptions from "./FiltersOptions";
import { useTodos } from "../context/TodoContext";

type Status = {
  listHasTodos: boolean;
};

const Footer = () => {
  const {
    listHasTodos,
    activeTodosQuantity,
    clearCompletedTodos,
    listHasCompletedTodos,
  } = useTodos();

  return (
    <Container listHasTodos={listHasTodos}>
      <Counter>
        {activeTodosQuantity === 1
          ? activeTodosQuantity + " item left"
          : activeTodosQuantity + " items left"}
      </Counter>
      <FiltersOptions />
      {listHasCompletedTodos && (
        <ClearButton onClick={clearCompletedTodos}>Clear Completed</ClearButton>
      )}
    </Container>
  );
};

const Container = styled.footer<Status>`
  display: flex;
  justify-content: space-between;
  align-items: center;

  font-size: 1rem;
  padding: 1rem;
  background-color: ${({ theme }) => theme.colors.primary};
  border-top: 0.2rem solid ${({ theme }) => theme.colors.secondary};
  border-radius: 0 0 1.3rem 1.3rem;
`;

const Counter = styled.p``;

const ClearButton = styled.button`
  background-color: transparent;
  color: ${({ theme }) => theme.colors.text};
  padding: 0.2rem 0.4rem;
  border: 0;

  :hover {
    color: ${({ theme }) => theme.colors.text};
    filter: brightness(0.7);
  }
`;

export default Footer;
