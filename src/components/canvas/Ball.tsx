'use-client'
import React from 'react';
import {
    Float, OrbitControls, useTexture, Decal
}
from '@react-three/drei';
import { Canvas} from '@react-three/fiber';

//@ts-ignore
const Ball = ({imgUrl}:{imgUrl:string}) => {
    const [decal] = useTexture([imgUrl])
    return (
        //@ts-ignore
        <Float speed={2.75} rotationIntensity={1} floatIntensity={2}>
            <mesh scale={2.75}>
                <icosahedronGeometry args={[1.1, 20]}/>
                <meshBasicMaterial color={0xff3b4b8b}/>
                <Decal
                    position={[0,0,1]}
                    rotation={[2*Math.PI,0,6.25]}
                    scale={1} // Scale of the decal
                    map={decal}
                    //@ts-ignore
                    polygonOffset
                    polygonOffsetFactor={-5} // The mesh should take precedence over the original
                    >
                </Decal>
            </mesh>
        </Float>
    )
}
const BallCanvas = ({icon}:{icon:string})=>{
    return (
        <Canvas
            frameloop="demand"
            shadows
            camera={{position:[20,3,5], fov:25}}
            gl={{preserveDrawingBuffer:true}}
        >
            <OrbitControls enableZoom={false}/>
            <Ball imgUrl={icon}></Ball>
        </Canvas>
    )
}
export default BallCanvas