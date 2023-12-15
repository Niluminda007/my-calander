import { DayOfWeekType } from "../types/types";

type DayItemProps = {
  item?: DayOfWeekType;
  dateNumber: number;
  startingDay?: number;
  pos?: number;
};

const DayItem: React.FC<DayItemProps> = ({
  dateNumber,
  item,
  startingDay,
  pos,
}) => {
  let showDay =
    startingDay && pos !== undefined && (startingDay <= pos ? true : false);
  if (pos === undefined) {
    showDay = true;
  }
  console.log();
  console.log(dateNumber + " = " + showDay);
  return (
    <div className="bg-white dark:bg-yellow-400 flex justify-center items-center border border-[#ebedf0] text-black shadow-md flex-col">
      {item && <span>{item.name}</span>}
      <span className={`${showDay ? "opacity-100" : "opacity-0"}`}>
        {dateNumber}
      </span>
    </div>
  );
};

export default DayItem;
