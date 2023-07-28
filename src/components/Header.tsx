import Lottie from 'lottie-react';
import animationData from '../../public/lotties/animation.json';
//@ts-ignore
import ReactTypingEffect from 'react-typing-effect';
const Header = ()=>{

    return(
        <div className="w-full h-screen static">
            <div className="flex flex-col items-start justify-start lg:p-32  py-16 px-8 w-full h-[50%]">
                <h1 className="lg:text-[160px] text-[110px] font-black">
                    HE<br/>LLO<span className="text-[#ed0762]">.</span>
                </h1>
            </div>
            <div className="flex flex-col items-end justify-end w-full h-[50%] lg:p-32 pb-16 px-8">
                <ReactTypingEffect
                    text={["I am  Jhonatan Quihuiri"]}
                    displayTextRenderer={(text:string, i:number) => {
                        return (
                            <h1 className="text-[70px] font-black text-right leading-none">
                                {text.split('  ').map((char, i) => {
                                    return (
                                        <>
                                            <span>{(i == 0 ) ? char : ""}</span>
                                            <span className="text-[#ed0762]"><br className="my-0"/>{(i == 1 ) ? char : ""}</span>
                                        </>
                                    );
                                })}
                            </h1>
                        );
                    }}
                />
            </div>
            <div className="absolute right-0 top-[250px]">
                <h1 className="text-white text-[110px]">HOLA</h1>
            </div>
        </div>
    )
}
export default Header;