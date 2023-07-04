'use client'
import React from 'react'
import {SectionWrapper} from "@/wrapper";
import {textVariant} from "@/utils/motion";
import {motion} from "framer-motion";
import {technologies} from '@/constants';
import {BallCanvas} from './canvas';

const Tech = () => {
  return (
    <div className="flex flex-row  flex-wrap justify-center gap-10">
      {technologies.map((technology, index)=>(
          <BallCanvas key={index} icon={technology.icon}/>
        ))}
    </div>
  )
}

export default SectionWrapper(Tech,"tech")