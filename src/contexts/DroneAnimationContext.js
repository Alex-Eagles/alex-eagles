import React, { createContext, useContext, useState, useEffect, useRef } from 'react';
// Configuration constants
export const CONFIG = {
  modelPath: '/drone_model/AE_Drone9.gltf',
  fixedwingmodelPath: '/drone_model/AE_Fixed.gltf',
  takeoffDuration: 2.5, // seconds
  hoverHeight: 2,
  transitionDuration: 0.8,
  propellerSpeedMultiplier: 4
};

const DroneAnimationContext = createContext(null);
export function DroneAnimationProvider({ children }) {
  const overlayRef = useRef(null);
  const [state, setState] = useState({
    virtualScrollY: 0,
    scrollSpeed: 0,
    lastScrollSpeed: 0,
    lastScrollTime: Date.now(),
    animationPhase: 'manuallyRotate',
    currentPhase: 'manuallyRotate',
    targetPhase: 'manuallyRotate',
    phaseTransition: 0,
    lastPhaseChangeTime: 0,
    takeoffStartTime: 0,
    takeoffHeight: 0,
    isLoading: true
  });

  const [currentSection, setCurrentSection] = useState(null); // Track the current section

  //a ref to the current phase so our wheel handler always sees the latest
  const phaseRef = useRef(state.currentPhase);
  useEffect(() => {
    phaseRef.current = state.currentPhase;
  }, [state.currentPhase]);

  // Handle wheel scroll events
  const handleScroll = (event) => {
    // Update virtual scroll position
    setState(prev => {
      const virtualScrollY = prev.virtualScrollY + event.deltaY;
      
      // Calculate scroll speed
      const currentTime = Date.now();
      let scrollSpeed = event.deltaY / (currentTime - prev.lastScrollTime) * 0.1;
      
      // Cap the maximum rotation speed
      scrollSpeed = Math.max(-0.05, Math.min(0.05, scrollSpeed));
      
      return {
        ...prev,
        virtualScrollY,
        scrollSpeed,
        lastScrollTime: currentTime
      };
    });
  };

  // Update animation phase based on scroll position
  const updateAnimationPhase = () => {
    let newTargetPhase;
    
    if (state.virtualScrollY < 4000) {
      newTargetPhase = 'manuallyRotate';
      setState(prev => ({ 
        ...prev, 
        animationPhase: 'manuallyRotate' 
      }));
    } else if (state.virtualScrollY < 8000) {
      newTargetPhase = 'autoRotate';
      setState(prev => ({ 
        ...prev, 
        animationPhase: 'autoRotate',
        lastScrollSpeed: prev.scrollSpeed
      }));
    } else if (state.virtualScrollY < 12000) {
      if (state.animationPhase === 'autoRotate') {
        setState(prev => ({ ...prev, takeoffStartTime: Date.now() }));
      }
      newTargetPhase = 'pumpUp';
      setState(prev => ({ ...prev, animationPhase: 'pumpUp' }));
    } 
    // else if (state.virtualScrollY < 16000) {
    //   newTargetPhase = 'takeoff';
    //   setState(prev => ({ ...prev, animationPhase: 'takeoff' }));
    // } else if (state.virtualScrollY < 18000) {
    //   newTargetPhase = 'hover';
    //   setState(prev => ({ 
    //     ...prev, 
    //     animationPhase: 'hover',
    //     lastScrollSpeed: prev.scrollSpeed
    //   }));
    // }
    else{
      newTargetPhase = 'navigate';
      setState(prev => ({ 
        ...prev, 
        animationPhase: 'navigate',
        lastScrollSpeed: prev.scrollSpeed
      }));
    }
    // Add a land phase at the end of the scroll
    
    if (newTargetPhase !== state.targetPhase) {
      setState(prev => {
        const updates = { targetPhase: newTargetPhase };
        
        if (newTargetPhase !== prev.currentPhase) {
          updates.lastPhaseChangeTime = Date.now();
          // if (newTargetPhase === 'takeoff') {
          //   updates.takeoffStartTime = Date.now();
          // }
        }
        
        return { ...prev, ...updates };
      });
    }
  };

  // Set up scroll event listener
  // useEffect(() => {
  //   const overlay = document.createElement('div');
  //   if (phaseRef.current !== 'navigate') {

  //     Object.assign(overlay.style, {
  //       position:      'fixed',
  //       top:           '0',
  //       left:          '0',
  //       width:         '100%',
  //       height:        '100%',
  //       zIndex:        '2',
  //       pointerEvents: 'auto',
  //       background:    'transparent',
  //     });
  //     document.body.appendChild(overlay);
  //     overlayRef.current = overlay;
  //   }

  //   // Single wheel handler that branches on phase
  //   const onWheel = (e) => {
  //     handleScroll(e);        // drive your drone
  //     if (phaseRef.current !== 'navigate') {
  //       e.preventDefault();     // stop the browser scroll
  //     }
  //     // else do nothing → browser scrolls underneath
  //   };
  //   overlay.addEventListener('wheel', onWheel, { passive: false });

  //   // Cleanup on unmount
  //   return () => {
  //     overlay.removeEventListener('wheel', onWheel);
  //     if (overlayRef.current) {
  //       document.body.removeChild(overlayRef.current);
  //       overlayRef.current = null;
  //     }
  //   };
  // }, []);  // run only once

  useEffect(() => {
    const sections = document.querySelectorAll('.home-section'); // Select all sections with the class 'section'

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            console.log('Section in view:', entry.target.id); // Log the ID of the section in view
            setCurrentSection(entry.target.id); // Update the current section ID
          }
        });
      },
      { threshold: 0.6 } // Trigger when 60% of the section is visible
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []); // Run once on mount

  // Update animation phase based on scroll
  useEffect(() => {
    updateAnimationPhase();
  }, [state.virtualScrollY]);

  const setIsLoading = (isLoading) => {
    setState(prev => ({ ...prev, isLoading }));
  };

  const applyScrollDecay = () => {
    setState(prev => ({
      ...prev,
      scrollSpeed: prev.scrollSpeed * 0.98
    }));
  };

  const updatePhaseTransition = () => {
    if (state.currentPhase === state.targetPhase) return;
    
    const currentTime = Date.now();
    const elapsed = (currentTime - state.lastPhaseChangeTime) / 1000;
    
    // Calculate transition progress (0 to 1)
    const phaseTransition = Math.min(1.0, elapsed / CONFIG.transitionDuration);
    
    setState(prev => ({
      ...prev,
      phaseTransition,
      // If transition is complete, update current phase
      currentPhase: phaseTransition >= 1.0 ? prev.targetPhase : prev.currentPhase
    }));
  };

  return (
    <DroneAnimationContext.Provider
      value={{
        state,
        setIsLoading,
        applyScrollDecay,
        updatePhaseTransition,
        currentSection, // Add currentSection to the context
      }}
    >
      {children}
    </DroneAnimationContext.Provider>
  );
}

export function useDroneAnimation() {
  const context = useContext(DroneAnimationContext);
  if (!context) {
    throw new Error('useDroneAnimation must be used within a DroneAnimationProvider');
  }
  return context;
}