import React, { createContext, useContext, ReactNode } from 'react';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from '../styles/Theme';
import { GlobalStyles } from '../styles/GlobalStyles';
import { useLocalStorage, useToggle } from '../hooks';
import { THEMEOPTIONS, ThemeType } from '../types';

type ThemeContextType = {
  toggleTheme: () => void;
  theme: ThemeType;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export const ThemeContextProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useLocalStorage<ThemeType | null>('theme', null);

  const toggleTheme = useToggle(() => {
    setTheme((prevTheme) => (prevTheme === THEMEOPTIONS.LIGHT ? THEMEOPTIONS.DARK : THEMEOPTIONS.LIGHT));
  });

  return (
    <ThemeContext.Provider value={{ toggleTheme, theme: theme as ThemeType }}>
      <ThemeProvider theme={theme === THEMEOPTIONS.LIGHT ? lightTheme : darkTheme}>
        <GlobalStyles />
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};
