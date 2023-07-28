import {SectionWrapper} from "@/wrapper";
import {motion} from "framer-motion";
import {fadeIn} from "@/utils/motion";
import Tilt from "react-parallax-tilt";
import React from "react";


const Footer = () => {
    return(
        <Tilt className="xl:w-[910px] w-full h-[50px]">
            <motion.div
                variants={fadeIn("rigth","spring",0.5, 0.75)}
                className="w-full bg-gradient-to-tr from-[#882afa] from-0% to-[#ffa0d8] to-90% p-[1px] rounded-[20px] shadow-card"
            >

            </motion.div>
        </Tilt>
    )
}
export default SectionWrapper(Footer,"footer")