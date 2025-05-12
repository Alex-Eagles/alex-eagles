import React, {  useState,useMemo } from "react";
import "../../styles/desc.css";
import Card from "./Card";

function Desc({ page }) {
  
  
  const pages = [
    {
      name: "IItay",
      location: "SUAS, USA",
      description:
        "Itay is spearheading our next-gen VTOL research with a focus on hybrid propulsion.",
    },
    {
      name: "Taco",
      location: "UAVC, Egypt",
      description:
        "Our Fixed Wing platform delivers exceptional endurance and payload flexibility.",
    },
    {
      name: "Test Drone",
      location: "Alexandria, Faculty of Engineering, Egypt",
      description:
        "Our test drone where we test our new components and technologies.",
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