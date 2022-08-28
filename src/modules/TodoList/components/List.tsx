import styled from "styled-components";

import { useTodos } from "../context/TodoContext";
import ListItem from "./ListItem";

type ContainerProps = {
  listSize: number;
};

const List = () => {
  const { filteredTodos } = useTodos();

  const filteredTodosLength = filteredTodos.length;

  return (
    <Container listSize={filteredTodosLength}>
      {filteredTodos.map(({ id, text, done }) => (
        <ListItem key={id} todo={{ id, text, done }} />
      ))}
    </Container>
  );
};

const Container = styled.ul<ContainerProps>`
  background-color: ${({ theme }) => theme.colors.primary};
  list-style: none;
  display: block;
  padding: ${({ listSize }) => (listSize ? "1rem" : "0")};
`;

export default List;
