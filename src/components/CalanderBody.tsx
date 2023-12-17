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
  const totalDatesFromPreviousMonthAndThisMonth: number =
    prevMonthDates.length + currentMonthDates.length;
  const nextMonthDates: DateType[] = getNextMonthDates(
    activeMonth,
    activeYear,
    totalDatesFromPreviousMonthAndThisMonth
  );

  const allDates: DateType[] = [
    ...prevMonthDates,
    ...currentMonthDates,
    ...nextMonthDates,
  ];

  return (
    <>
      {allDates.map((item, index) => (
        <DayItem key={`${index}_${item.date}`} date={item} />
      ))}
    </>
  );
};

export default CalanderBody;
