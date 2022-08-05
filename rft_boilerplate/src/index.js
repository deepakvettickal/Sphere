import ReactDOM from 'react-dom';
import React from 'react';
import { Canvas } from '@react-three/fiber';
import './styles.css';
import { Stats } from '@react-three/drei';
import Box from './components/Box';
import Sphere from './components/Sphere';

ReactDOM.render(
    <Canvas colorManagement>
        <Stats />
        <ambientLight />
        <pointLight position={[5, 5, 5]} />
        <pointLight position={[5, -5, -5]} />
        <pointLight position={[5, 5, -5]} />
        {/* {/* <Box position={[-1.2, 0, 0]} /> */}
        {/* <Box position={[1.2, 0, 0]} /> //values passed from here goes into props */}
        <Sphere position={[0, 0, 0]} />
    </Canvas>,
    document.getElementById('root')
);
