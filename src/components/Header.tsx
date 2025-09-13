//@ts-ignore
import ReactTypingEffect from 'react-typing-effect';
import {social} from '../constants/index'
import {fadeIn} from "@/utils/motion";
import {motion} from 'framer-motion'
import React from 'react';
const Header = ()=>{

    return(
        <div className="w-full h-screen static text-white">
            <div className="flex flex-col items-start justify-start lg:p-32  py-16 px-8 w-full h-[45%]">
                <p className="lg:text-[130px] text-[110px] font-black">
                    HE
                </p>
                <p className="lg:text-[130px] text-[110px] font-black mt-[-50px]">
                    LLO<span className="text-[#ed0762]">.</span>
                </p>
            </div>
            <div className="flex flex-col items-end justify-end w-full h-[32%] lg:px-32 px-4">
                <ReactTypingEffect
                    text={["I am  Jhonatan Quihuiri"]}
                    displayTextRenderer={(text:string) => {
                        return (
                            <h1 className="lg:text-[70px] text-[60px] font-black text-right leading-none">
                                {text.split('  ').map((char, index) => {
                                    return (
                                        <React.Fragment key={index}>
                                            {index === 0 && <p key={`p-${index}`}>{char}</p>}
                                            {index === 1 && <span key={`span-${index}`} className="text-[#ed0762] mt-[-30px]">{char}</span>}
                                        </React.Fragment>
                                    );
                                })}
                            </h1>
                        );
                    }}
                />
            </div>
            <div className="flex flex-col items-center justify-center w-full h-[80px]">
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
            <motion.div  variants={fadeIn("right","",0.1,1)} className="absolute right-0 top-[250px] bg-white/[.7] h-[110px] w-[50px] rounded-l-lg flex flex-col justify-around items-center">
                {social.map(({url,icon}, index)=>(
                    <a href={url} key={`social-${index}`}><img className="h-[30px] w-[30px]" src={icon}/></a>
                ))}
            </motion.div>
        </div>
    )
}
export default Header;