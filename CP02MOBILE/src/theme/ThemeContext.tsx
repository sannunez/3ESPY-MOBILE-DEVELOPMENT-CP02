import { createContext, useContext, useState } from "react";
import { darkTheme, lightTheme } from "./themes";

type Theme = "light" | "dark"

type ThemeContextType = {
    theme: Theme;
    currentTheme: typeof lightTheme;
    toggleTheme: () => void;
}

const ThemeContext = createContext({} as ThemeContextType);

export function ThemeProvider({children} : {children: React.ReactNode}){
    const [theme, setTheme] = useState<Theme>("light");

    const toggleTheme = () => {
        setTheme((prev) => (prev === "light" ? "dark" : "light"));
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