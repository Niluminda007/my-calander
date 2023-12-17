// Import Statements
import { createContext, useContext, useState, useEffect } from "react";
import { AppContextType, ThemeType } from "../types/types";
import { getMonth, getYear } from "date-fns";

const DARK_MODE_CLASS = "dark";
const LAST_MONTH = 11;
const FIRST_MONTH = 0;
// Context Creation
const AppContext = createContext<AppContextType>({
  theme: ThemeType.LIGHT_THEME,
  switchTheme: () => {},
  currentDate: 0,
  activeYear: 0,
  activeMonth: 0,
  goToPreviousMonth: () => {},
  goToNextMonth: () => {},
});

// AppProvider Component

type AppProviderProps = {
  children: React.ReactNode;
};

const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState<ThemeType>(ThemeType.LIGHT_THEME);
  const currentDate: number = new Date().getDate();
  const currentMonth: number = getMonth(new Date());
  const currentYear = getYear(new Date());
  const [activeYear, setActiveYear] = useState<number>(currentYear);

  const [activeMonth, setActiveMonth] = useState<number>(currentMonth);

  const goToPreviousMonth = (): void => {
    setActiveMonth((prevState) => {
      if (prevState == FIRST_MONTH) {
        setActiveYear((prevState) => prevState - 1);
        return LAST_MONTH;
      } else {
        return prevState - 1;
      }
    });
  };
  const goToNextMonth = (): void => {
    setActiveMonth((prevState) => {
      if (prevState == LAST_MONTH) {
        setActiveYear((prevState) => prevState + 1);
        return FIRST_MONTH;
      } else {
        return prevState + 1;
      }
    });
  };

  const switchTheme = (): void => {
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
        currentDate,
        activeMonth,
        activeYear,
        goToNextMonth,
        goToPreviousMonth,
      }}>
      {children}
    </AppContext.Provider>
  );
};
export default AppProvider;

// Custom Hook for Using AppContext
export const useAppContext = () => {
  return useContext(AppContext);
};
