"use client";
import React, { createContext, useContext } from "react";

type IThemeScheme = {
  color: {
    primary: string;
    secondary: string;
  };
};
type IThemeProvider = {
  children: React.ReactNode;
};

const defaultTheme: IThemeScheme = {
  color: {
    primary: "#007bff",
    secondary: "#6c757d",
  },
};
const ThemeContext = createContext<IThemeScheme>(defaultTheme);

export const ThemeProvider = ({ children }: IThemeProvider) => {
  return (
    <ThemeContext.Provider value={defaultTheme}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
