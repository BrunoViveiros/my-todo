import { Container, Checkbox, RemoveIcon, Text } from "./ListItem.styles";

type ListItemProps = {
  children: string;
  id: number;
  done: boolean;
  toggleTodo: (id: number) => () => void;
};

const ListItem = ({ id, done, children, toggleTodo }: ListItemProps) => {
  return (
    <Container done={done}>
      <Checkbox onClick={toggleTodo(id)} />


      <Text>
        {id} - {children}
      </Text>

      <RemoveIcon>🗑️</RemoveIcon>
    </Container>
  );
};

export default ListItem;
