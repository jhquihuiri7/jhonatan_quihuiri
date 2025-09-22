'use client'
//@ts-ignore
import  {motion} from 'framer-motion'
import {experiences} from '@/constants'
import {SectionWrapper} from '../wrapper/index'
import React from "react";
import Tilt from 'react-parallax-tilt';
import {fadeIn, textVariant} from "@/utils/motion";



const ProjectCard = ({index, name, description, tags, image, source_code_link, url, qr}:
{index:any, name:string, description:string,tags:{name:string, color:string}[],image:string, source_code_link:string, url:string, qr:string})=>{
    return (
        <motion.div
            variants={fadeIn("up","spring", index * 0.5, 0.75)}
            >
            <Tilt
                className="p-5 rounded-2xl w-[80%] mx-auto my-5 sm:w-[360px] bg-[#ffffff]/[.2]"
                >
                <div
                    className="relative w-full"
                    >
                    <img src={image} alt={name} className="w-full object-contain rounded-2xl"/>
                    <div
                        className="absolute inset-0 flex justify-end card-img_hover"
                        >
                        <div
                            onClick={() => window.open(source_code_link,"_blank")}
                            className="bg-gradient-to-tr from-[#fc4738] from-0% to-[#ff7831] to-90% w-10 h-10 rounded-full flex justify-center items-center cursor-pointer m-3"
                            >
                            <img
                                src="./projects/github.svg"
                                alt="github"
                                className="w-1/2 h-1/2 object-contain"
                            />
                        </div>
                    </div>
                </div>
                <div className="mt-5 flex flex-row gap-2">
                    <div className="h-auto w-5 bg-[#d0bfff]/[.5] rounded-lg ml-1">
                        <div className="h-2/3 w-5 bg-[#9669f9]/[.5] rounded-lg">
                            <div className="h-1/3 w-5 bg-[#6647d6]/[.5] rounded-lg">
                            </div>
                        </div>
                    </div>
                    <div>
                        <h3 className="text-black font-bold text-[24px]">{name}</h3>
                        <p className="mt-2 text-black text-[14px]"> {description}</p>
                    </div>

                </div>
                <a href={url} target="_blank">
                    <div className="mt-4 flex flex-row justify-center items-center rounded-3xl h-14 bg-white">
                        <div className="w-20 m-0 text-xs text-black">Lauch or Scan</div>
                        <img
                            src={qr}
                            alt="github"
                            className="h-[100%] object-contain"
                        />
                    </div>
                </a>
                <div className="mt-4 flex flex-wrap justify-around gap-2">
                    {tags.map((tag)=>(
                        <p key={tag.name} className={`text-[14px] ${tag.color}`}>#{tag.name}</p>
                        ))}
                </div>
            </Tilt>
        </motion.div>
        )
}
const ExperienceCard = ({experience}:{experience:
{icon:string, date:string, iconBg:string, company_name:string, title:string, project:{
    name: string, description:string, tags:{name:string, color:string}[], image:string, source_code_link:string,
    url:string, qr:string
}}})=>(
    <ProjectCard
        key={`projects-${1}`}
        index={1}
        {...experience.project}

    />
)

const Experience = () => {
    return (
        <>
            <motion.div variants={textVariant(0.1)} className="sm:px-10 px-5">
                <p className="sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider">
                    WHAT I HAVE DONE SO FAR
                </p>
                <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">
                    PROJECTS
                </h2>
            </motion.div>
            <div className='flex flex-wrap flex-col-reverse sm:flex-row-reverse justify-evenly'>
                {experiences.map((experience, index) => (
                    <ExperienceCard key={index} experience={experience}/>
                ))}
            </div>
        </>
    )
}
export default SectionWrapper(Experience,"projects")