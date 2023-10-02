import { motion } from "framer-motion"
import { ButtonGetStarted } from "./button-get-started"
import { ButtonGetDemo } from "./button-get-demo"
import { Requirements } from "./requirements"

export function HeroSection()
{
    return(
        <motion.section className="grid grid-cols-2 h-full gap-8">
            <div className="flex flex-col gap-5">
                <p className="font-bold poppins text-sm uppercase">😎  Simple way to communicate</p>
                <h1 className="text-[3.75rem] w-96 poppins leading-[1.6] font-bold">
                    Actions for Accessibility in Design
                </h1>

                <div className="flex flex-col gap-10">
                    <h2 className="text-lg w-[470px] poppins font-semibold text-[#6a738e]">The fastest way to build and deploy websites with resusable components.</h2>

                    <div className="flex items-center gap-9">
                        <ButtonGetStarted/>
                        <ButtonGetDemo/>
                    </div>
                </div>

                <div className="flex gap-5 mt-5">
                    <Requirements>
                        No credit card required
                    </Requirements>
                    <Requirements>
                        No software to install
                    </Requirements>
                </div>
            </div>
            <div className="flex items-center">
                <img src="/hero-image-simple-homepage.png" alt="" />
            </div>
        </motion.section>
    )
}