'use client'
import React from 'react'
import {fadeIn, textVariant} from "@/utils/motion";
import {motion} from "framer-motion";
import {projects} from '@/constants'
import Tilt from 'react-parallax-tilt'


const ProjectCard = ({index, name, description, tags, image, source_code_link}:
{index:any, name:string, description:string,tags:{name:string, color:string}[],image:string, source_code_link:string})=>{
  return (
      <motion.div
        variants={fadeIn("up","spring", index * 0.5, 0.75)}
      >
        <Tilt
          className="bg-white p-5 rounded-2xl sm:w-[360px] w-full"
        >
          <div
            className="relative w-full h-[230px]"
          >
            <img src={image} alt={name} className="w-full h-full object-cover rounded-2xl"/>
            <div
              className="absolute inset-0 flex justify-end m-3 card-img_hover"
            >
              <div
                onClick={() => window.open(source_code_link,"_blank")}
                className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
              >
                <img
                  src={image}
                  alt="github"
                  className="w-1/2 h-1/2 object-contain"
                />
              </div>
            </div>
          </div>
          <div className="mt-5">
            <h3 className="text-black font-bold text-[24px]">{name}</h3>
            <p className="mt-2 text-black text-[14px]"> {description}</p>
          </div>
          <div className="mt-4 flex flex-wrap gap-2">
            {tags.map((tag)=>(
                <p key={tag.name} className={`text-[14px] ${tag.color}`}>#{tag.name}</p>
            ))}
          </div>
        </Tilt>
      </motion.div>
  )
}
const Works = () => {
  return (
    <>
      <motion.div variants={textVariant(0.1)} className="sm:px-10 px-5">
        <p className="sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider">
          MY WORK
        </p>
        <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">
          PROJECTS
        </h2>
      </motion.div>
      <motion.p
          variants={fadeIn("","",0.1,1)}
          className="mt-4 text-secondary text-[17px] max-w-3l leadeing-[30px] sm:px-10 px-5"
      >
        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,
        when an unknown printer took a galley of type and scrambled it to make a type
        specimen book. It has survived not only five centuries, but also the leap into
        electronic typesetting, remaining essentially unchanged. It was popularised in
        the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
        and more recently with desktop publishing software like Aldus PageMaker including
        versions of Lorem Ipsum.
      </motion.p>
      <div
        className="mt-20 flex flex-wrap gap-7"
      >
        {projects.map((project, index) => (
            <ProjectCard
              key={`projects-${index}`}
              index={index}
              {...project}
            />
        ))}
      </div>
    </>
  )
}

export default Works