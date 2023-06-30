'use client'
import React from 'react'
import { motion } from "framer-motion";
import Computers from './canvas/Computers';
const Hero = () => {
    return (
        <section className="relative w-full h-screen mx-auto">
            <div className={`px-6 sm:px-16 absolute inset-0 top-[120px] max-2-7xl mx-auto flex flex-row items-start gap-5`}>
                <div className="flex flex-col justify-center items-center mt-5">
                    <div className="w-5 h-5 rounded-full bg-[#915eff]"></div>
                    <div className="w-1 sm:h-80 h-40 violet-gradient"></div>
                </div>
                <div>
                    <h1 className={`font-black text-white lg:text-[80px] sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-[98px] mt-2 text-white`}>Hi, I am &nbsp;
                        <span className="text-[#915eff]">Jhonatan</span>
                    </h1>
                    <p className={`text-[#dfd9ff] font-medium lg:text-[30px] sm:text-[26px] xs:text-[20px] text-[16px] lg:leading-[40px] mt-2 text-white-100`}>
                        I am a backend developer
                    </p>
                </div>
            </div>
            <Computers></Computers>
            <div className="absolute sm:bottom-30 bottom-0.5 w-full flex justify-center items-center">
                <a href="#about">
                    <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
                        <motion.div
                            animate={{
                                y:[0,24,0]
                            }}
                            transition={{
                                duration:1.5,
                                repeat:Infinity,
                                repeatType:"loop"
                            }}
                            className='w-3 h-3 rounded-full bg-white mb-1'
                        />
                    </div>
                </a>
            </div>
        </section>
    )
}

export default Hero