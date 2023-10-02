import { useContext } from "react";
import { ThemeContext } from "../context/Theme";

export function useTheme()
{
    const {theme, toggleTheme} = useContext(ThemeContext)

    const themeClasses = 'bg-[#F2F9FE] text-[#223344] dark:bg-[#111729] dark:text-[#FFFFFF]'
    const bgClass = theme === 'dark' ? 'bg-[#111729]' : 'bg-[#F2F9FE]'

    return {theme, toggleTheme, themeClasses, bgClass}
}