import React, { useRef, useEffect, useState } from 'react';
import { useLoader, useFrame } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { gsap } from 'gsap';
import * as THREE from 'three';
import { useDroneAnimation, CONFIG } from '../../contexts/DroneAnimationContext';
import { Html } from '@react-three/drei';
import { Clone } from '@react-three/drei';
import "../../styles/dronemodel.css"
import { useThree } from '@react-three/fiber';
import Info from './Info';
import componentsData from '../../assets/data/componentsData';
// Utility function
const lerp = (start, end, t) => start * (1 - t) + end * t;

// Create a mapping from 3D model object names to componentsData entries
const componentMapping = {
  'camera': 'SIYI A8 Mini',
  'propeller': 'Propellers',
  'herelink': 'GPS HERE3+',
  'lidar': 'Lidar sf45',
  'hub': 'P80 Brushless Motors',   // Assuming the motor/hub is what we want to map
   
};

function DroneModel({position, onClick, setScrollEnabled, ScrollEnabled}) {
  const { state, setIsLoading, applyScrollDecay, updatePhaseTransition } = useDroneAnimation();
  const prevEmissives = useRef(new Map());
  const [hoveredMesh, setHoveredMesh] = useState(null);
  const [hoverPos, setHoverPos] = useState(new THREE.Vector3());
  const { camera } = useThree(); // Access the camera
  const [selectedMesh, setSelectedMesh] = useState(null); // Track the clicked part
  
   // Define interactive components
  const interactiveParts = ['camera', 'hub', 'propeller', 'lidar', 'herelink'];
  // states for info panels pop ups
  const [clickedMesh, setClickedMesh] = useState(null);
  const [showInfoPanel, setShowInfoPanel] = useState(false);
  const infoPanelRef = useRef(null);
  
  // Refs
  const modelRef = useRef();
  const clockRef = useRef(new THREE.Clock());
  const propellersRef = useRef([]);
  const mixer = useRef(null);
  const navAnimationStartedRef = useRef(false);


  // Load the model
  const gltf = useLoader(GLTFLoader, CONFIG.modelPath, () => {
    setIsLoading(false);
  });
  
  // Initialize model and find propellers
  useEffect(() => {
    if (!gltf) return;
    
    // Find all propellers
    const propellers = [];
    // flag for alternate spin direction
    let spinDirectionFlag = 2;
    let spinDirection = 1
    gltf.scene.traverse((obj) => {
      if (obj.name.toLowerCase().includes('propeller') && obj.isMesh && (obj.name.includes('1') ||obj.name.includes('2') ||obj.name.includes('3') ||obj.name.includes('4') )) {
        // Calculate spin direction (alternating)
        if (spinDirectionFlag === 0) {
          spinDirection = -1 * spinDirection
          spinDirectionFlag = 2;
        }
        obj.userData.spinDirection = spinDirection;
        spinDirectionFlag = spinDirectionFlag - 1;
        obj.castShadow = true;
        propellers.push(obj);
      }
    });
    
    propellersRef.current = propellers;
 
    // Set up animations if available
    const animations = gltf.animations;
    if (animations && animations.length > 0) {
      const hoverClip = animations.find(clip => clip.name === 'hover');
      if (hoverClip) {
        mixer.current = new THREE.AnimationMixer(gltf.scene);
        const hoveringAction = mixer.current.clipAction(hoverClip);
        hoveringAction.loop = THREE.LoopRepeat;
      }
    }
  }, [gltf, setIsLoading]);
  
  // Rotate propellers
  const spinPropellers = (speed) => {
    propellersRef.current.forEach(propeller => {
      const direction = propeller.userData.spinDirection;
      const angleChange = direction * speed * CONFIG.propellerSpeedMultiplier;
      propeller.rotation.z += 2.2 * angleChange;
    });
  };
  
  // Get animation state for a specific phase
  const getPhaseAnimationState = (phase, currentTime) => {
    // Default state
    const animState = {
      position: { x: position[0], y: position[1], z: position[2] },
      rotation: { x: 0, y: 0, z: 0 },
      propellerSpeed: 0
    };

    switch (phase) {
      case 'manuallyRotate':
        animState.propellerSpeed = state.scrollSpeed;
        break;
        
      case 'autoRotate':
        animState.propellerSpeed = state.lastScrollSpeed || 0.1; // Default speed if none
        break;
      
      case 'pumpUp':
        const pumpElapsed = (currentTime - state.lastPhaseChangeTime) / 1000;
        const pumpCycle = Math.sin(pumpElapsed * 10) * 0.1;
        animState.position.y = 1.3 + pumpCycle;
        animState.propellerSpeed = state.lastScrollSpeed || 0.1;
        break;
      
      case 'navigate':
        animState.propellerSpeed = state.lastScrollSpeed || 0.1;
        
        // Check if this is the first time we've entered navigate phase
        if (!navAnimationStartedRef.current && modelRef.current) {
          navAnimationStartedRef.current = true;
          
          // Get current position (starting point)
          const currentPos = {
            x: modelRef.current.position.x,
            y: modelRef.current.position.y,
            z: modelRef.current.position.z
          };
          
          // Define target position
          const targetPosition = { x: -4, y: -2, z: 1 };
          
          // Create timeline for complex animation
          const timeline = gsap.timeline();
          
          // Animate the position with a curved path
          timeline.to(modelRef.current.position, {
            x: targetPosition.x,
            y: targetPosition.y,
            z: targetPosition.z,
            duration: 4,
            ease: "power2.inOut",
            
            // Use onUpdate to control rotation based on movement direction
            onUpdate: function() {
              // Calculate movement direction for realistic banking
              const progress = this.progress();
              
              // Calculate current direction of movement
              const directionX = targetPosition.x - currentPos.x;
              const directionY = targetPosition.y - currentPos.y;
              const directionZ = targetPosition.z - currentPos.z;
              
              // Apply banking/tilt based on direction
              modelRef.current.rotation.z = -directionX * 0.1 * (1 - progress * 0.7);
              modelRef.current.rotation.x = directionZ * 0.2 * (1 - progress * 0.7);
              modelRef.current.rotation.y = directionX > 0 ? 
                -Math.sin(progress * Math.PI) * 0.1 : 
                Math.sin(progress * Math.PI) * 0.1;
            }
          });
        }
        
        // Add micro-movements for realism
        const microTime = currentTime * 0.001;
        animState.position = { x: 0, y: 0, z: 0 };
        animState.microMovements = {
          x: Math.sin(microTime * 4) * 0.03,
          y: Math.cos(microTime * 3.5) * 0.025,
          z: Math.sin(microTime * 5) * 0.02
        };
        break;
    }
    
    return animState;
  };
  
  // Animation frame logic - uncomment and fix issues
  // useFrame(() => {
  //   if (!modelRef.current) return;
    
  //   const delta = clockRef.current.getDelta();
  //   const currentTime = Date.now();
    
  //   // Apply decay to scrollSpeed
  //   applyScrollDecay();
    
  //   // Update the transition state
  //   updatePhaseTransition();
    
  //   // Update mixer if it exists
  //   if (mixer.current) {
  //     mixer.current.update(delta);
  //   }
    
  //   // Handle animations based on current state
  //   if (state.currentPhase === state.targetPhase) {
  //     // No transition - run current phase animation
  //     const animState = getPhaseAnimationState(state.currentPhase, currentTime);
      
  //     // Apply position if not in navigate phase (handled by GSAP)
  //     if (state.currentPhase !== 'navigate') {
  //       modelRef.current.position.set(
  //         animState.position.x, 
  //         animState.position.y, 
  //         animState.position.z
  //       );
  //     }
      
  //     // Apply rotation
  //     modelRef.current.rotation.x = animState.rotation.x;
  //     modelRef.current.rotation.z = animState.rotation.z;
      
  //     // Spin propellers based on phase
  //     spinPropellers(animState.propellerSpeed);
  //   } else {
  //     // We're in transition - blend between states
  //     const fromState = getPhaseAnimationState(state.currentPhase, currentTime);
  //     const toState = getPhaseAnimationState(state.targetPhase, currentTime);
      
  //     // Blend position
  //     if (state.currentPhase !== 'navigate' && state.targetPhase !== 'navigate') {
  //       modelRef.current.position.set(
  //         lerp(fromState.position.x, toState.position.x, state.phaseTransition),
  //         lerp(fromState.position.y, toState.position.y, state.phaseTransition),
  //         lerp(fromState.position.z, toState.position.z, state.phaseTransition)
  //       );
  //     }
      
  //     // Blend rotation
  //     modelRef.current.rotation.x = lerp(
  //       fromState.rotation.x, 
  //       toState.rotation.x, 
  //       state.phaseTransition
  //     );
      
  //     modelRef.current.rotation.z = lerp(
  //       fromState.rotation.z, 
  //       toState.rotation.z, 
  //       state.phaseTransition
  //     );
      
  //     // Blend propeller speed
  //     const blendedSpeed = lerp(
  //       fromState.propellerSpeed, 
  //       toState.propellerSpeed, 
  //       state.phaseTransition
  //     );
      
  //     spinPropellers(blendedSpeed);
  //   }
  // });

  // pointer handlers
  function onPointerOver(e) {
    e.stopPropagation();
    const mesh = e.object;

       // Check if this is one of our interactive parts
    const isInteractive = interactiveParts.some(part => 
      mesh.name.toLowerCase().includes(part.toLowerCase())
    );
    
    if (!isInteractive) return;

    const worldPos = new THREE.Vector3();
    mesh.getWorldPosition(worldPos);
    setHoverPos(worldPos);
    // stash its old emissive
    if (!prevEmissives.current.has(mesh)) {
      prevEmissives.current.set(mesh, mesh.material.emissive.clone());
    }
    // tint it up
    if (mesh){
      mesh.material.emissive.setHex(0x1A237E);
      setHoveredMesh(mesh);
    }
  }

  function onPointerOut(e) {
    e.stopPropagation();
    const mesh = e.object;

        // Check if this is one of our interactive parts
    const isInteractive = interactiveParts.some(part => 
      mesh.name.toLowerCase().includes(part.toLowerCase())
    );
    
    if (!isInteractive) return;
    // restore emissive
    const old = prevEmissives.current.get(mesh);
    if (old) mesh.material.emissive.copy(old);
    setHoveredMesh(null);
  }
  
  // Improved click handler for info panel animation
  const handleClick = (e) => {
    e.stopPropagation();
    const mesh = e.object;

    // Check if this is one of our interactive parts
    const isInteractive = interactiveParts.some(part => 
      mesh.name.toLowerCase().includes(part.toLowerCase())
    );
    
    if (!isInteractive) return;

    
    setClickedMesh(mesh); // Store the clicked mesh
    setSelectedMesh(mesh); // Store the selected mesh
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
      
      // Show panel after camera animation completes with improved animation
      setTimeout(() => {
        setShowInfoPanel(true);
        
        // Apply animation after the component is rendered
        // Using requestAnimationFrame ensures the DOM element is available
       
      }, 1800);
    }
  };

  // Improved info panel close handler
  const handleInfoClose = () => {
    // Re-enable scrolling when closing info panel
    if (setScrollEnabled) {
      setScrollEnabled(true);
    }
    
    // Animate out with improved exit animation
    if (infoPanelRef.current) {
      // Kill any active tweens
      gsap.killTweensOf(infoPanelRef.current);
      
      gsap.to(infoPanelRef.current, {
        opacity: 0,
        x: 100, // Slide out to the right
        rotation: 0.05,
        scale: 0.9, // Shrink slightly while exiting
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
  
  // Handle info panel closing when ScrollEnabled changes
  useEffect(() => {
    if (ScrollEnabled && showInfoPanel) {
      if (infoPanelRef.current) {
        // Kill any active tweens
        gsap.killTweensOf(infoPanelRef.current);
        
        gsap.to(infoPanelRef.current, {
          opacity: 0,
          x: 100,
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
    }
  }, [ScrollEnabled]);
  


  // If the model isn't loaded yet, don't render anything
  if (!gltf) return null;
  
  return (
    <group>
      <Clone
        ref={modelRef}
        object={gltf.scene}
        scale={[5, 5, 5]}
        position={position}
        rotation={[0, Math.PI, 0]}
        receiveShadow
        castShadow
        onPointerOver={onPointerOver}
        onPointerOut={onPointerOut}
        onClick={handleClick}
      />
      
      {/* Component Info Panel with improved positioning and layout */}
      {clickedMesh && showInfoPanel && (
        <Html
          
          position={[
            clickedMesh.getWorldPosition(new THREE.Vector3()).x + 0.3,
            clickedMesh.getWorldPosition(new THREE.Vector3()).y + 0.85,
            clickedMesh.getWorldPosition(new THREE.Vector3()).z
          ]}
          center
          zIndexRange={[100, 0]}
          className="info-panel-container"
          style={{
            width: "auto",
            height: "auto", 
            padding: "0",
            pointerEvents: "auto", // Ensure clicks work on the panel
            transform: "translateZ(0)", // Enable hardware acceleration
            perspective: "1000px", // Enable 3D transforms
            transformStyle: "preserve-3d", // Better 3D animations
            transition: "transform 0.5s ease-in-out", // Smooth transition
            
          }}
        >
          <div 
            ref={infoPanelRef}
            className="info-panel"
           
          >
            
           {/* Find the matching component data using the mapping */}
            {(() => {
              // Find which interactive part this clicked mesh corresponds to
              const partKey = interactiveParts.find(part => 
                clickedMesh.name.toLowerCase().includes(part.toLowerCase())
              );
              
              // Use the mapping to find the component name in componentsData
              const componentName = partKey ? componentMapping[partKey] : null;
              
              // Find the component data
              const component = componentsData.find(comp => comp.name === componentName);
              
              return (
                <Info 
                  setScrollEnabled={setScrollEnabled} 
                  onClose={handleInfoClose}
                  name={component ? component.name : clickedMesh.name}
                  description={component ? component.description : "No description available."}
                  image={component ? component.image : "/Images/DroneComponents/default.jpg"}
                />
              );
            })()}
          </div>
        </Html>
      )}
    </group>
  );
}

export default DroneModel;