import CalanderBody from "./CalanderBody";
import CalanderFooter from "./CalanderFooter";
import CalanderHead from "./CalanderHead";
import CalanderNavigator from "./CalanderNavigator";
import Header from "./Header";

const Calander = () => {
  return (
    <div className="w-[50%] h-full flex flex-col">
      <Header />
      <CalanderNavigator />
      <div className="w-full h-[60%]  grid grid-cols-7 grid-rows-7 ">
        <CalanderHead />
        <CalanderBody />
      </div>
      <CalanderFooter />
    </div>
  );
};

export default Calander;
