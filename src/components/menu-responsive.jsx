import { useTheme } from "../hooks/useTheme"
import { motion, AnimatePresence } from "framer-motion"
import { ButtonChangeTheme } from "./button-change-theme"
import { CloseIcon } from "./icons"

// eslint-disable-next-line react/prop-types
export function MenuResponsive({toggleMenu})
{
    const {theme, themeClasses, bgClass} = useTheme()

    return(
        <motion.div className={`fixed z-50 bg-gray-800/10 flex justify-end h-screen w-full`} initial={{ opacity: 0}} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <AnimatePresence>
                <motion.div key="modal"
                initial={{ x: 200 }}
                animate={{ x: 0 }}
                exit={{ x: 200 }}
                transition={{ ease: "easeOut", duration: 0.3 }}
                
                className={`w-full p-5 max-w-md ${themeClasses} ${bgClass}`}>
                    <header className="flex justify-end">
                        <button onClick={toggleMenu}>
                            <CloseIcon theme={theme}></CloseIcon>
                        </button>
                    </header>

                    <main className="w-full mt-8">
                    <ul className="flex flex-col poppins text-center text-5xl gap-[74px] md:hidden"> 
                        <li><a href="" className="font-bold">About us</a></li>
                        <li><a href="" className="font-bold text-[#6a738e]">Product</a></li>
                        <li><a href="" className="font-bold text-[#6a738e]">Resource</a></li>
                        <li><a href="" className="font-bold text-[#6a738e]">Contact</a></li>
                        <li className="flex justify-center"><ButtonChangeTheme isResponsive={true} ></ButtonChangeTheme></li>
                    </ul>
                    </main>
                </motion.div>
            </AnimatePresence>
        </motion.div>
    )
}