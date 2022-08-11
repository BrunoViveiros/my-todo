import styled from "styled-components";

type Status = {
  completed: boolean;
};

export const RemoveIcon = styled.span`
  display: none;
  cursor: pointer;
  font-size: 1rem;
  filter: invert(1) brightness(0) invert(64%) sepia(70%) saturate(1428%)
    hue-rotate(297deg) brightness(99%) contrast(91%);
  user-select: none;
`;

export const Container = styled.li`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-size: 1.2rem;

  & + & {
    margin-top: 1rem;
  }

  &:hover > ${RemoveIcon} {
    display: block;
  }
`;

export const Checkbox = styled.span<Status>`
  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;

  min-height: 1.5rem;
  height: 1.5rem;
  min-width: 1.5rem;
  width: 1.5rem;

  margin-right: 0.8rem;

  border-radius: 0.55rem;
  border: 0.2rem solid #ac6dde;
  background-color: ${({ completed }) =>
    completed ? "#ac6dde" : "transparent"};

  ::after {
    content: "✓";
    visibility: ${({ completed }) => (completed ? "visible" : "hidden")};
    color: inherit;
    font-size: 1rem;
    font-weight: bolder;
  }
`;

export const Text = styled.p<Status>`
  flex: 1;
  text-decoration: ${({ completed }) => (completed ? "line-through" : "none")};
`;
