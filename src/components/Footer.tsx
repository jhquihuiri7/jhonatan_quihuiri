import {SectionWrapper} from "@/wrapper";
import {color, motion} from "framer-motion";
import {fadeIn} from "@/utils/motion";
import Tilt from "react-parallax-tilt";
import React from "react";
import {social} from "@/constants";


const Footer = () => {
    return(
        <div className="flex flex-col justify-center items-center">
            <Tilt className="xl:w-[910px] w-[90%] bg-white/[.2] flex flex-col justify-center items-center rounded-xl pt-3 mb-10">
                <div className="w-[100%] flex xl:flex-row flex-col xl:justify-around justify-center items-center">
                    <div className="flex flex-row px-10">
                        <h2 className="text-white text-xl font-bold my-3">Thank you for visiting my portfolio!</h2>
                        <img src="/logo.png" alt="logo" className="w-12 h-12 object-contain"></img>
                    </div>
                    <div className="flex flex-row bg-gradient-to-t from-[#031c26] from-0% to-[#08516e] to-90% rounded-xl py-3 my-3">
                        {social.map(({url,icon}, index)=>(

                            <a href={url} target="_blank" key={index}><img className="h-[30px] w-[30px] mx-5 invert-0" src={icon} style={{filter:"invert(1)"}}/></a>
                        ))}
                    </div>
                </div>
                <span className="text-black text-[14px]">Desarrollado por <strong className="text-[#08516e]">Jhonatan Quihuiri</strong></span>
                <Tilt className="xl:w-[880px] w-[93%] mt-3">
                    <motion.div
                        variants={fadeIn("rigth","spring",0.5, 0.75)}
                        className="w-full bg-gradient-to-tr from-[#882afa] from-0% to-[#ffa0d8] to-90% h-[3px] rounded-[20px] shadow-card"
                    >

                    </motion.div>
                </Tilt>
            </Tilt>
        </div>
    )
}
export default SectionWrapper(Footer,"footer")