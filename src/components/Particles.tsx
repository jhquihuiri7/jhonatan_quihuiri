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
                    backgroundColor: 0x253174,
                    size:0.8,
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
        <div className="flex flex-row">
            <div id="background" ref={vantaRef} style={{height: 110 + 'vh', width: 99 + 'vw', zIndex: -1}}>
            </div>
        </div>

    );
}

export default ParticlesBackground