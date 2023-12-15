export enum ThemeType {
  LIGHT_THEME,
  DARK_THEME,
}
export type AppContextType = {
  theme: ThemeType;
  switchTheme: () => void;
};

export type DayOfWeekType = {
  id: number;
  name: String;
};
