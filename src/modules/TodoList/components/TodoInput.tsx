import styled from "styled-components";

const TodoInput = () => {
  return (
    <S.Container>
      <S.SelectAllIcon>❯</S.SelectAllIcon>
      <S.Input type="text" placeholder="What needs to be done?" />
    </S.Container>
  );
};

const S = (() => {
  const SelectAllIcon = styled.span`
    display: none;
    transform: rotate(90deg);
    font-size: 1rem;
    width: 1rem;
    cursor: pointer;
    user-select: none;
  `;

  const Container = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    position: relative;

    border-radius: 1.3rem;
    padding: 1rem 1.3rem;
    font-size: 1.6rem;

    background-color: #282833;

    &:has(+ ul > li) {
      border-radius: 1.3rem 1.3rem 0 0;
    }

    &:has(+ ul > li) > ${SelectAllIcon} {
      display: block;
    }
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
