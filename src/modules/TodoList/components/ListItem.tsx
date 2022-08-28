import styled from "styled-components";

import { Todo } from "../domain/todo";
import { useTodos } from "../context/TodoContext";

type ListItemProps = {
  todo: Todo;
};

type handleKeyDown = {
  keyName: string;
  todoId: number;
};

type Status = {
  done: boolean;
  isEditing: boolean;
};

const ListItem = ({ todo: { id, text, done } }: ListItemProps) => {
  const {
    toggleTodoStatus,
    removeTodoFromList,
    changeTodoText,
    isEditingTodo,
    setEditingTodo,
    clearEditingTodo,
  } = useTodos();

  const isEditing = isEditingTodo(id);

  const handleKeyDown =
    ({ keyName, todoId }: handleKeyDown) =>
    (e: React.KeyboardEvent<HTMLInputElement>) => {
      const { value } = e.currentTarget;
      const trimmedValue = value.trim();

      if (trimmedValue && e.key === keyName) {
        changeTodoText({ id: todoId, text: value });
        e.currentTarget.value = "";
        clearEditingTodo();
      }

      if (e.key === "Escape") {
        e.currentTarget.blur();
      }
    };

  return (
    <Container isEditing={isEditing} done={done}>
      <Checkbox onClick={() => toggleTodoStatus(id)} />
      {isEditing ? (
        <EditText
          autoFocus
          onKeyDown={handleKeyDown({ keyName: "Enter", todoId: id })}
          onBlur={() => clearEditingTodo()}
          defaultValue={text}
        />
      ) : (
        <Text onDoubleClick={() => setEditingTodo(id)}>{text}</Text>
      )}
      <RemoveIcon onClick={() => removeTodoFromList(id)}>🗑️</RemoveIcon>
    </Container>
  );
};

const RemoveIcon = styled.span`
  display: block;
  visibility: hidden;
  cursor: pointer;
  font-size: 1rem;
  filter: invert(1) brightness(0) invert(64%) sepia(70%) saturate(1428%)
    hue-rotate(297deg) brightness(99%) contrast(91%);
  user-select: none;
  margin-left: 0.8rem;
`;

const Text = styled.p`
  flex: 1;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.text};
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
  border: 0.2rem solid ${({ theme }) => theme.colors.accent};

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
  color: ${({ theme }) => theme.colors.text};

  background-color: ${({ theme }) => theme.colors.secondary};
  border: 0;
`;

const Container = styled.li<Status>`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-size: 1.2rem;
  background-color: ${({ isEditing, theme }) =>
    isEditing ? theme.colors.secondary : "transparent"};

  padding: 0.3rem;
  border-radius: 0.55rem;

  & + & {
    margin-top: 0.4rem;
  }

  &:hover > ${Text} ~ ${RemoveIcon} {
    visibility: visible;
  }

  > ${Text} {
    text-decoration: ${({ done }) => (done ? "line-through" : "none")};
  }

  > ${Checkbox} {
    background-color: ${({ done, theme }) =>
      done ? theme.colors.accent : "transparent"};
    visibility: ${({ isEditing }) => (isEditing ? "hidden" : "visible")};

    ::after {
      color: ${({ done }) => (done ? "inherit" : "transparent")};
      visibility: ${({ isEditing }) => (isEditing ? "hidden" : "visible")};
    }
  }
`;

export default ListItem;
