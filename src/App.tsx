import CalanderLayout from "./components/CalanderLayout";
import Header from "./components/Header";

const App = () => {
  return (
    <div className="h-full w-full flex flex-col bg-[#fff] dark:bg-black">
      <Header />
      <CalanderLayout />
    </div>
  );
};

export default App;
