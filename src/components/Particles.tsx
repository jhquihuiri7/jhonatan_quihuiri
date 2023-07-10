'use client'
import {useEffect, useRef, useState} from 'react';
//@ts-ignore
import HALO from 'vanta/dist/vanta.halo.min';
//@ts-ignore
import * as THREE from 'three';

const ParticlesBackground = () => {
    const [vantaEffect, setVantaEffect] = useState(0);
    const vantaRef = useRef(null)
    useEffect(()=>{
        if (!vantaEffect){
            setVantaEffect(
                HALO({
                    el: vantaRef.current,
                    mouseControls: true,
                    touchControls: true,
                    gyroControls: false,
                    minHeight: 200.00,
                    minWidth: 200.00,
                    scale:1.00,
                    scaleMobile: 1.00,
                    baseColor: 0x31f64,
                    backgroundColor: 0x2b3989,
                    size:0.6,
                    THREE
                })
            )
        }
        return ()=> {
            //@ts-ignore
            if (vantaEffect) vantaEffect.destroy()
        };
    },[vantaEffect])
    return (
        <div id="background" ref={vantaRef} style={{height: 110 + 'vh', width: 99 + 'vw', zIndex: -1}}>

        </div>
    );
}

export default ParticlesBackground