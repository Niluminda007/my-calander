import { daysOfWeek } from "../constants/days";
import DayHeaderItem from "./DayHeaderItem";

const DaysHeader = () => {
  return (
    <div>
      {daysOfWeek.map((day, index) => (
        <DayHeaderItem key={`${index}_${day.name}`} day={day} />
      ))}
    </div>
  );
};

export default DaysHeader;
