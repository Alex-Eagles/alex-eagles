import React, { useRef, useEffect } from 'react';
import { Canvas, useThree, useLoader } from '@react-three/fiber';
import * as THREE from 'three';
import { TextureLoader } from 'three';
import '../../styles/ground.css';

import { Environment, ContactShadows, MeshReflectorMaterial, Grid, OrbitControls } from '@react-three/drei'

// Ground component that renders inside its own canvas
function Ground({position}) {
  return(
    
    <mesh position={position} rotation-x={-Math.PI / 2} receiveShadow>
  <planeGeometry args={[1000, 1000]} />
  <MeshReflectorMaterial
    resolution={1024}    // how sharp the reflection is
    blur={[300, 30]}     // blur edge‑softness [width, height]
    mixBlur={30}         // overall blur amount
    mixStrength={1.2}    // reflection strength
    mirror={0.4}         // how “mirror‑like” it is
    depthScale={1}       // exaggerate depth‑based blur
    minDepthThreshold={0.8}
    maxDepthThreshold={1}
    metalness={0.5}
    roughness={1}
    
    color="#4D4F55"      // dark base color
  />
</mesh>
  );
}


export default Ground;