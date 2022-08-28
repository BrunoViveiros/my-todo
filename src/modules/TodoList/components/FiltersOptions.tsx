import styled from "styled-components";

import { useTodos } from "../context/TodoContext";
import { Filters } from "../domain/todo";

type Status = {
  isActive: boolean;
};

const FiltersOptions = () => {
  const { setTodoFilter, activeFilter } = useTodos();

  return (
    <Container>
      {Object.values(Filters).map((filter) => {
        return (
          <FilterOption
            key={filter}
            onClick={() => setTodoFilter(filter)}
            isActive={activeFilter === filter}
          >
            {filter}
          </FilterOption>
        );
      })}
    </Container>
  );
};

const Container = styled.div``;

const FilterOption = styled.button<Status>`
  background-color: transparent;
  color: inherit;
  border: 0.15rem solid
    ${({ isActive }) => (isActive ? "#ac6dde" : "transparent")};
  border-radius: 0.4rem;
  padding: 0.2rem 0.4rem;

  :hover {
    border: 0.15rem solid #ac6dde;
  }

  & + & {
    margin-left: 1rem;
  }
`;

export default FiltersOptions;
