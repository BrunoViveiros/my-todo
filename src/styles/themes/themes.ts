import { DefaultTheme } from "styled-components";

const darkTheme: DefaultTheme = {
  name: "Dark Theme",
  colors: {
    accent: "#ac6dde",
    primary: "#21212b",
    secondary: "#282833",

    background: "#181821",
    text: "#fcfcfc",
    placeholderText: "#999",

    error: "",
  },
};

const dracula: DefaultTheme = {
  name: "Dracula",
  colors: {
    accent: "#ff79c6",
    primary: "#282a36",
    secondary: "#44475a",

    background: "#21222c",
    text: "#f8f8f2",
    placeholderText: "#6272a4",

    error: "#ff5555",
  },
};

const githubDark: DefaultTheme = {
  name: "Github Dark",
  colors: {
    accent: "#1f6feb",
    primary: "#0d1117",
    secondary: "#161b22",

    background: "#010409",
    text: "#c9d1d9",
    placeholderText: "#6e7681",

    error: "#da3633",
  },
};

const githubLight: DefaultTheme = {
  name: "Github Light",
  colors: {
    accent: "#0969da",
    primary: "#f6f8fa",
    secondary: "#d0d7de",

    background: "#ffffff",
    text: "#24292f",
    placeholderText: "#6e7781",

    error: "#cf222e",
  },
};

const monokaiPro: DefaultTheme = {
  name: "Monokai Pro",
  colors: {
    accent: "#f95f86",
    primary: "#221f22",
    secondary: "#2d2a2e",

    background: "#19181a",
    text: "#f3f3f1",
    placeholderText: "#403e41",

    error: "#ff6188",
  },
};

const nightOwl: DefaultTheme = {
  name: "Night Owl",
  colors: {
    accent: "#684ea8",
    primary: "#0e293f",
    secondary: "#5f7e97",

    background: "#011627",
    text: "#c9d2df",
    placeholderText: "#8491a0",

    error: "#ef5350",
  },
};

const oneDarkPro: DefaultTheme = {
  name: "One Dark Pro",
  colors: {
    accent: "#61afef",
    primary: "#282c34",
    secondary: "#3b4048",

    background: "#21252b",
    text: "#abb2bf",
    placeholderText: "#e5c07b",

    error: "#e06c75",
  },
};

const oneMonokai: DefaultTheme = {
  name: "One Monokai",
  colors: {
    accent: "#55b2be",
    primary: "#282c34",
    secondary: "#2f333d",

    background: "#21252b",
    text: "#bbbbbb",
    placeholderText: "#717681",

    error: "#c24038",
  },
};

const shadesOfPurple: DefaultTheme = {
  name: "Shades Of Purple",
  colors: {
    accent: "#5d37f0",
    primary: "#1e1e3f",
    secondary: "#222244",

    background: "#2d2b55",
    text: "#9effff",
    placeholderText: "#75b2c1",

    error: "#e83a38",
  },
};

const winterIsComing: DefaultTheme = {
  name: "Winter Is Coming",
  colors: {
    accent: "#c792ea",
    primary: "#0e293f",
    secondary: "#03648a",

    background: "#011627",
    text: "#d6deeb",
    placeholderText: "#b1e3b7",

    error: "#ef5350",
  },
};

const themeList = {
  darkTheme,
  dracula,
  githubDark,
  githubLight,
  monokaiPro,
  nightOwl,
  oneDarkPro,
  oneMonokai,
  shadesOfPurple,
  winterIsComing,
};

export type Theme = typeof themeList;
export default themeList;
