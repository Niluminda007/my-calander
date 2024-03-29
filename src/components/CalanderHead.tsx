import { daysOfWeek } from "../constants/days";
import DayHeaderItem from "./DayHeaderItem";

const CalanderHead = () => {
  return (
    <>
      {daysOfWeek.map((day, index) => (
        <DayHeaderItem key={`${index}_${day.name}`} day={day} />
      ))}
    </>
  );
};

export default CalanderHead;
