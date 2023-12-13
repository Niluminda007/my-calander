import { LiaSunSolid } from "react-icons/lia";
import { BsMoonStarsFill } from "react-icons/bs";
import { useAppContext } from "../context/AppContext";
import { ThemeType } from "../types/types";

const ThemeSwitcher = () => {
    const { theme, switchTheme } = useAppContext();

    return (
        <div className="w-32 h-8 absolute top-0 right-0 mr-8 mt-4 bg-black rounded-2xl shadow-2xl flex">
            <div
                className={`w-[50%] h-full flex justify-center items-center cursor-pointer ${
                    theme === ThemeType.LIGHT_THEME ? "bg-white" : "bg-black"
                }`}
                onClick={() => switchTheme()}
            >
                <LiaSunSolid size="1.3rem" fill={theme === ThemeType.DARK_THEME ? "" : "#8e9091"} />
            </div>
            <div
                className={`w-[50%] h-full flex justify-center items-center cursor-pointer ${
                    theme === ThemeType.LIGHT_THEME ? "bg-black" : "bg-white"
                }`}
                onClick={() => switchTheme()}
            >
                <BsMoonStarsFill fill={theme === ThemeType.LIGHT_THEME ? "" : "#8e9091"} />
            </div>
        </div>
    );
};

export default ThemeSwitcher;
