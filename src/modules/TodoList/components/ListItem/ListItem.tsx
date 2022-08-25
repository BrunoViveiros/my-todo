import { ReactNode } from "react";
import {
  Container,
  Checkbox,
  RemoveIcon,
  Text,
  EditText,
} from "./ListItem.styles";

const ListItem = ({ children }: { children: ReactNode }) => {
  return (
    <Container isEditing={false} done={false}>
      <Checkbox />
      {false ? <EditText /> : <Text>{children}</Text>}

      <RemoveIcon>🗑️</RemoveIcon>
    </Container>
  );
};

export default ListItem;
