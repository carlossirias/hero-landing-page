/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

export const ThemeContext = createContext()

export function ThemeProvider({children})
{
    const [theme, setTheme] = useState('light')

    const toggleTheme = ()=>
    {
        setTheme(prevState => prevState === 'dark' ?  'light': 'dark');
    }

    return(
        <ThemeContext.Provider value=
        {{theme: theme
        ,toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}