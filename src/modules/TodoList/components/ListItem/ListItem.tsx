import { Container, Checkbox, RemoveIcon, Text } from "./ListItem.styles";

type ListItemProps = {
  children: string;
  completed: boolean;
};

const ListItem = ({ children, completed }: ListItemProps) => {
  return (
    <Container>
      <Checkbox completed={completed} />
      <Text completed={completed}>{children}</Text>
      <RemoveIcon>🗑️</RemoveIcon>
    </Container>
  );
};

export default ListItem;
