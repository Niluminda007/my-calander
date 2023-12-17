import { DayOfWeekType } from "../types/types";

type DayHeaderItem = {
  day: DayOfWeekType;
};

const DayHeaderItem: React.FC<DayHeaderItem> = ({ day }) => {
  return (
    <div className="flex justify-center items-center text-black flex-col font-semibold">
      {day.name}
    </div>
  );
};

export default DayHeaderItem;
