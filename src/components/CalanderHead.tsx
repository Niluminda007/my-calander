import { daysOfWeek } from "../constants/days";
import DayItem from "./DayItem";
import { getDaysInMonth, startOfMonth, getDay } from "date-fns";

const CalanderHead = () => {
  const currentDate = new Date();

  const firstDayOfMonth = startOfMonth(currentDate);
  const startingDay = getDay(firstDayOfMonth);
  const daysInMonth: number = getDaysInMonth(
    new Date(currentDate.getFullYear(), currentDate.getMonth())
  );
  let dayNumber = -1;
  const daysBefore = startingDay;

  const remainingDays = daysInMonth - (7 - startingDay);
  const remainingStartingDay = daysInMonth - remainingDays + 1;
  let remainingDayCounter = remainingStartingDay;

  const allDays = Array<number>(remainingDays)
    .fill(0)
    .map((_, index) => remainingDayCounter++);
  return (
    <div className="w-[80%] grid grid-cols-7 grid-rows-1 ">
      {daysOfWeek.map((item, index) => {
        if (startingDay <= index + 1) {
          dayNumber++;
        }

        return (
          <DayItem
            key={`#${index}-${item.name}`}
            item={item}
            pos={index + 1}
            dateNumber={dayNumber}
            startingDay={startingDay + 1}
          />
        );
      })}

      {allDays.map((item, index) => {
        return (
          <DayItem
            key={`#${index}-`}
            dateNumber={item}
            startingDay={startingDay + 1}
          />
        );
      })}
    </div>
  );
};

export default CalanderHead;
