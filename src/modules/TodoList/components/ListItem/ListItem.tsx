import {
  Container,
  Checkbox,
  RemoveIcon,
  Text,
} from "./ListItem.styles";

type ListItemProps = {
  children: string;
  id: number;
  done: boolean;
};

const ListItem = ({ id, done, children }: ListItemProps) => {
  return (
    <Container done={done}>
      <Checkbox />

      <Text>{children}</Text>

      <RemoveIcon>🗑️</RemoveIcon>
    </Container>
  );
};

export default ListItem;
