// src/components/Scene.js - Contains the 3D environment
import React, { useRef, Suspense, useEffect, useState } from 'react';
import { Color, Vector3, FogExp2 } from 'three';
import { useFrame, useThree } from '@react-three/fiber';
import { OrbitControls, Grid, useScroll } from '@react-three/drei';
import DroneModel from './DroneModel';
import FixedWing from './FixedWing';
import { PerspectiveCamera } from '@react-three/drei';
import { softShadows, ContactShadows } from '@react-three/drei';
import Ground from './Ground';
import gsap from 'gsap';

function Scene({ setPage, setScrollEnabled, scrollEnabled }) {
  const spotlightRef = useRef(); // Ref for the spotlight for the second drone
  const mainLightRef = useRef(); // Ref for the main spotlight
  const ambientLightRef = useRef(); // Ref for ambient light
  const fixedWingSpotlightRef = useRef(); // New ref for fixed wing spotlight
  const [introComplete, setIntroComplete] = useState(false);
  const [fadeIn, setFadeIn] = useState(0); // 0 to 1 for fade-in effect
  
  // Camera positions for intro animation
  const introCamStartPos = new Vector3(10, 15, 25); // Start far away and higher up
  const introCamEndPos = new Vector3(2, 3, 8); // Your original first camera position
  
  // Camera targets for intro animation
  const introCamStartTarget = new Vector3(0, -1.05, 0); // Looking toward the general scene
  const introCamEndTarget = new Vector3(0, -1.05, 2.5); // Your original target (first drone)
  
  const scroll = useScroll();
  const { camera, scene } = useThree();
  
  // Your original camera positions for scroll-based movement
  const camPos1 = new Vector3(2, 3, 8);         // Initial camera pos after intro
  const camTarget1 = new Vector3(0, -1.05, 2.5); // Look at first drone

  const camPos2 = new Vector3(4, 2, -21);         // A vantage for second drone
  const camTarget2 = new Vector3(5, -1.05, -30); // Look at second drone

  // Set scene background to black
  useEffect(() => {
    camera.position.copy(introCamStartPos);
    camera.lookAt(introCamStartTarget);
    
    const introTimer = setTimeout(() => {
      setIntroComplete(true);
    }, 5000);
    
    return () => clearTimeout(introTimer);
  }, [camera, scene]);

  useFrame(({ clock }) => {
    // Handle intro animation
    if (!introComplete) {
      const t = Math.min(clock.getElapsedTime() / 5, 1); // 5 seconds duration
      
      // Smooth easing function (ease-out cubic)
      const easeT = 1 - Math.pow(1 - t, 3);
      
      // Interpolate camera position and target during intro
      camera.position.lerpVectors(introCamStartPos, introCamEndPos, easeT);
      const lookAtPos = introCamStartTarget.clone().lerp(introCamEndTarget, easeT);
      camera.lookAt(lookAtPos);
      
      // Gradually increase light intensities during intro
      if (spotlightRef.current) {
        // Position spotlight target at the first drone initially
        spotlightRef.current.target.position.set(15, 15, -28); 
        spotlightRef.current.target.updateMatrixWorld();
        spotlightRef.current.intensity = t * 0.1; // Very subtle during intro
      }
      
      if (mainLightRef.current) {
        mainLightRef.current.intensity = t * 15;
      }
      
      if (ambientLightRef.current) {
        ambientLightRef.current.intensity = t * 0.3;
      }
      
      // Fixed wing spotlight intro animation
      if (fixedWingSpotlightRef.current) {
        fixedWingSpotlightRef.current.intensity = t * 3; // Gradually increase intensity
        fixedWingSpotlightRef.current.target.position.set(4, -6, -31); // Target the fixed wing
        fixedWingSpotlightRef.current.target.updateMatrixWorld();
      }
    } 
    // Handle scroll-based camera movement after intro is complete
    else if (scrollEnabled) {
      const t = scroll.offset;
      
      // Set the page number based on scroll offset
      const newPage = Math.floor(t * 2); // Assuming you have 2 pages
      setPage(newPage);
      
      // Interpolate camera position and target
      camera.position.lerpVectors(camPos1, camPos2, t);
      const lookAt = camTarget1.clone().lerp(camTarget2, t);
      camera.lookAt(lookAt);
      
      // Adjust fixed wing spotlight intensity based on proximity
      // if (fixedWingSpotlightRef.current) {
      //   // Increase spotlight intensity as we get closer to the fixed wing
      //   const baseIntensity = 5;
      //   const maxIntensity = 12;
      //   fixedWingSpotlightRef.current.intensity = baseIntensity + (maxIntensity - baseIntensity) * t;
      // }

      if (fixedWingSpotlightRef.current) {
        
        // Gradually increase the intensity based on scroll offset
        const currentIntensity = fixedWingSpotlightRef.current.intensity;
        const targetIntensity = 1 + t * 6; // Gradually increase the intensity based on scroll offset
        fixedWingSpotlightRef.current.intensity = currentIntensity + (targetIntensity - currentIntensity) * 0.1; // Smooth transition

        // gradually inc the angle of the spotlight
        const currentAngle = fixedWingSpotlightRef.current.angle;
        const targetAngle = 0.4 + t * 0.1; // Gradually increase the angle based on scroll offset
        fixedWingSpotlightRef.current.angle = currentAngle + (targetAngle - currentAngle) * 0.1; // Smooth transition

        
      }
    }
  });

  // Create a black overlay that fades out
  const handleCameraAnimation = (targetPosition, lookAtPosition) => {
    // Disable ScrollControls
    setScrollEnabled(false);

    // Animate the camera using gsap
    gsap.to(camera.position, {
      x: targetPosition.x,
      y: targetPosition.y,
      z: targetPosition.z - 1.8, // Add a small offset to the z position
      duration: 2,
      ease: 'power2.inOut',
      onUpdate: () => {
        camera.lookAt(lookAtPosition); // Ensure the camera looks at the target
      },
      onComplete: () => {
        // Re-enable ScrollControls after the animation
      },
    });
  };

  return (
    <>
      {/* Main scene lights */}
      {/* <ambientLight ref={ambientLightRef} intensity={0.3} color={0xffffff} /> */}
      
      <spotLight
        ref={mainLightRef}
        position={[17, 25, 8]}
        intensity={0.5} // Base intensity for main light
        distance={100}
        angle={0.3}
        penumbra={0.4}
        castShadow
        shadow-bias={-0.0001}
        shadow-mapSize={[512, 512]}
      />

     
      {/* Dedicated spotlight for fixed wing drone */}
      <spotLight
        ref={fixedWingSpotlightRef}
        position={[5, 19, -25]} // Position above and slightly in front of fixed wing
        intensity={1} // Start with base intensity
        angle={0.4}
        penumbra={0.4}
        distance={100}
        color={0xffffff}
        castShadow
        target-position={[1, -6, -31]} // Target the fixed wing
      />
      
      {/* Add a subtle rim light for the fixed wing to make it stand out */}
      

      {/* The drone models */}
      <DroneModel
        position={[0, -1, 2.5]}
        onClick={(targetPosition, lookAtPosition) =>
          handleCameraAnimation(targetPosition, lookAtPosition)
        }
        setScrollEnabled={setScrollEnabled}
        scrollEnabled={scrollEnabled}
      />
     
      <FixedWing 
        position={[4, -6, -28]} 
        rotation={[0, 210 * (Math.PI / 180), 0]} 
        scale={[5, 5, 5]} 
      />
      
      {/* Ground component */}
      <Ground position={[0, -1, 0]} rotation={[-Math.PI / 2, 0, 0]} />
    </>
  );
}

export default Scene;