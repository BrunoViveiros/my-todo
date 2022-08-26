import { useState } from "react";
import styled from "styled-components";
import { useTodos } from "../context/TodoContext";

const List = () => {
  const { todos } = useTodos();

  return (
    <S.List>
      {todos.map(({ id, text, done }) => (
        <ListItem key={id} id={id} done={done}>
          {text}
        </ListItem>
      ))}
    </S.List>
  );
};

type ListItemProps = {
  children: string;
  done: boolean;
  id: number;
};

type handleKeyDown = {
  keyName: string;
  todoId: number;
};

const ListItem = ({ children, done, id }: ListItemProps) => {
  const { toggleTodoStatus, removeTodoFromList, changeTodoText } = useTodos();

  const [editing, setEditing] = useState(0);

  const handleCheckbox = (todoId: number) => {
    toggleTodoStatus(todoId);
  };

  const handleRemove = (todoId: number) => {
    removeTodoFromList(todoId);
  };

  const handleKeyDown =
    ({ keyName, todoId }: handleKeyDown) =>
    (e: React.KeyboardEvent<HTMLInputElement>) => {
      const { value } = e.currentTarget;
      const trimmedValue = value.trim();

      if (trimmedValue && e.key === keyName) {
        console.log({ id: todoId, text: value });
        changeTodoText({ id: todoId, text: value });
        e.currentTarget.value = "";
        setEditing(0);
      }
    };

  const isEditing = editing === id;

  return (
    <S.ListItem isEditing={isEditing} done={done}>
      <S.Checkbox onClick={() => handleCheckbox(id)} />
      {isEditing ? (
        <S.EditText
          autoFocus
          onKeyDown={handleKeyDown({ keyName: "Enter", todoId: id })}
          onBlur={() => setEditing(0)}
        />
      ) : (
        <S.Text onDoubleClick={() => setEditing(id)}>{children}</S.Text>
      )}
      <S.RemoveIcon onClick={() => handleRemove(id)}>🗑️</S.RemoveIcon>
    </S.ListItem>
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

  const ListItem = styled.li<Status>`
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

  const List = styled.ul`
    background-color: #21212b;
    list-style: none;
    display: block;
    padding: 1rem;
  `;

  return { RemoveIcon, Text, Checkbox, EditText, ListItem, List };
})();

export default List;
