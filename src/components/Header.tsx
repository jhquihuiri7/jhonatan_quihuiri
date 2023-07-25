import Lottie from 'lottie-react';
import animationData from '../../public/lotties/animation.json';

const Header = ()=>{
    return(
        <div className="flex items-center justify-end" style={{height: 110 + 'vh', width: 99 + 'vw'}}>
            <div>
                <Lottie
                    className="bg-black"
                    animationData={animationData}
                />
            </div>
        </div>
    )
}
export default Header;