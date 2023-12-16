import { DateType, MonthDateTypes } from "../types/types";
import { endOfMonth, getDaysInMonth, sub } from "date-fns";
import { DAYS_IN_WEEK } from "../constants/days";

export const getCurrentMonthDates = (
  activeMonth: number,
  activeYear: number
): DateType[] => {
  const numberOfDatesInMonth = getDaysInMonth(
    new Date(activeYear, activeMonth)
  );
  return Array.from({ length: numberOfDatesInMonth }).map((_, i) => ({
    date: i + 1,
    dateType: MonthDateTypes.CURRENT,
  }));
};

export const getPrevMonthDates = (
  activeMonth: number,
  activeYear: number
): DateType[] => {
  const prevMonthDates: DateType[] = [];
  const previousMonth = sub(new Date(activeYear, activeMonth), { months: 1 });

  const lastDateOfPreviousMonth: number = endOfMonth(previousMonth).getDate();
  const lastDayOfThePreviousMonth: number = endOfMonth(previousMonth).getDay();
  let startingDateForThePrevDates = lastDateOfPreviousMonth;
  for (let i = lastDayOfThePreviousMonth; i >= 0; i--) {
    prevMonthDates.push({
      date: startingDateForThePrevDates--,
      dateType: MonthDateTypes.PREV,
    });
  }
  return prevMonthDates.sort((a, b) => a.date - b.date);
};

export const getNextMonthDates = (
  activeMonth: number,
  activeYear: number
): DateType[] => {
  const nextMonthDates: DateType[] = [];
  const lastDayOfTheCurrentMonth = endOfMonth(
    new Date(activeYear, activeMonth)
  ).getDay();

  let startingDateForTheNextDates = 1;

  for (let i = lastDayOfTheCurrentMonth; i < DAYS_IN_WEEK; i++) {
    nextMonthDates.push({
      date: startingDateForTheNextDates++,
      dateType: MonthDateTypes.NEXT,
    });
  }
  return nextMonthDates;
};
