import { LiaSunSolid } from "react-icons/lia";
import { BsMoonStarsFill } from "react-icons/bs";
import { useAppContext } from "../context/AppContext";
import { ThemeType } from "../types/types";

const ThemeSwitcher = () => {
  const { theme, switchTheme } = useAppContext();

  const handleThemeSwitch = () => {
    switchTheme();
  };
  return (
    <div
      className="w-8 h-8 absolute top-0 right-0 mr-8 mt-4 shadow-2xl flex justify-center items-center cursor-pointer bg-black dark:bg-white rounded-full transition-all ease-linear hover:scale-125"
      onClick={handleThemeSwitch}
      aria-label={`Switch to ${
        theme === ThemeType.LIGHT_THEME ? "Dark" : "Light"
      } Theme`}
    >
      {theme === ThemeType.LIGHT_THEME ? (
        <LiaSunSolid size="1.3rem" fill="#8e9091" />
      ) : (
        <BsMoonStarsFill fill="#8e9091" />
      )}
    </div>
  );
};

export default ThemeSwitcher;
