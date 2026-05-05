import { createContext, useContext, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const lightTheme = {
    background: "#ffffff",
    text: "#000000",
    border: "#e0e0e0",
    primary: "#007bff",
    card: "#f9f9f9",
};

export const darkTheme = {
    background: "#202020",
    text: "#ffffff",
    border: "#333333",
    primary: "#4da6ff",
    card: "#1a1a1a",
};

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