import Calander from "./Calander";
import CustomSideBar from "./CustomSideBar";

const CalanderLayout = () => {
  return (
    <div className="flex w-full h-full  bg-[#fff] dark:bg-black">
      <CustomSideBar />
      <Calander />
    </div>
  );
};

export default CalanderLayout;
