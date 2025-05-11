import React, { useRef, useEffect, useState } from 'react';
import { useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { Clone } from '@react-three/drei';
import { CONFIG } from '../../contexts/DroneAnimationContext';

export default function FixedWing({ position, rotation, scale,isMobile }) {
  const modelRef = useRef();
  const [hoveredMesh, setHoveredMesh] = useState(null);


  let path = ""
  if (isMobile) {
    path = CONFIG.mobileFixedWingPath
  }
  else {
    path = CONFIG.fixedwingmodelPath
  }
  // Load the GLTF model
  const gltf = useLoader(GLTFLoader, path);
  console.log('Loaded Fixed Wing Model:', gltf);
  //load animation clips
  useEffect(() => {
    if (gltf && modelRef.current) {
      const animations = gltf.animations;
      console.log('Animations:', animations);
      if (animations && animations.length) {
        console.log('Animations loaded:', animations);
        modelRef.current.animations = animations;
      }
    }
  }, [gltf]);

  // Pointer handlers for hover effects
  const onPointerOver = (e) => {
    e.stopPropagation();
    const mesh = e.object;
    setHoveredMesh(mesh);
    if (mesh.material) {
      mesh.material.emissive.setHex(0x555555); // Highlight effect
    }
  };

  const onPointerOut = (e) => {
    e.stopPropagation();
    const mesh = e.object;
    setHoveredMesh(null);
    if (mesh.material) {
      mesh.material.emissive.setHex(0x000000); // Reset emissive
    }
  };

  // If the model isn't loaded yet, return null
  if (!gltf) return null;

  return (
    <Clone
      ref={modelRef}
      object={gltf.scene}
      position={position || [0, 0, 0]}
      rotation={rotation || [0, 0, 0]}
      scale={scale || [1, 1, 1]}
      castShadow
      receiveShadow
      // onPointerOver={onPointerOver}
      // onPointerOut={onPointerOut}
    />
  );
}