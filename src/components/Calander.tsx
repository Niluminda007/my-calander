import CalanderBody from "./CalanderBody";
import CalanderHead from "./CalanderHead";

const Calander = () => {
  return (
    <div className="w-full h-full  grid grid-cols-7 grid-rows-7 ">
      <CalanderHead />
      <CalanderBody />
    </div>
  );
};

export default Calander;
