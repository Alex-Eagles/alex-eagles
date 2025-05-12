import React, { useRef, useEffect, useState } from 'react';
import { useLoader, useThree } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { Clone, Html } from '@react-three/drei';
import { CONFIG } from '../../contexts/DroneAnimationContext';
import * as THREE from 'three';
import Info from './Info';
import gsap from 'gsap';
import testDroneComponentsData from '../../assets/data/testDroneComponentsData';

// Create a mapping from 3D model object names to componentsData entries
const componentMapping = {
 'camera': 'SIYI A8 Mini',
  'Body1440_1': 'PixHawk',
  'Body1406_3': 'GPS HERE3+',
  'herelink': 'SIYI Herelink',
  // Add more mappings as needed for your model parts
};

export default function TestDrone({ position, rotation, scale, isMobile, onClick, setScrollEnabled, scrollEnabled }) {
  const modelRef = useRef();
  const [hoveredMesh, setHoveredMesh] = useState(null);
  const [clickedMesh, setClickedMesh] = useState(null);
  const [showInfoPanel, setShowInfoPanel] = useState(false);
  const infoPanelRef = useRef(null);
  const prevEmissives = useRef(new Map());
  const { camera } = useThree();
  
  // Define interactive components - update these to match your model's part names
  const interactiveParts = [ 'herelink',  'camera','Body1440_1','Body1406_3'];

  let path = "";
  if (isMobile) {
    path = CONFIG. mobileTestDronePath;
  } else {
    path = CONFIG.testDronePath;
  }
  
  // Load the GLTF model
  const gltf = useLoader(GLTFLoader, path);

  // Pointer handlers for hover effects
  const onPointerOver = (e) => {
    e.stopPropagation();
    const mesh = e.object;

    // console.log the name of the hovered mesh
    console.log(mesh.name);
    //Check if this is one of our interactive parts
    const isInteractive = interactiveParts.some(part => 
      mesh.name.toLowerCase().includes(part.toLowerCase())
    );
    
    if (!isInteractive) return;

    // Save mesh's original emissive color
    if (!prevEmissives.current.has(mesh)) {
      prevEmissives.current.set(mesh, mesh.material.emissive.clone());
    }
    
    // Apply highlight effect
    if (mesh.material) {
      mesh.material.emissive.setHex(0x1A237E);
      setHoveredMesh(mesh);
    }
  };

  const onPointerOut = (e) => {
    e.stopPropagation();
    const mesh = e.object;

    //Check if this is one of our interactive parts
    const isInteractive = interactiveParts.some(part => 
      mesh.name.toLowerCase().includes(part.toLowerCase())
    );
    
    if (!isInteractive) return;
    
    // Restore original emissive color
    const old = prevEmissives.current.get(mesh);
    if (old && mesh.material) mesh.material.emissive.copy(old);
    setHoveredMesh(null);
  };

  // Click handler for zooming into components
  const handleClick = (e) => {
    e.stopPropagation();
    const mesh = e.object;

    // Check if this is one of our interactive parts
    const isInteractive = interactiveParts.some(part => 
      mesh.name.toLowerCase().includes(part.toLowerCase())
    );
    
    if (!isInteractive) return;

    setClickedMesh(mesh); // Store the clicked mesh
    
    // Calculate target position and look-at position
    const targetPosition = mesh.getWorldPosition(new THREE.Vector3()).add(new THREE.Vector3(0, 1, 3));
    const lookAtPosition = mesh.getWorldPosition(new THREE.Vector3());

    // Hide panel during camera movement
    setShowInfoPanel(false);

    // Disable scrolling when viewing info panel
    if (setScrollEnabled) {
      setScrollEnabled(false);
    }

    // Trigger the onClick callback passed from Scene
    if (onClick) {
      onClick(targetPosition, lookAtPosition);
      
      // Show panel after camera animation completes
      setTimeout(() => {
        setShowInfoPanel(true);
      }, 1800);
    }
  };

  // Info panel close handler
  const handleInfoClose = () => {
    // Re-enable scrolling when closing info panel
    if (setScrollEnabled) {
      setScrollEnabled(true);
    }
    
    // Animate out with improved exit animation
    if (infoPanelRef.current) {
      gsap.killTweensOf(infoPanelRef.current);
      
      gsap.to(infoPanelRef.current, {
        opacity: 0,
        x: 100, // Slide out to the right
        rotation: 0.05,
        scale: 0.9,
        duration: 0.5,
        ease: "power2.in",
        onComplete: () => {
          setShowInfoPanel(false);
          setClickedMesh(null);
        }
      });
    } else {
      setShowInfoPanel(false);
      setClickedMesh(null);
    }
  };

  // Handle info panel closing when scrollEnabled changes
  useEffect(() => {
    if (scrollEnabled && showInfoPanel) {
      handleInfoClose();
    }
  }, [scrollEnabled]);

  // If the model isn't loaded yet, don't render anything
  if (!gltf) return null;

  return (
    <group>
      <Clone
        ref={modelRef}
        object={gltf.scene}
        position={position || [0, 0, 0]}
        rotation={rotation || [0, 0, 0]}
        scale={scale || [1, 1, 1]}
        castShadow
        receiveShadow
        onPointerOver={onPointerOver}
        onPointerOut={onPointerOut}
        onClick={handleClick}
      />
      
      {/* Component Info Panel */}
      {clickedMesh && showInfoPanel && (
        <Html
          position={[
            clickedMesh.getWorldPosition(new THREE.Vector3()).x +0.5 ,
            clickedMesh.getWorldPosition(new THREE.Vector3()).y - 0.2,
            clickedMesh.getWorldPosition(new THREE.Vector3()).z
          ]}
          center
          zIndexRange={[100, 0]}
          className="info-panel-container"
          style={{
            width: "auto",
            height: "auto", 
            padding: "0",
            pointerEvents: "auto",
            transform: "translateZ(0)",
            perspective: "1000px",
            transformStyle: "preserve-3d",
            transition: "transform 0.5s ease-in-out",
          }}
        >
          <div 
            ref={infoPanelRef}
            className="info-panel"
          >
            {(() => {
              // Find which interactive part this clicked mesh corresponds to
              const partKey = interactiveParts.find(part => 
                clickedMesh.name.toLowerCase().includes(part.toLowerCase())
              );
              
              // Use the mapping to find the component name
              const componentName = partKey ? componentMapping[partKey] : null;
              
              // Find the component data (you'll need to create testDroneComponentsData)
              const component = testDroneComponentsData?.find(comp => comp.name === componentName);
              
              return (
                <Info 
                  setScrollEnabled={setScrollEnabled} 
                  onClose={handleInfoClose}
                  name={component ? component.name : clickedMesh.name}
                  description={component ? component.description : "This is an experimental drone component."}
                  image={component ? component.image : "/assets/images/defaultComponent.jpg"}
                />
              );
            })()}
          </div>
        </Html>
      )}
    </group>
  );
}