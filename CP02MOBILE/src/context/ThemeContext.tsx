import { createContext, useContext, useEffect, useState } from "react";
import { darkTheme, lightTheme } from "./themes";
import AsyncStorage from "@react-native-async-storage/async-storage";

type Theme = "light" | "dark"

type ThemeContextType = {
    theme: Theme;
    currentTheme: typeof lightTheme;
    toggleTheme: () => void;
}

export const ThemeContext = createContext({} as ThemeContextType);

export function ThemeProvider({children} : {children: React.ReactNode}){
    const [theme, setTheme] = useState<Theme>("light");
    
    useEffect(() => {
        async function loadTheme(){
            const storedTheme = await AsyncStorage.getItem("@theme")
       
            if(storedTheme){
                setTheme(JSON.parse(storedTheme))
            }
            
        }

        loadTheme();
    }, [])


    const toggleTheme = () => {
        setTheme((prev) => 
            {const newTheme = prev === "light" ? "dark" : "light";
            AsyncStorage.setItem("@theme", JSON.stringify(newTheme));
            return newTheme;
            });
    }

    const currentTheme = theme === "light" ? lightTheme : darkTheme


    return(
        <ThemeContext.Provider value={{theme, currentTheme, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}

export function useTheme(){
    return useContext(ThemeContext);
}