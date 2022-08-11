import styled from "styled-components";

export const Container = styled.div`
  min-width: 23rem;
  max-width: 32rem;
  margin: 6rem;
`;

export const List = styled.ul`
  background-color: #21212b;
  list-style: none;
  padding: 1rem;
  display: none;

  &:has(> li) {
    display: block;
  }

  &:has(> li) + footer {
    display: flex;
  }
`;
