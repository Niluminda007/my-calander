import { DayOfWeekType } from "../types/types";

type DayHeaderItem = {
  day: DayOfWeekType;
};

const DayHeaderItem: React.FC<DayHeaderItem> = ({ day }) => {
  return (
    <div className="bg-white dark:bg-yellow-400 flex justify-center items-center border border-[#ebedf0] text-black shadow-md flex-col">
      {day.name}
    </div>
  );
};

export default DayHeaderItem;
