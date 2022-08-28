import styled from "styled-components";

import { List, Footer, TodoInput } from "./components";
import { TodoProvider, useTodos } from "./context/TodoContext";

const TodoList = () => {
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

const Wrapper = () => {
  return (
    <TodoProvider>
      <TodoList />
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

export default Wrapper;
