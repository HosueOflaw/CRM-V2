import { tokens } from "./color-tokens";

export const themeSettings = (mode: 'light' | 'dark') => {
  const colors = tokens(mode);

  return {
    palette: {
      mode,
      primary: {
        main: mode === "dark" ? colors.primary[500] : colors.primary[100],
      },
      background: {
        default: mode === "dark" ? colors.primary[500] : "#fcfcfc",
      },
      text: {
        primary: mode === "dark" ? colors.grey[100] : colors.grey[900],
      }
    }
  };
};
