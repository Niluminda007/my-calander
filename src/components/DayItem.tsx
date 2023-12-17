import { useAppContext } from "../context/AppContext";
import { DateType, MonthDateTypes } from "../types/types";

type DayItemProps = {
  date: DateType;
};

const DayItem: React.FC<DayItemProps> = ({ date }) => {
  const { currentDate } = useAppContext();
  const dateStyle =
    date.dateType === MonthDateTypes.CURRENT
      ? " text-black"
      : date.dateType === MonthDateTypes.PREV
      ? "text-[#ADB5BD]"
      : "text-[#ADB5BD]";

  const currentDateStyle =
    currentDate === date.date ? "bg-[#7209B7] text-white" : "";

  return (
    <div
      className={`${dateStyle} flex justify-center items-center border border-[#ebedf0]  shadow-md flex-col font-semibold ${currentDateStyle}`}>
      {date.date}
    </div>
  );
};

export default DayItem;
