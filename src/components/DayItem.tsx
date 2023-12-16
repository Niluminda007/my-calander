import { DateType, MonthDateTypes } from "../types/types";

type DayItemProps = {
  date: DateType;
};

const DayItem: React.FC<DayItemProps> = ({ date }) => {
  const dateStyle =
    date.dateType === MonthDateTypes.CURRENT
      ? "bg-white text-black"
      : date.dateType === MonthDateTypes.PREV
      ? "bg-red-400 text-green-400"
      : "bg-yellow-400 text-red-400";

  return (
    <div
      className={`${dateStyle} flex justify-center items-center border border-[#ebedf0]  shadow-md flex-col`}>
      {date.date}
    </div>
  );
};

export default DayItem;
