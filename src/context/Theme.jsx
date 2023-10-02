/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

export const ThemeContext = createContext()

export function ThemeProvider({children})
{
    const themeInitialState = JSON.parse(window.localStorage.getItem('theme'))
    const [theme, setTheme] = useState(themeInitialState || 'light')

    const toggleTheme = ()=>
    {
        window.localStorage.setItem('theme', JSON.stringify(theme === 'dark' ?  'light': 'dark'))
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