'use-client'
import React, {Suspense} from 'react';
import {
    OrbitControls, useTexture
}
from '@react-three/drei';
import { Canvas, useLoader} from '@react-three/fiber';

const Ball = ({imgUrl}:{imgUrl:string}) => {
    const [texture] = useTexture([imgUrl])
    return (
        <>
            <ambientLight intensity={0.25}/>
            <directionalLight position={[0,0,0.5]}/>
            <mesh scale={2.75} castShadow receiveShadow>
                <icosahedronGeometry args={[7, 1]}/>
                <meshStandardMaterial
                    polygonOffset
                    polygonOffsetFactor={-20}
                    flatShading

                />
            </mesh>
        </>
    )
}
const BallCanvas = ({icon}:{icon:string})=>{
    return (
        <Canvas
            frameloop="demand"
            shadows
            camera={{position:[70,90,100], fov:25}}
            gl={{preserveDrawingBuffer:true}}
        >
            <Suspense >
                <OrbitControls enableZoom={false}/>
                <Ball imgUrl={icon}></Ball>
            </Suspense>

        </Canvas>
    )
}
export default BallCanvas