import styled from "styled-components";

import { List, Footer, TodoInput } from "./components";
import { TodoProvider, useTodos } from "./context/TodoContext";

const Wrapper = () => {
  const { listHasTodos } = useTodos();
  return (
    <S.Container>
      <TodoInput />
      {listHasTodos && (
        <>
          <List />
          <Footer />
        </>
      )}
    </S.Container>
  );
};

const TodoList = () => {
  return (
    <TodoProvider>
      <Wrapper />
    </TodoProvider>
  );
};

const S = (() => {
  const Container = styled.div`
    min-width: 23rem;
    max-width: 32rem;
    margin: 6rem;
  `;

  return { Container };
})();

export default TodoList;
