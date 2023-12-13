import Header from "./components/Header";
import { useAppContext } from "./context/AppContext";


const App = () => {
  const { theme } = useAppContext();
  console.log(theme);

  return (
    <div className={`h-full w-full flex flex-col bg-white dark:bg-black`}>
      <Header />
      <div className={`h-64 w-64 bg-red-400 dark:bg-yellow-600`}></div>
    </div>
  );
}

export default App;