import React, { useRef, useEffect, useState,useMemo } from "react";
import Typewriter from "typewriter-effect";
import "../../styles/card.css";
import Modal from "./Modal";
function Card({ name, location, description }) {
  // State to control modal visibility
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isComponentsModalOpen, setisComponentsModalOpen] = useState(false);
  const nameTW = useRef(null);
  const locTW = useRef(null);
  const descTW = useRef(null);
  
  // Track whether typewriter instances are ready
  const [nameReady, setNameReady] = useState(false);
  const [locReady, setLocReady] = useState(false);
  
  // Track previous values to detect changes
  const prevName = useRef(name);
  const prevLocation = useRef(location);

  // Handle name changes
  useEffect(() => {
    if (!nameReady || !nameTW.current) return;
    
    // Only trigger animation when the value actually changes
    if (prevName.current !== name) {
      nameTW.current
        .deleteAll(1)
        .changeDelay(50)
        .typeString(name)
        .start();
      
      prevName.current = name;
    }
  }, [name, nameReady]);

  // Handle location changes
  useEffect(() => {
    if (!locReady || !locTW.current) return;
    
    // Only trigger animation when the value actually changes
    if (prevLocation.current !== location) {
      locTW.current
        .deleteAll(1)
        .changeDelay(80)
        .typeString(location)
        .start();
      
      prevLocation.current = location;
    }
  }, [location, locReady]);

  // Get the button text based on current page

  return (
    <div className="card">
      <h1>
        {" "}
        <Typewriter
          options={{
            cursor: "|",
            delay: 50,
          }}
          onInit={(tw) => {
            nameTW.current = tw;
            tw.typeString(name).start().callFunction(() => {
              setNameReady(true);
              prevName.current = name;
            });
          }}
        />
      </h1>

      <h2>
        {" "}
        <Typewriter
          options={{
            cursor: "|",
            delay: 80,
          }}
          onInit={(tw) => {
            locTW.current = tw;
            tw.typeString(location).start().callFunction(() => {
              setLocReady(true);
              prevLocation.current = location;
            });
          }}
        />
      </h2>

      <p>
        {/* Using key to force re-mount and complete re-typing for description */}
        <Typewriter
          key={description}
          options={{
            cursor: "|",
            delay: 10,
          }}
          onInit={(tw) => {
            descTW.current = tw;
            tw.typeString(description).start();
          }}
        />
      </p>
      <div className="buttons-container">
        <button onClick={() => setIsModalOpen(true)}> More of {name}</button> 
        <button onClick={() => {
          setIsModalOpen(true);
          setisComponentsModalOpen(true);
  }}    >{name} components</button>

      </div>
      {/* Modal component */}
      <div className="modal-container">
            <Modal 
              isOpen={isModalOpen} 
              onClose={() => {setIsModalOpen(false); setisComponentsModalOpen(false);}}
              title={name}
              componentsModal = {isComponentsModalOpen}
            >
              <div className="details-content">
               
              </div>
            </Modal>
      </div>      
    </div>
  );
}

export default Card;