// Import Statements
import { createContext, useContext, useState, useEffect } from "react";
import { AppContextType, ThemeType } from "../types/types";

const DARK_MODE_CLASS = "dark";
// Context Creation
const AppContext = createContext<AppContextType>({
  theme: ThemeType.LIGHT_THEME,
  switchTheme: () => {},
});

// AppProvider Component

type AppProviderProps = {
  children: React.ReactNode;
};

const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState<ThemeType>(ThemeType.LIGHT_THEME);

  const switchTheme = () => {
    const newTheme =
      theme === ThemeType.LIGHT_THEME
        ? ThemeType.DARK_THEME
        : ThemeType.LIGHT_THEME;
    setTheme(newTheme);
  };
  useEffect(() => {
    const htmlElement = document.documentElement;

    if (theme === ThemeType.DARK_THEME) {
      htmlElement.classList.add(DARK_MODE_CLASS);
    } else {
      htmlElement.classList.remove(DARK_MODE_CLASS);
    }
  }, [theme]);
  return (
    <AppContext.Provider
      value={{
        theme,
        switchTheme,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
export default AppProvider;

// Custom Hook for Using AppContext
export const useAppContext = () => {
  return useContext(AppContext);
};
