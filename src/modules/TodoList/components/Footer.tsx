import styled from "styled-components";

import FiltersOptions from "./FiltersOptions";
import { useTodos } from "../context/TodoContext";

type Status = {
  listHasTodos: boolean;
};

const Footer = () => {
  const { listHasTodos, activeTodosQuantity } = useTodos();

  return (
    <Container listHasTodos={listHasTodos}>
      <Counter>
        {activeTodosQuantity === 1
          ? activeTodosQuantity + " item left"
          : activeTodosQuantity + " items left"}
      </Counter>
      <FiltersOptions />
    </Container>
  );
};

const Container = styled.footer<Status>`
  display: flex;
  justify-content: space-between;
  align-items: center;

  font-size: 1rem;
  padding: 1rem;
  background-color: #21212b;
  border-top: 2px solid #282833;
  border-radius: 0 0 1.3rem 1.3rem;
`;

const Counter = styled.p``;

export default Footer;
