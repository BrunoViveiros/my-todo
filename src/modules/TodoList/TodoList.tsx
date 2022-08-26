import styled from "styled-components";

import { ListItem, Footer, TodoInput } from "./components";
import { TodoProvider } from "./context/TodoContext";

const TodoList = () => {
  return (
    <TodoProvider>
      <S.Container>
        <TodoInput />
        <S.List>
          <ListItem>asd</ListItem>
        </S.List>
        <Footer />
      </S.Container>
    </TodoProvider>
  );
};

const S = (() => {
  const Container = styled.div`
    min-width: 23rem;
    max-width: 32rem;
    margin: 6rem;
  `;

  const List = styled.ul`
    background-color: #21212b;
    list-style: none;
    padding: 1rem;
    display: block;
  `;

  return { Container, List };
})();

export default TodoList;
