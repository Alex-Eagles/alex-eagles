import React, {  useState,useMemo } from "react";
import "../../styles/desc.css";
import Card from "./Card";

function Desc({ page }) {
  
  
  const pages = [
    {
      name: "Itay",
      location: "SUAS, USA",
      description:
        "Alex Eagles' competition vehicle for SUAS 2025",
    },
    {
      name: "Taco",
      location: "UAVC, Egypt",
      description:
        "Our Fixed Wing vehicle delivers exceptional endurance and payload flexibility.",
    },
    {
      name: "Test Drone",
      location: "Alexandria, Faculty of Engineering, Egypt",
      description:
        "Our test drone where we test our new components and technologies before large scale deployment.",
    }
  ];

  // Pick page 0 or 1 (fallback to 0)
  const current = useMemo(() => pages[page] || pages[2], [page, pages]);
  

  return (
    <div className="desc">
      <div className="info">
      <Card
        name={current.name}
        location={current.location}
        description={current.description}
      />
      

      </div>
      
      
    </div>
  );
}

export default Desc;