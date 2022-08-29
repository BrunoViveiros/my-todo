import { Homepage } from "./pages";
import GlobalStyle from "./styles/global";
import { MyThemeProvider } from "./context/ThemeContext";

const App = () => {
  return (
    <MyThemeProvider>
      <GlobalStyle />

      <Homepage />
    </MyThemeProvider>
  );
};

export default App;
