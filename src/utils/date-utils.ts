import { DateType, MonthDateTypes } from "../types/types";
import { endOfMonth, getDaysInMonth, sub, startOfMonth } from "date-fns";
import { DAYS_IN_WEEK } from "../constants/days";
const START_OF_WEEK = 0;
const TOTAL_DATES_DISPLAYED_IN_GRID = 42;

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
  const currentMonthStartDate = startOfMonth(
    new Date(activeYear, activeMonth)
  ).getDay();
  if (currentMonthStartDate === START_OF_WEEK) return [];

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
  activeYear: number,
  totalDatesFromPreviousMonthAndThisMonth: number
): DateType[] => {
  const nextMonthDates: DateType[] = [];
  const lastDayOfTheCurrentMonth = endOfMonth(
    new Date(activeYear, activeMonth)
  ).getDay();

  let startingDateForTheNextDates = 1;
  // Calculate the upper bound for next month's dates
  const doubleWeekPlusOne = 2 * DAYS_IN_WEEK + 1;
  const upperBoundForNextMonthDates =
    totalDatesFromPreviousMonthAndThisMonth + DAYS_IN_WEEK <
    TOTAL_DATES_DISPLAYED_IN_GRID
      ? doubleWeekPlusOne
      : DAYS_IN_WEEK;

  for (let i = lastDayOfTheCurrentMonth; i < upperBoundForNextMonthDates; i++) {
    nextMonthDates.push({
      date: startingDateForTheNextDates++,
      dateType: MonthDateTypes.NEXT,
    });
  }
  return nextMonthDates;
};
