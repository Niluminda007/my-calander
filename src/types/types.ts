export enum ThemeType {
  LIGHT_THEME,
  DARK_THEME,
}
export type AppContextType = {
  theme: ThemeType;
  switchTheme: () => void;
  activeYear: number;
  activeMonth: number;
  goToPreviousMonth: () => void;
  goToNextMonth: () => void;
};

export type DayOfWeekType = {
  id: number;
  name: String;
};

export type DateType = {
  date: number;
  dateType: MonthDateTypes;
};

export enum MonthDateTypes {
  CURRENT,
  PREV,
  NEXT,
}

export type MonthOfYearType = {
  id: number;
  name: String;
};
