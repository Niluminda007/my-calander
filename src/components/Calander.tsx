import CalanderBody from "./CalanderBody";
import CalanderFooter from "./CalanderFooter";
import CalanderHead from "./CalanderHead";

const Calander = () => {
  return (
    <div className="w-[50%] h-full flex flex-col">
      <div className="w-full h-[60%]  grid grid-cols-7 grid-rows-7 bg-">
        <CalanderHead />
        <CalanderBody />
      </div>
      <CalanderFooter />
    </div>
  );
};

export default Calander;
