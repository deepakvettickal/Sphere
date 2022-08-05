import React, { useRef, useState} from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export default function Rig(children){
    // This reference will give us direct access to the mesh
    const ref = useRef();
    const vec = new THREE.Vector3();
    const { camera, mouse } = useThree(); //this hook doesnt work
    // Rotate mesh every frame, this is outside of React without overhead
    useFrame(() => {
        camera.position.lerp(vec.set(mouse.x * 2, 0, 3.5), 0.05)
        ref.current.position.lerp(vec.set(mouse.x * 1, mouse.y * 0.1, 0), 0.1)
        ref.current.rotation.y = THREE.MathUtils.lerp(ref.current.rotation.y, (-mouse.x * Math.PI) / 20, 0.1)
      }) 
    return <group ref={ref}>{children}</group>
}