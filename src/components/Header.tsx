//@ts-ignore
import ReactTypingEffect from 'react-typing-effect';
import {social} from '../constants/index'
import {fadeIn} from "@/utils/motion";
import {motion} from 'framer-motion'
const Header = ()=>{

    return(
        <div className="w-full h-screen static">
            <div className="flex flex-col items-start justify-start lg:p-32  py-16 px-8 w-full h-[50%]">
                <p className="lg:text-[130px] text-[110px] font-black">
                    HE
                </p>
                <p className="lg:text-[130px] text-[110px] font-black mt-[-50px]">
                    LLO<span className="text-[#ed0762]">.</span>
                </p>
            </div>
            <div className="flex flex-col items-end justify-end w-full h-[50%] lg:p-32 pb-24 px-4">
                <ReactTypingEffect
                    text={["I am  Jhonatan Quihuiri"]}
                    displayTextRenderer={(text:string, i:number) => {
                        return (
                            <h1 className="lg:text-[70px] text-[60px] font-black text-right leading-none">
                                {text.split('  ').map((char, i) => {
                                    return (
                                        <>
                                            <p>{(i == 0 ) ? char : ""}</p>
                                            <span className="text-[#ed0762] mt-[-30px]">{(i == 1 ) ? char : ""}</span>
                                        </>
                                    );
                                })}
                            </h1>
                        );
                    }}
                />
            </div>
            <motion.div  variants={fadeIn("right","",0.1,1)} className="absolute right-0 top-[250px] bg-white/[.7] lg:h-[80px] lg:w-[40px] h-[110px] w-[50px] rounded-l-lg flex flex-col justify-around items-center">
                {social.map(({url,icon}, index)=>(
                    <a href={url}><img className="lg:h-[20px] lg:w-[20px] h-[30px] w-[30px]" src={icon}/></a>
                ))}
            </motion.div>
        </div>
    )
}
export default Header;