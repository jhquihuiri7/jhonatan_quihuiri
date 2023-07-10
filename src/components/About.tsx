'use client'
import React, { useCallback } from 'react'
import Tilt from 'react-parallax-tilt'
import {motion} from 'framer-motion'
import {services} from '@/constants/index'
import {fadeIn, textVariant} from '@/utils/motion'
import {SectionWrapper} from '@/wrapper/index'

import Particles from "react-tsparticles";
import { loadFull } from 'tsparticles';
import { polygonPathName, loadPolygonPath } from "tsparticles-path-polygon";
import {Engine} from "tsparticles-engine";

const ServiceCard = ({ service, index }: { service: {icon: string, title: string}; index: number}) => (
    <Tilt className="xs:w-full w-[250px]">
        <motion.div
            variants={fadeIn("rigth","spring",0.5 * index, 0.75)}
            className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
        >
            <div
                className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
            >
                <img
                    src={service.icon}
                    alt={service.title}
                    className="w-16 h-16 object-contain"
                />
                <h3 className="text-white text-[20px]text-bold text-center">
                    {service.title}
                </h3>
            </div>
        </motion.div>
    </Tilt>
)
const About = () => {
    const particlesInit = useCallback(async (engine:Engine) => {
        await loadPolygonPath(engine);
    }, []);

  return (
    <>
        <Particles id="particles"
                   options={{
            autoPlay:true,
            fpsLimit: 120,
            interactivity: {
                events: {
                    onClick: {
                        enable: true,
                        mode: "push",
                    },
                    onHover: {
                        enable: true,
                        mode: "repulse",
                    },
                    resize: true,
                },
                modes: {
                    push: {
                        quantity: 4,
                    },
                    repulse: {
                        distance: 200,
                        duration: 0.4,
                    },
                },
            },
            particles: {
                color: {
                    value: "#FF0000",
                    animation: {
                        enable: true,
                        speed: 10
                    }
                },
                move: {
                    attract: {
                        enable: false,
                        distance: 100,
                        rotate: {
                            x: 2000,
                            y: 2000
                        }
                    },
                    direction: "none",
                    enable: true,
                    outModes: {
                        default: "destroy"
                    },
                    path: {
                        clamp: false,
                        enable: true,
                        delay: {
                            value: 0
                        },
                        generator: polygonPathName,
                        options: {
                            sides: 6,
                            turnSteps: 30,
                            angle: 30
                        }
                    },
                    random: false,
                    speed: 3,
                    straight: false,
                    trail: {
                        fillColor: "#000",
                        length: 20,
                        enable: true
                    }
                },
                number: {
                    density: {
                        enable: true,
                        area: 800
                    },
                    value: 0
                },
                opacity: {
                    value: 1
                },
                shape: {
                    type: "circle"
                },
                size: {
                    value: 2
                }
            },
            fullScreen: {
                zIndex: -1
            },
            emitters: {
                direction: "none",
                rate: {
                    quantity: 1,
                    delay: 0.25
                },
                size: {
                    width: 0,
                    height: 0
                },
                position: {
                    x: 50,
                    y: 50
                }
            },
            detectRetina: true,
        }}
                   init={particlesInit}
        />
      <motion.div variants={textVariant(0.1)} className="sm:px-10 px-5">
        <p className="sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider">Introduction</p>
        <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">Overview</h2>
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
      <div className="mt-20 flex flex-wrap justify-center gap-10 sm:px-10 px-5">
          {services.map((service, index) =>(
              <ServiceCard key={index} service={service} index={index}/>
          ))}
      </div>
    </>
  )
}

export default SectionWrapper(About,"about")