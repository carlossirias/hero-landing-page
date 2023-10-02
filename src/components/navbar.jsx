import { useTheme } from "../hooks/useTheme"
import { ButtonChangeTheme } from "./button-change-theme"
import { motion, AnimatePresence } from "framer-motion"
import { MenuResponsive } from "./menu-responsive"
import { LogoIcon, MenuIcon } from "./icons"
import { useState } from "react"

export function Navbar()
{
    const {theme, themeClasses} = useTheme()
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const toggleMenu = ()=>{
        setIsMenuOpen(!isMenuOpen)
    }

    return(
        <>
            <nav className={`${themeClasses} w-full px-[30px] md:px-[72px] max-w-7xl flex place-content-between py-7`}>
                <div>
                    <LogoIcon theme={theme} ></LogoIcon>
                </div>
                <ul className="flex gap-10 poppins max-md:hidden"> 
                <li><a href="" className="font-semibold">About us</a></li>
                <li><a href="" className="font-semibold text-[#54627b] dark:">Product</a></li>
                <li><a href="" className="font-semibold text-[#54627b]">Resource</a></li>
                <li><a href="" className="font-semibold text-[#54627b]">Contact</a></li>
                </ul>
                <div className="max-md:hidden">
                    <ButtonChangeTheme></ButtonChangeTheme>
                </div>

                <div className="md:hidden">
                    <motion.button onClick={toggleMenu}>
                        <MenuIcon theme={theme}></MenuIcon>
                    </motion.button>
                </div>

            </nav>

            <AnimatePresence>
            {isMenuOpen &&
                <MenuResponsive toggleMenu={toggleMenu}/>
            }
            </AnimatePresence>
        </>

        
    )
}