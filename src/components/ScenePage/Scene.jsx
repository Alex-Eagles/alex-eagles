// src/components/ScenePage/Scene.js
import React, { useRef, Suspense, useEffect, useState } from 'react';
import { Color, Vector3, FogExp2 } from 'three';
import { useFrame, useThree } from '@react-three/fiber';
import { OrbitControls, Grid, useScroll, SpotLight, useDepthBuffer } from '@react-three/drei';
import DroneModel from './DroneModel';
import FixedWing from './FixedWing';
import TestDrone from './TestDrone';
import { PerspectiveCamera } from '@react-three/drei';

import Ground from './Ground';
import gsap from 'gsap';

// Custom MovingSpot component similar to the example
function MovingDroneSpot({ vec = new Vector3(), ...props }) {
  const light = useRef();
  
  useFrame(() => {
    if (light.current && light.current.target) {
      // Static target position instead of mouse-based
      light.current.target.position.lerp(vec, 0.1);
      light.current.target.updateMatrixWorld();
    }
  });
  
  return <SpotLight castShadow ref={light} penumbra={1} distance={10} angle={0.35} attenuation={5} anglePower={4} intensity={2} {...props} />;
}

function Scene({ setPage, setScrollEnabled, scrollEnabled }) {
 
  // testing vercel

  const spotlightRef = useRef();
  const mainLightRef = useRef();
  const ambientLightRef = useRef();
  const fixedWingSpotlightRef = useRef();
  const testDroneSpotlightRef = useRef(); 
  const [introComplete, setIntroComplete] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const { camera, size } = useThree();
  
  // Create depth buffer for the spotlights
  const depthBuffer = useDepthBuffer({ frames: 1 });
  
  const scroll = useScroll();

  const isMobile = size.width < 768;
  const baseDiagonal = Math.sqrt(1920 ** 2 + 1080 ** 2);
  const screenDiagonal = Math.sqrt(size.width ** 2 + size.height ** 2);
  const diagonalScale = screenDiagonal / baseDiagonal;
  const fovScale = 1 / Math.tan((camera.fov * Math.PI) / 360);
  const mobileZoomOutFactor = isMobile ? 3.5 : 1; // Zoom out more on mobile
  const combinedScale = diagonalScale * fovScale * mobileZoomOutFactor;
  
  const yOffset = -0.3 * combinedScale;

  const introCamStartPos = new Vector3(10 * combinedScale, (15 + yOffset) * combinedScale, 25 * combinedScale);
  const introCamEndPos = new Vector3(2 * combinedScale, (3 + yOffset) * combinedScale, 8 * combinedScale);
  const introCamStartTarget = new Vector3(0, (-1.05 + yOffset) * combinedScale, 0);
  const introCamEndTarget = new Vector3(0, (-1.05 + yOffset) * combinedScale, 2.5 * combinedScale);
  
  // camera for the the first drone (Itay)
  const camPos1 = new Vector3(2 * combinedScale, (3 + yOffset) * combinedScale, 8 * combinedScale);
  const camTarget1 = new Vector3(0, (-1.05 + yOffset) * combinedScale, 2.5 * combinedScale);
  // camera for the second drone (fixed wing)
  const camPos2 = new Vector3(4 * combinedScale, (2 + yOffset) * combinedScale, -21 * combinedScale);
  const camTarget2 = new Vector3(5 * combinedScale, (-1.05 + yOffset) * combinedScale, -30 * combinedScale);

  // camera for the third drone (fixed wing)
  const camPos3 = new Vector3(6 * combinedScale, (3 + yOffset) * combinedScale, -51 * combinedScale);
  const camTarget3 = new Vector3(5 * combinedScale, (-4.05 + yOffset) * combinedScale, -61 * combinedScale);
  
  // Define spotlight target vectors
  const droneSpotTargetVec = new Vector3(0, -1 * combinedScale, 2.5 * combinedScale);
  const fixedWingSpotTargetVec = new Vector3(4 * combinedScale, -6 * combinedScale, -31 * combinedScale);
  const testDroneSpotTargetVec = new Vector3(5 * combinedScale, -6 * combinedScale, -60 * combinedScale);
  
  useEffect(() => {
    camera.position.copy(introCamStartPos);
    camera.lookAt(introCamStartTarget);
    const introTimer = setTimeout(() => setIntroComplete(true), 5000);
    return () => clearTimeout(introTimer);
  }, [camera]);

  useFrame(({ clock }) => {
    
    if (!introComplete) {
      const t = Math.min(clock.getElapsedTime() / 5, 1);
      const easeT = 1 - Math.pow(1 - t, 3);

      camera.position.lerpVectors(introCamStartPos, introCamEndPos, easeT);
      const lookAtPos = introCamStartTarget.clone().lerp(introCamEndTarget, easeT);
      camera.lookAt(lookAtPos);

      if (spotlightRef.current) {
        spotlightRef.current.target.position.set(15 * combinedScale, 15 * combinedScale, -28 * combinedScale);
        spotlightRef.current.target.updateMatrixWorld();
        spotlightRef.current.intensity = t * 0.1;
      }

      if (mainLightRef.current) mainLightRef.current.intensity = t * 15;
      if (ambientLightRef.current) ambientLightRef.current.intensity = t * 0.3;

      if (fixedWingSpotlightRef.current) {
        fixedWingSpotlightRef.current.intensity = t * 3;
        fixedWingSpotlightRef.current.target.position.set(4 * combinedScale, -6 * combinedScale, -31 * combinedScale);
        fixedWingSpotlightRef.current.target.updateMatrixWorld();
      }
      // Initialize TestDrone spotlight
      if (testDroneSpotlightRef.current) {
        testDroneSpotlightRef.current.intensity = t * 0.5; // Start with dim light
        testDroneSpotlightRef.current.target.position.set(5 * combinedScale, -6 * combinedScale, -60 * combinedScale);
        testDroneSpotlightRef.current.target.updateMatrixWorld();
      }
    } else if (scrollEnabled) {
      const t = scroll.offset;
      const newPage = Math.floor(t * 3);
      setPage(newPage);

      // camera.position.lerpVectors(camPos1, camPos2, t);
      // const lookAt = camTarget1.clone().lerp(camTarget2, t);
      // camera.lookAt(lookAt);

      // if (fixedWingSpotlightRef.current) {
      //   const currentIntensity = fixedWingSpotlightRef.current.intensity;
      //   const targetIntensity = 1 + t * 6;
      //   fixedWingSpotlightRef.current.intensity = currentIntensity + (targetIntensity - currentIntensity) * 0.1;

      //   const currentAngle = fixedWingSpotlightRef.current.angle;
      //   const targetAngle = 0.4 + t * 0.1;
      //   fixedWingSpotlightRef.current.angle = currentAngle + (targetAngle - currentAngle) * 0.1;
      // }
        // Handle camera positions for three models
      if (t < 0.5) {
        // First half of scrolling: DroneModel to FixedWing
        const segmentT = t * 2; // Normalize 0-0.5 to 0-1
        camera.position.lerpVectors(camPos1, camPos2, segmentT);
        const lookAt = camTarget1.clone().lerp(camTarget2, segmentT);
        camera.lookAt(lookAt);

        // Handle FixedWing spotlight intensity
        if (fixedWingSpotlightRef.current) {
          const currentIntensity = fixedWingSpotlightRef.current.intensity;
          const targetIntensity = 1 + segmentT * 6;
          fixedWingSpotlightRef.current.intensity = currentIntensity + (targetIntensity - currentIntensity) * 0.1;

          const currentAngle = fixedWingSpotlightRef.current.angle;
          const targetAngle = 0.4 + segmentT * 0.1;
          fixedWingSpotlightRef.current.angle = currentAngle + (targetAngle - currentAngle) * 0.1;
        }
        
        // Keep TestDrone spotlight dim during first half
        if (testDroneSpotlightRef.current) {
          const currentIntensity = testDroneSpotlightRef.current.intensity;
          testDroneSpotlightRef.current.intensity = currentIntensity + (0.5 - currentIntensity) * 0.1;
        }
      } else {
        // Second half of scrolling: FixedWing to TestDrone
        const segmentT = (t - 0.5) * 2; // Normalize 0.5-1 to 0-1
        camera.position.lerpVectors(camPos2, camPos3, segmentT);
        const lookAt = camTarget2.clone().lerp(camTarget3, segmentT);
        camera.lookAt(lookAt);

        // Gradually increase TestDrone spotlight intensity as we approach
        if (testDroneSpotlightRef.current) {
          const currentIntensity = testDroneSpotlightRef.current.intensity;
          const targetIntensity = 0.5 + segmentT * 6; // Increase as we approach
          testDroneSpotlightRef.current.intensity = currentIntensity + (targetIntensity - currentIntensity) * 0.1;
          
          const currentAngle = testDroneSpotlightRef.current.angle;
          const targetAngle = 0.4 + segmentT * 0.2;
          testDroneSpotlightRef.current.angle = currentAngle + (targetAngle - currentAngle) * 0.1;
        }
      }
    }
  });

  const handleCameraAnimation = (targetPosition, lookAtPosition) => {
    // Only use transition for mobile
    if (isMobile) {
      // Start transition before camera movement
      setIsTransitioning(true);
      
      // Short delay to ensure transition overlay appears before any potential freezing
      setTimeout(() => {
        setScrollEnabled(false);
        gsap.to(camera.position, {
          x: targetPosition.x,
          y: targetPosition.y,
          z: targetPosition.z - 1.8 * combinedScale,
          duration: 1.2, // Faster for mobile
          ease: 'power2.inOut',
          onUpdate: () => camera.lookAt(lookAtPosition),
          onComplete: () => {
            // End transition after animation completes
            setTimeout(() => {
              setIsTransitioning(false);
            }, 300); // Small delay to ensure model is fully rendered
          }
        });
      }, 100);
    } else {
      // Direct animation without transition for desktop
      setScrollEnabled(false);
      gsap.to(camera.position, {
        x: targetPosition.x,
        y: targetPosition.y,
        z: targetPosition.z - 1.8 * combinedScale,
        duration: 2,
        ease: 'power2.inOut',
        onUpdate: () => camera.lookAt(lookAtPosition)
      });
    }
  };

  // Function to handle transitions when returning to main view
  const handleReturnToMain = () => {
    // Only use transition for mobile
    if (isMobile) {
      setIsTransitioning(true);
      
      setTimeout(() => {
        setScrollEnabled(true);
        // Add any return animation logic here if needed
        
        setTimeout(() => {
          setIsTransitioning(false);
        }, 300);
      }, 100);
    } else {
      // Direct return without transition for desktop
      setScrollEnabled(true);
    }
  };

  return (
    <>
      <ambientLight intensity={0.3} ref={ambientLightRef} />
      
      {/* Main light - kept as is */}
      {/* <spotLight
        castShadow={!isMobile}
        ref={mainLightRef}
        position={[17 * combinedScale, 25 * combinedScale, 8 * combinedScale]}
        intensity={isMobile ? 0.3 : 0.5}
        distance={100 * combinedScale}
        angle={0.3}
        penumbra={isMobile ? 0.3 : 0.4}
      /> */}
      
      {/* Drei SpotLight for DroneModel - will work in Vercel */}
      <MovingDroneSpot 
        depthBuffer={depthBuffer}
        color="#ffffff"
        position={[5 * combinedScale, 15 * combinedScale, 10 * combinedScale]}
        distance={25 * combinedScale}
        intensity={isMobile ? 1 : 30.5}
        angle={0.5}
        penumbra={0.8}
        vec={droneSpotTargetVec}
      />
      
      {/* Drei SpotLight for FixedWing - will work in Vercel */}
      <MovingDroneSpot 
        depthBuffer={depthBuffer}
        color="#ffffff"
        position={[5 * combinedScale, 19 * combinedScale, -25 * combinedScale]}
        distance={30 * combinedScale}
        intensity={isMobile ? 1 : 30.5}
        angle={0.5}
        penumbra={0.8}
        vec={fixedWingSpotTargetVec}
      />
      
      {/* Drei SpotLight for TestDrone - will work in Vercel */}
      <MovingDroneSpot 
        depthBuffer={depthBuffer}
        color="#ffffff"
        position={[5 * combinedScale, 19 * combinedScale, -55 * combinedScale]}
        distance={30 * combinedScale}
        intensity={isMobile ? 0.5 : 30.5}
        angle={0.5}
        penumbra={0.8}
        vec={testDroneSpotTargetVec}
      />

      <DroneModel
        position={isMobile ? [0, -1 * combinedScale, 1.5 * combinedScale] : [0, -1 * combinedScale, 2.5 * combinedScale]}
        onClick={(targetPosition, lookAtPosition) => handleCameraAnimation(targetPosition, lookAtPosition)}
        onReturnToMain={handleReturnToMain}
        setScrollEnabled={setScrollEnabled}
        scrollEnabled={scrollEnabled}
        isTransitioning={isTransitioning}
        scale={isMobile ?
          [3.5 * combinedScale , 3.5 * combinedScale , 3.5 * combinedScale ] :
          [5,5,5]
        }
        isMobile={isMobile}
      />

      <FixedWing
        position={isMobile ? [5 * combinedScale, -5.5 * combinedScale, -29 * combinedScale] : [4 * combinedScale, -6 * combinedScale, -28 * combinedScale]}
        rotation={[0, 210 * (Math.PI / 180), 0]}
        scale={isMobile ?
          [4.5* combinedScale , 4.5 * combinedScale , 4.2* combinedScale] :
          [5 * combinedScale, 5 * combinedScale, 5 * combinedScale]
        }
        isMobile={isMobile}
      />

        {/* Add TestDrone component */}
      <TestDrone
       position={isMobile ? [9, 0.2 * combinedScale, -55 * combinedScale] : [5.5*combinedScale, 0.2 * combinedScale, -56 * combinedScale]}
        // position={isMobile ? [5 * combinedScale, -5.5 * combinedScale, -59 * combinedScale] : [5 * combinedScale, -6 * combinedScale, -60 * combinedScale]}
        rotation={[0, 250 * (Math.PI / 180), 0]}
        scale={isMobile ?
          [6 * combinedScale, 6 * combinedScale, 6 * combinedScale] :
          [8 * combinedScale, 8 * combinedScale, 9 * combinedScale]
        }
        isMobile={isMobile}
        onClick={(targetPosition, lookAtPosition) => handleCameraAnimation(targetPosition, lookAtPosition)}
         onReturnToMain={handleReturnToMain}
  setScrollEnabled={setScrollEnabled}
  scrollEnabled={scrollEnabled}
  isTransitioning={isTransitioning}
      />

      <Ground position={[0, -1 * combinedScale, 0]} rotation={[-Math.PI / 2, 0, 0]} />
    </>
  );
}

export default Scene;