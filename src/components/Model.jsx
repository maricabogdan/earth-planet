import React, {useRef} from 'react'
import { useFrame, useLoader } from '@react-three/fiber'
import {OrbitControls, Stars,} from '@react-three/drei'
import * as THREE from 'three'
import EarthDayMap from '../assets/textures/8k_earth_daymap.jpg'
import EarthNormalMap from '../assets/textures/8k_earth_normal_map.jpg'
import EarthSpecularMap from '../assets/textures/8k_earth_specular_map.jpg'
import EarthCloudsMap from '../assets/textures/8k_earth_clouds.jpg'
import EarthNightMap from '../assets/textures/8k_earth_nightmap.jpg'
import { TextureLoader } from 'three'



export function Earth(props) {

    const [colorMap, normalMap, specularMap,  cloudsMap, nightMap] = useLoader(TextureLoader, [EarthDayMap, EarthNormalMap, EarthSpecularMap, EarthCloudsMap, EarthNightMap])

    const earthRef = useRef();
    const cloudsRef = useRef();

    

    useFrame(({clock}) => {
        const elapsedTime = clock.getElapsedTime();
        earthRef.current.rotation.y =   elapsedTime / 50;
        cloudsRef.current.rotation.y = elapsedTime / 70;
    })




    return (
    <>
        <ambientLight intensity={1}  />
        {/* <pointLight  position={[1, 0, 5]} intensity={0.5} /> */}
        <Stars  radius={300} depth={50} count={20000} factor={6} saturation={0} fade={true}/>
        
     
        
        <mesh ref={cloudsRef} scale={3} position={[0,-2,1]}>
            <sphereGeometry args={[1.005,32,32]} />
            <meshPhongMaterial map={cloudsMap} opacity={0.5} depthWrite={true} transparent={true} side={THREE.DoubleSide} />
        </mesh>
        <mesh ref={earthRef} scale={3} position={[0,-2,1]}>
           <sphereGeometry args={[1, 32, 32]} />
           <meshPhongMaterial specularMap={specularMap} />
           <meshStandardMaterial map={colorMap} normalMap={normalMap} metalness={0.4} roughness={0.7} />
           <OrbitControls enableZoom={false} enablePan={true} enableRotate={true} panSpeed={0.5} rotateSpeed={0.3} />
        </mesh> 
        
    </>
    );
}
