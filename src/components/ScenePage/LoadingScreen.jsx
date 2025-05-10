// src/components/LoadingScreen.js
import React from 'react';
import { Html } from '@react-three/drei';

function LoadingScreen() {
  return (
    <Html fullscreen>
      <div
        style={{
          background: 'black',
          width: '100vw',
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          color: 'white',
          fontSize: '24px',
        }}
      >
        Loading...
      </div>
    </Html>
  );
}

export default LoadingScreen;