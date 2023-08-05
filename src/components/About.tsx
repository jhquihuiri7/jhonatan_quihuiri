'use client'
import React, { useCallback } from 'react'
import Tilt from 'react-parallax-tilt'
import {motion} from 'framer-motion'
import {services} from '@/constants/index'
import {fadeIn, textVariant} from '@/utils/motion'
import {SectionWrapper} from '@/wrapper/index'

const ServiceCard = ({ service, index }: { service: {icon: string, title: string}; index: number}) => (
    <Tilt>
        <motion.div
            variants={fadeIn("rigth","spring",0.5 * index, 0.75)}
            className="w-full bg-gradient-to-tr from-[#882afa] from-0% to-[#ffa0d8] to-90% p-[1px] rounded-[20px] shadow-card"
        >
            <div
                className="bg-tertiary rounded-[20px] py-4 px-10 flex justify-evenly items-center flex-col"
            >
                <img
                    src={service.icon}
                    alt={service.title}
                    className="w-20 h-20 object-contain"
                />
                <h3 className="text-white text-lg text-bold text-center">
                    {service.title}
                </h3>
            </div>
        </motion.div>
    </Tilt>
)
const About = () => {
  return (
    <>
      <motion.div variants={textVariant(0.1)} className="sm:px-10 px-5">
        <p className="sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider">Introduction</p>
        <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">Overview</h2>
      </motion.div>
      <motion.p
          variants={fadeIn("","",0.1,1)}
          className="mt-4 text-secondary text-[17px] max-w-3l leadeing-[30px] sm:px-10 px-5"
      >
          Welcome to my developer portfolio! I am a passionate and dedicated professional with expertise in backend
          development, mobile app development, and data analysis. The world of finance, trading, programming, and data
          fuels my curiosity and drives me to excel in my academic and professional responsibilities. I invite you to
          explore my portfolio to witness my problem-solving abilities and the impact I have made across various domains.
          Let's connect and discuss!
      </motion.p>
      <div className="mt-20 flex flex-wrap justify-center gap-10 sm:px-10 px-5">
          {services.map((service, index) =>(
              <ServiceCard key={index} service={service} index={index}/>
          ))}
      </div>
    </>
  )
}

export default SectionWrapper(About,"about")