import { monthsOfYear } from "../constants/days";
import { useAppContext } from "../context/AppContext";
import ThemeSwitcher from "./ThemeSwitcher";

const Header = () => {
  const { activeMonth, activeYear, goToNextMonth, goToPreviousMonth } =
    useAppContext();
  const activeMonthInString: String = monthsOfYear.filter(
    (month) => month.id === activeMonth
  )[0].name;

  return (
    <div className="w-full h-32  relative">
      <ThemeSwitcher />
      <div className="flex gap-4">
        <button
          className="border-nonne outline-none w-16 h-16 bg-black text-white flex items-center justify-center"
          onClick={goToPreviousMonth}>
          &larr;
        </button>
        <span className="text-2xl text-black">
          Month: {activeMonthInString}
        </span>
        <button
          className="border-nonne outline-none w-16 h-16 bg-black text-white flex items-center justify-center"
          onClick={goToNextMonth}>
          &rarr;
        </button>
      </div>
      <div className="flex items-center justify-center">
        {<span className="text-2xl text-black">Year: {activeYear}</span>}
      </div>
    </div>
  );
};

export default Header;
