import { motion } from "framer-motion"

export function ButtonGetStarted()
{
    return(
        <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className="uppercase poppins  font-semibold bg-[#2A4DD0] text-white py-[14px] px-[40px] rounded-xl">
            Get Started
        </motion.button>
    )
}