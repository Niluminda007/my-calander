import { useAppContext } from "../context/AppContext";
import { monthsOfYear } from "../constants/days";

const CalanderNavigator = () => {
  const { activeMonth, activeYear, goToNextMonth, goToPreviousMonth } =
    useAppContext();
  const activeMonthInString: String = monthsOfYear.filter(
    (month) => month.id === activeMonth
  )[0].name;
  return (
    <>
      <div className="flex gap-4">
        <button
          className="border-nonne outline-none w-8 h-8 bg-black text-white flex items-center justify-center"
          onClick={goToPreviousMonth}
        >
          &larr;
        </button>
        <span className="text-2xl text-black">
          Month: {activeMonthInString}
        </span>
        <button
          className="border-nonne outline-none w-8 h-8 bg-black text-white flex items-center justify-center"
          onClick={goToNextMonth}
        >
          &rarr;
        </button>
      </div>
      <div className="flex items-center justify-center">
        {<span className="text-2xl text-black">Year: {activeYear}</span>}
      </div>
    </>
  );
};

export default CalanderNavigator;
