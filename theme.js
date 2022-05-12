import { extendTheme } from "@chakra-ui/react";

const config = {
  /* Start in Dark, prioritize system color */
  initialColorMode: "dark",
  useSystemColorMode: true,
};
const fonts = {
  /* use imported fonts */
  body: "Cairo, sans-serif",
  heading: "Cairo, serif",
  mono: "Menlo, monospace",
};

const breakpoints = {
  xxs: "371",
  xs: "500px",
  sm: "640px",
  md: "768px",
  lg: "1024px",
  xl: "1280px",
};

const theme = extendTheme({
  config,
  fonts,
  breakpoints,
});

export default theme;

export const screenBreakpoints = {
  xs: "screen and (max-width: 500px)",
  sm: "screen and (max-width: 640px)",
  md: "screen and (max-width: 768px)",
  lg: "screen and (max-width: 1024px)",
  xl: "screen and (max-width: 1280px)",
};
