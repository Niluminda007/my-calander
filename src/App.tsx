import Header from "./components/Header"
import { useAppContext } from "./context/AppContext"
import { ThemeType } from "./types/types";


const App = () => {
  const {theme} = useAppContext();
  console.log(theme);
  return (
  
      <div className={`${theme === ThemeType.LIGHT_THEME ? "bg-white" : "bg-black"}  h-full w-full flex flex-col`}>
      <Header />
      </div>

    
  )
}

export default App