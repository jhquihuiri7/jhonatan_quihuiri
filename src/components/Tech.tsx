'use client'
import React from 'react'
import {SectionWrapper} from "@/wrapper";
import {textVariant} from "@/utils/motion";
import {motion} from "framer-motion";
import {technologies} from '@/constants';
import {BallCanvas} from './canvas';

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
    <div className="flex flex-row justify-center gap-10 py-6">
      {technologies.langages.map((language)=>(
          <img src={language.icon} style={{height: 100 + 'px',width: 100 + 'px'}}/>
      ))}
    </div>
    <div className="flex flex-row justify-center gap-10 py-6">
      {technologies.tools.map((tool)=>(
          <img src={tool.icon} style={{height: 100 + 'px',width: 100 + 'px'}}/>
      ))}
    </div>
      <div className="flex flex-row justify-center gap-10 py-6">
        {technologies.design.map((tool)=>(
            <img src={tool.icon} style={{height: 100 + 'px',width: 100 + 'px'}}/>
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(Tech,"tech")