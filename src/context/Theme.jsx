import { createContext, useState } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({Children}) => {
    const [theme, setTheme] = useState("dark"); //byDefault
    
    const toggleTheme = () => {
        const newTheme = theme === "light" ? "dark" : "light";
        setTheme(newTheme);
    }
    
    return (
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            {Children}
        </ThemeContext.Provider>
    );
}

export default ThemeContext
















