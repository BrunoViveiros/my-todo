import { ThemeProvider } from "styled-components";

import { Homepage } from "./pages";
import GlobalStyle from "./styles/global";
import {
  darkTheme,
  oneDarkPro,
  dracula,
  githubDark,
  githubLight,
  winterIsComing,
  nightOwl,
  monokaiPro,
  oneMonokai,
  shadesOfPurple
} from "./styles/themes";

function App() {
  return (
    <ThemeProvider theme={shadesOfPurple}>
      <GlobalStyle />

      <Homepage />
    </ThemeProvider>
  );
}

export default App;
