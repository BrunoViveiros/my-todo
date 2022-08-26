import { ReactNode } from "react";
import styled from "styled-components";

const ListItem = ({ children }: { children: ReactNode }) => {
  return (
    <S.Container isEditing={false} done={false}>
      <S.Checkbox />
      {false ? <S.EditText /> : <S.Text>{children}</S.Text>}

      <S.RemoveIcon>🗑️</S.RemoveIcon>
    </S.Container>
  );
};

const S = (() => {
  type Status = {
    done: boolean;
    isEditing: boolean;
  };

  const RemoveIcon = styled.span`
    display: none;
    cursor: pointer;
    font-size: 1rem;
    filter: invert(1) brightness(0) invert(64%) sepia(70%) saturate(1428%)
      hue-rotate(297deg) brightness(99%) contrast(91%);
    user-select: none;
  `;

  const Text = styled.p`
    flex: 1;
    text-decoration: none;
    color: #fcfcfc;
  `;

  const Checkbox = styled.span`
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

    ::after {
      content: "✓";
      font-size: 1rem;
      font-weight: bolder;
    }
  `;

  const EditText = styled.input`
    flex: 1;

    display: flex;
    justify-content: flex-start;
    align-items: center;
    font-size: 1.2rem;
    color: #fcfcfc;

    background-color: #282833;
    border: 0;
  `;

  const Container = styled.li<Status>`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    font-size: 1.2rem;

    background-color: ${({ isEditing }) =>
      isEditing ? "#282833" : "transparent"};

    padding: 0.3rem;
    border-radius: 0.55rem;

    & + & {
      margin-top: 0.4rem;
    }

    &:hover > ${Text} ~ ${RemoveIcon} {
      display: block;
    }

    > ${Text} {
      text-decoration: ${({ done }) => (done ? "line-through" : "none")};
    }

    > ${Checkbox} {
      background-color: ${({ done }) => (done ? "#ac6dde" : "transparent")};
      visibility: ${({ isEditing }) => (isEditing ? "hidden" : "visible")};

      ::after {
        color: ${({ done }) => (done ? "inherit" : "transparent")};
        visibility: ${({ isEditing }) => (isEditing ? "hidden" : "visible")};
      }
    }
  `;

  return { RemoveIcon, Text, Checkbox, EditText, Container };
})();

export default ListItem;