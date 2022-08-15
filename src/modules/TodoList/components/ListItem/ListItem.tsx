import {
  Container,
  Checkbox,
  RemoveIcon,
  Text,
  EditText,
} from "./ListItem.styles";

type ListItemProps = {
  children: string;
  id: number;
  done: boolean;
  isEditing: boolean;
  setEditing: (id: number | null) => void;
  toggleTodo: (id: number) => () => void;
  handleEditing: (
    id: number
  ) => (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const ListItem = ({
  id,
  done,
  children,
  toggleTodo,
  handleEditing,
  isEditing,
  setEditing,
}: ListItemProps) => {
  return (
    <Container isEditing={isEditing} done={done}>
      <Checkbox onClick={toggleTodo(id)} />

      {isEditing ? (
        <EditText
          autoFocus
          defaultValue={children}
          onChange={handleEditing(id)}
          onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => {
            if (e.key === "Enter") {
              setEditing(null);
            }
          }}
        />
      ) : (
        <Text onDoubleClick={() => setEditing(id)}>{children}</Text>
      )}

      <RemoveIcon>🗑️</RemoveIcon>
    </Container>
  );
};

export default ListItem;
