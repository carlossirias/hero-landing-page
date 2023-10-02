import { motion } from "framer-motion"
import { SunIcon, MoonIcon } from "./icons"
import { useTheme } from "../hooks/useTheme"


// eslint-disable-next-line react/prop-types
export function ButtonChangeTheme({isResponsive = false})
{
    const {theme, toggleTheme} = useTheme();
    return(
       <motion.button onClick={toggleTheme} className="flex relative p-[4px] rounded-full bg-[#223344] gap-2">
            <motion.span className="relative">
                {theme == 'dark' && <motion.span layoutId={isResponsive ? 'theme-responsive': 'theme'} className="absolute rounded-full z-0 w-5 h-5 left-0 right-0 top-0 bottom-0 bg-white"/>}
                <MoonIcon theme={theme} />
            </motion.span>
            <motion.span className="relative">
                <SunIcon theme={theme}/>
                {theme == 'light' && <motion.span layoutId={isResponsive ? 'theme-responsive': 'theme'}  className="absolute rounded-full z-0 w-5 h-5 left-0 right-0 top-0 bottom-0 bg-white"/>}
            </motion.span>
       </motion.button> 
    )
}