import { DateType, MonthDateTypes } from "../types/types";
import DayItem from "./DayItem";
import { getDaysInMonth, sub, endOfMonth } from "date-fns";

// 0 -> sunday
// 1 - > monday
// 2 -> tuesday
// 3 -> wendesday
// 4 -> thursday
// 5 -> friday
// 6 -> saturday

const CalanderBody = () => {
  // Previous Month
  const previousMonth = sub(new Date(), { months: 1 });
  const prevDatesInThelastMonthToShowInTheCurrentMonthInActive: DateType[] =
    getPrevDatesInThelastMonthToShowInTheCurrentMonthInActive(previousMonth);

  //Current Month
  const datesInTheCurrentMonthActive: DateType[] =
    getDatesInTheCurrentMonthActive();

  // Next Month
  const nextDatesInThenextMonthToShowInTheCurrentMonthInActive: DateType[] =
    getNextDatesInTheNextMonthToShowInTheCurrentMonthInActive();

  const allDates: DateType[] = [
    ...prevDatesInThelastMonthToShowInTheCurrentMonthInActive,
    ...datesInTheCurrentMonthActive,
    ...nextDatesInThenextMonthToShowInTheCurrentMonthInActive,
  ];

  return (
    <>
      {allDates.map((date, index) => (
        <DayItem key={`${index}_${date.date}`} date={date} />
      ))}
    </>
  );
};

const getDatesInTheCurrentMonthActive = (): DateType[] => {
  let currentDates: DateType[] = [];

  const numberOfDatesInTheMonth = getDaysInMonth(new Date());

  for (let i = 1; i <= numberOfDatesInTheMonth; i++) {
    currentDates = [
      ...currentDates,
      { date: i, dateType: MonthDateTypes.CURRENT },
    ];
  }

  return currentDates;
};

const getPrevDatesInThelastMonthToShowInTheCurrentMonthInActive = (
  previousMonth: Date
): DateType[] => {
  let prevDates: DateType[] = [];
  const lastDateOfThePreviousMonth: number =
    endOfMonth(previousMonth).getDate();
  const lastDayOfThePreviousMonth: number = endOfMonth(previousMonth).getDay();
  let startingDateForThePrevDates = lastDateOfThePreviousMonth;
  for (let i = lastDayOfThePreviousMonth; i >= 0; i--) {
    prevDates = [
      ...prevDates,
      { date: startingDateForThePrevDates--, dateType: MonthDateTypes.PREV },
    ];
  }
  return prevDates;
};

const getNextDatesInTheNextMonthToShowInTheCurrentMonthInActive =
  (): DateType[] => {
    let nextDates: DateType[] = [];
    const currentDate = new Date();
    const lastDayOfTheCurrentMonth = endOfMonth(currentDate).getDay();

    let startingDateForTheNextDates = 1;

    for (let i = lastDayOfTheCurrentMonth; i < 6; i++) {
      nextDates = [
        ...nextDates,
        { date: startingDateForTheNextDates++, dateType: MonthDateTypes.NEXT },
      ];
    }
    return nextDates;
  };
export default CalanderBody;
