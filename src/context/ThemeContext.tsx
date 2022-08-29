import { createContext, ReactNode, useState, useContext } from "react";
import { ThemeProvider } from "styled-components";

import themeList from "../styles/themes/themes";

type MyThemeProviderProps = {
  children: ReactNode;
};

type MyThemeContextData = {
  currentTheme: keyof typeof themeList;
  setTheme: (theme: keyof typeof themeList) => void;
  allThemes: Array<keyof typeof themeList>;
  themeList: typeof themeList;
};

export const MyThemeContext = createContext<MyThemeContextData>(
  {} as MyThemeContextData
);

export const MyThemeProvider = ({ children }: MyThemeProviderProps) => {
  const [currentTheme, setCurrentTheme] =
    useState<keyof typeof themeList>("darkTheme");

  const setTheme = (theme: keyof typeof themeList) => {
    setCurrentTheme(theme);
  };

  const allThemes = () =>
    Object.keys(themeList) as Array<keyof typeof themeList>;

  return (
    <ThemeProvider theme={themeList[currentTheme]}>
      <MyThemeContext.Provider
        value={{ setTheme, allThemes: allThemes(), currentTheme, themeList }}
      >
        {children}
      </MyThemeContext.Provider>
    </ThemeProvider>
  );
};

export const useMyTheme = () => {
  const context = useContext(MyThemeContext);

  return context;
};
