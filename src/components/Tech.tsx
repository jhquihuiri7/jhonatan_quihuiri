'use client'
import React from 'react'
import {SectionWrapper} from "@/wrapper";
import {textVariant} from "@/utils/motion";
import {motion} from "framer-motion";
import {technologies} from '@/constants';

const Tech = () => {
  return (
    <>
    <motion.div variants={textVariant(0.1)} className="sm:px-10 px-5">
      <p className="sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider">
        WHAT DO I USE
      </p>
      <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">
        MY STACK
      </h2>
    </motion.div>
    <div className="flex flex-row flex-wrap justify-center gap-10 py-6">
      {technologies.langages.map((language, index)=>(
          <img key={index} src={language.icon} style={{height: 80 + 'px',width: 80 + 'px'}}/>
      ))}
    </div>
    <div className="flex flex-row flex-wrap justify-center gap-10 py-6">
      {technologies.tools.map((tool, index)=>(
          <img key={index} src={tool.icon} style={{height: 80 + 'px',width: 80 + 'px'}}/>
      ))}
    </div>
      <div className="flex flex-row flex-wrap justify-center gap-10 py-6">
        {technologies.design.map((tool, index)=>(
            <img key={index} src={tool.icon} style={{height: 80 + 'px',width: 80 + 'px'}}/>
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(Tech,"tech")