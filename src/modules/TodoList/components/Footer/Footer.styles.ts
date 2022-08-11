import styled from "styled-components";

export const Container = styled.footer`
  display: none;
  justify-content: space-between;
  align-items: center;

  font-size: 1rem;
  padding: 1rem;
  background-color: #21212b;
  border-top: 2px solid #282833;
  border-radius: 0 0 1.3rem 1.3rem;
`;

export const Counter = styled.p``;

export const FiltersWrapper = styled.div``;

export const FilterOption = styled.button`
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
