'use client'
//@ts-ignore
import {VerticalTimeline, VerticalTimelineElement} from 'react-vertical-timeline-component';
import  {motion} from 'framer-motion'
import 'react-vertical-timeline-component/style.min.css'
import {experiences} from '@/constants'
import {SectionWrapper} from '../wrapper/index'
import {textVariant} from "@/utils/motion";
import React from "react";


const ExperienceCard = ({experience}:{experience:
{icon:string, date:string, iconBg:string, company_name:string, title:string, points:string[]}})=>(
    <VerticalTimelineElement
        contentStyle={{background:"#1d1836", color:"fff"}}
        contentArrowStyle={{borderRight:"7px solid #232631"}}
        date={experience.date}
        iconStyle={{background:experience.iconBg}}
        icon={
        <div>
            <img
                src={experience.icon}
                alt={experience.company_name}
                className="w-[60&] h-[60%] object-contain"
            />
        </div>
        }
    >
       <div>
           <h3>
               {experience.title}
           </h3>
           <p
            className="text-secondary text-[16px] text-semibold"
           >{experience.company_name}</p>
           <ul className="mt-5 list-disc ml-5 space-y-2">
               {experience.points.map((point, index) =>(
                   <li key={`experiences-point-${index}`} className="text-white-100 text-14 pl-1 tracking-wider">
                       {point}
                   </li>
               ))}
           </ul>
       </div>
    </VerticalTimelineElement>
)
const Experience = () => {
  return (
      <>
          <motion.div variants={textVariant(0.1)} className="sm:px-10 px-5">
              <p className="sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider">
                  WHAT I HAVE DONE SO FAR
              </p>
              <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">
                  WORK EXPERIENCE
              </h2>
          </motion.div>
          <div className="nt-20 flex flex-col">
              <VerticalTimeline>
                  {experiences.map((experience, index) => (
                      <ExperienceCard key={index} experience={experience}/>
                  ))}
              </VerticalTimeline>
          </div>
      </>
  )
}

export default SectionWrapper(Experience,"work")