'use-client'
import React from 'react';
import {
    Decal, Float, OrbitControls, useTexture
}
from '@react-three/drei';
import { Canvas} from '@react-three/fiber';

//@ts-ignore
const Ball = ({imgUrl}:{imgUrl:string}) => {
    const [decal] = useTexture([imgUrl])
    return (
        //@ts-ignore
        <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
            <mesh scale={2.75}>
                <icosahedronGeometry/>
                <meshStandardMaterial
                    color="#fff8eb"
                    polygonOffset
                    polygonOffsetFactor={-5}
                    flatShading
                />
               
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