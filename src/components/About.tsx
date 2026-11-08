'use client'
import React, { useCallback } from 'react'
import Tilt from 'react-parallax-tilt'
import {motion} from 'framer-motion'
import {services} from '@/constants/index'
import {fadeIn, textVariant} from '@/utils/motion'
import {SectionWrapper} from '@/wrapper/index'

const ServiceCard = ({ service, index }: { service: {icon: string, title: string}; index: number}) => (
    <Tilt className="w-[250px]">
        <motion.div
            variants={fadeIn("rigth","spring",0.5 * index, 0.75)}
            className="w-full bg-gradient-to-tr from-[#882afa] from-0% to-[#ffa0d8] to-90% p-[1px] rounded-[20px] shadow-card h-[170px]"
        >
            <div
                className="bg-tertiary rounded-[20px] py-4 px-10 flex justify-evenly items-center flex-col h-full"
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
          I&apos;m a Backend Developer and Data Scientist with 5+ years of experience building APIs, GIS platforms, and data
          analytics for the public, tourism, and financial sectors. At the Governing Council of Galápagos (CGREG), I build
          and run SIGTAR, the council&apos;s GIS-based territorial information system. I&apos;m also the founder of Logiciel
          AppLab, the company behind Wego, a ride-hailing app live on the App Store and Google Play, and Zero, an AI
          sports-broadcasting system I co-founded that is about to launch. I hold an MSc in Data Science and Machine
          Learning, studied economics in Ecuador and France, won 2nd place at the NASA Space Apps Challenge 2025 in
          San Cristóbal, and work in Spanish, English, and French. Let&apos;s connect!
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