import styled from "styled-components";

import { TodoList } from "../modules";
import { useMyTheme } from "../context/ThemeContext";

const Homepage = () => {
  const { setTheme, allThemes, currentTheme, themeList } = useMyTheme();
  return (
    <Container>
      <>
        <TodoList />

        <select
          value={currentTheme}
          onChange={(e) => setTheme(e.target.value as keyof typeof themeList)}
        >
          {allThemes.map((theme) => (
            <option key={theme} value={theme}>
              {themeList[theme].name}
            </option>
          ))}
        </select>
      </>
    </Container>
  );
};

export const Container = styled.div``;

export default Homepage;
