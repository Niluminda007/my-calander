import { DateType } from "../types/types";
import DayItem from "./DayItem";
import {
  getPrevMonthDates,
  getCurrentMonthDates,
  getNextMonthDates,
} from "../utils/date-utils";
import { useAppContext } from "../context/AppContext";

const CalanderBody = () => {
  const { activeMonth, activeYear } = useAppContext();
  // Previous Month
  const prevMonthDates: DateType[] = getPrevMonthDates(activeMonth, activeYear);

  //Current Month
  const currentMonthDates: DateType[] = getCurrentMonthDates(
    activeMonth,
    activeYear
  );

  // Next Month
  const nextMonthDates: DateType[] = getNextMonthDates(activeMonth, activeYear);

  const allDates: DateType[] = [
    ...prevMonthDates,
    ...currentMonthDates,
    ...nextMonthDates,
  ];

  return (
    <>
      {allDates.map((date, index) => (
        <DayItem key={`${index}_${date.date}`} date={date} />
      ))}
    </>
  );
};

export default CalanderBody;
