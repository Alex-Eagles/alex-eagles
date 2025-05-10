// src/ScenePage.js
import React, { Suspense, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { DroneAnimationProvider } from '../contexts/DroneAnimationContext';
import { softShadows, ContactShadows, ScrollControls, AdaptiveDpr } from '@react-three/drei';
import Scene from '../components/ScenePage/Scene';
import Logo from '../components/ScenePage/Logo';
import Desc from '../components/ScenePage/Desc';
import "../styles/scenepage.css";
import LoadingScreen from '../components/ScenePage/LoadingScreen';


function ScenePage() {
  const [page, setPage] = useState(0);
  const [scrollEnabled, setScrollEnabled] = useState(true);

  return (
    
    <div id="container">
      <Logo />
      
      <div className="info">
        <Desc page={page} />
      </div>
      <div className="scene-container">
        <DroneAnimationProvider>
          <Canvas
            antialias
            shadows
            style={{
              marginTop: '50px',
              width: '100%',
              height: '100%',
              position: 'fixed',
              zIndex: 2,
            }}
            camera={{ fov: 75, near: 0.1, far: 2000, position: [4, 3, 8] }}
            gl={{ antialias: true, pixelRatio: Math.min(window.devicePixelRatio, 1.5) }}
          >
            <AdaptiveDpr pixelated />
            <ScrollControls pages={2} damping={2} html={false} enabled={scrollEnabled}>
              <Suspense fallback={<LoadingScreen />}>
                <Scene
                  setPage={setPage}
                  setScrollEnabled={setScrollEnabled}
                  scrollEnabled={scrollEnabled}
                />
              </Suspense>
            </ScrollControls>
          </Canvas>
        </DroneAnimationProvider>
      </div>
    </div>
    
  );
}

export default ScenePage;