import React, { useEffect, useState, useRef } from "react";
import "../../styles/modal.css";
import {mediaItems as droneMediaItems} from "../../assets/data/droneMedia"; // Adjust the import path as necessary
import { mediaItems as fixedMediaItems } from "../../assets/data/fixedwingMedia"; // Adjust the import path as necessary
import componentsData  from "../../assets/data/componentsData"; // Adjust the import path as necessary
import fixedcomponentsData from "../../assets/data/fixedwingComponentsData";

function Modal({ isOpen, onClose, title, componentsModal }) {
  const [expandedId, setExpandedId,type] = useState(null);
  const sectionRefs = useRef({});
  //const mediaItems = title === "Itay" ? droneMediaItems : fixedMediaItems;
  let mediaItems= null;
  // 4 conidition for the modal content 
  // 1. If the title is "Itay" and the component modal is false then show the droneMediaItems
  // 2. If the title is "Itay" and the component modal is true then show the the dronecomponents
  // 3. If the title is "Fixed-Wing" and the component modal is false then show the fixedMediaItems
  // 4. If the title is "Fixed-Wing" and the component modal is true then show the fixedwingcomponents
  if (title === "Itay" && !componentsModal) {
    mediaItems = droneMediaItems;
    

  }
  else if (title === "Itay" && componentsModal) {
    mediaItems = componentsData;
  }
  else if (title === "Taco" && !componentsModal) {
    mediaItems = fixedMediaItems;
  }
  else if (title === "Taco" && componentsModal) {
    mediaItems = fixedcomponentsData;
  }
  else if (title === "Test Drone" && !componentsModal) {
    mediaItems = droneMediaItems;
  }
  else if (title === "Test Drone" && componentsModal) {
    mediaItems = componentsData;
  }

  // Close modal when Escape key is pressed
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  // Handle section expansion
  const handleSectionClick = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  // Handle video playback
  const handleMouseEnter = (id) => {
    const section = sectionRefs.current[id];
    if (!section) return;
    
    const video = section.querySelector('video');
    if (video) {
      video.play();
    }
  };

  const handleMouseLeave = (id) => {
    if (expandedId === id) return; // Don't pause if section is expanded
    
    const section = sectionRefs.current[id];
    if (!section) return;
    
    const video = section.querySelector('video');
    if (video) {
      video.pause();
      video.currentTime = 0;
    }
  };

  // Don't render anything if modal is not open
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2>{title}</h2>
          <button className="modal-close" onClick={onClose}>×</button>
        </div>
        <div className="modal-body">
          {mediaItems.map((item) => (
            <div
              key={item.id}
              ref={(el) => (sectionRefs.current[item.id] = el)}
              className={`section ${expandedId === item.id ? "expanded" : ""}`}
              onClick={() => handleSectionClick(item.id)}
              onMouseEnter={() => handleMouseEnter(item.id)}
              onMouseLeave={() => handleMouseLeave(item.id)}
            >
              <div className="section-header">
                <h3 className="section-category">{item.category}</h3>
              </div>
              
              <div className="section-content">
                <div className="content-text">
                  <h4 className="section-title">{item.title}</h4>
                  <p className="section-caption">{item.caption || item.description}</p>
                </div>
                
                <div className="content-media">
                  {item.type === "video" ? (
                    <video 
                      src={item.src} 
                      className="section-video" 
                      loop 
                      muted
                      preload="metadata"
                    />
                  ) : (
                    <img 
                      src={item.src} 
                      alt={item.title} 
                      className="section-image" 
                    />
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Modal;