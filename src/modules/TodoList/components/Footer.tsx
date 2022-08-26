import styled from "styled-components";
import { useTodos } from "../context/TodoContext";

const Footer = () => {
  const { listHasTodos } = useTodos();

  return (
    <S.Container listHasTodos={listHasTodos}>
      <S.Counter>99 items left</S.Counter>
      <S.FiltersWrapper>
        <S.FilterOption>All</S.FilterOption>
        <S.FilterOption>Active</S.FilterOption>
        <S.FilterOption>Completed</S.FilterOption>
      </S.FiltersWrapper>
    </S.Container>
  );
};

const S = (() => {
  type Status = {
    listHasTodos: boolean;
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

  const FiltersWrapper = styled.div``;

  const FilterOption = styled.button`
    background-color: transparent;
    color: inherit;
    border: 0.2rem solid transparent;
    border-radius: 0.4rem;
    padding: 0.2rem;

    :hover {
      border: 0.2rem solid #ac6dde;
    }

    & + & {
      margin-left: 1rem;
    }
  `;

  return { Container, Counter, FiltersWrapper, FilterOption };
})();

export default Footer;
