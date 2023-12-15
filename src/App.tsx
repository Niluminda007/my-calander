import Calander from "./components/Calander";
import Header from "./components/Header";

const App = () => {
  return (
    <div className={`h-full w-full flex flex-col bg-[#fff] dark:bg-black`}>
      <Header />
      <Calander />
    </div>
  );
};

export default App;
