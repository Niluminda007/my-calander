// Import Statements
import {createContext, useContext,  useState} from 'react';
import {AppContextType, ThemeType} from "../types/types";


// Context Creation
const AppContext = createContext<AppContextType>({
    theme:ThemeType.LIGHT_THEME,
    switchTheme: ()=> {}
  });

// AppProvider Component
  
type AppProviderProps = {
    children: React.ReactNode;
};
  
const AppProvider:React.FC<AppProviderProps> = ({children})=>{
    const [theme, setTheme] = useState<ThemeType>(ThemeType.LIGHT_THEME);
    const switchTheme = () => {
        setTheme((prevTheme) => (prevTheme === ThemeType.LIGHT_THEME ? ThemeType.DARK_THEME : ThemeType.LIGHT_THEME));
    };
    return (
        <AppContext.Provider value={{
            theme,
            switchTheme
        }}>
            {children}
        </AppContext.Provider>
    )

}
export default AppProvider;


// Custom Hook for Using AppContext
export const useAppContext = () => {
    return useContext(AppContext);
};