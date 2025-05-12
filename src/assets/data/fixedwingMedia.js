import flyingVideo from "../videos/fixed-wing-videos/FixedWingFlying.mp4"
import fixedOnLand from "../videos/fixed-wing-videos/fixedWingOnLand.mp4"
import section2Image from "../images/fixedwingImages/section2.jpg"
import section3Image from "../images/fixedwingImages/section3.jpg"
import section4Image from "../images/fixedwingImages/section4.jpg"
// src/data/media.js
export const mediaItems = [
  {
    id: 1,
    category: "Overview",
    type: "video",
    src: fixedOnLand,
    title: "",
    caption: "Taco’s a fixed-wing autonomous  UAV designed to perform mapping and payload delivery missions with high power efficiency and precision." 
  },
  {
    id: 2,
    category: "Design Process",
    type: "image",
    src: section2Image,
    title: "",
    caption: "The mechanical design process is based on the iterative methodology described in Aircraft Design: A Systems Engineer Approach by Mohamed H. Sydray.  A constraint analysis is done to find the initial sizing of the aircraft followed by iterations of design and optimization of the wing, tail and propulsion system to achieve the required flight performance with the highest efficiency."
    
  },
    {
    id: 3,
    category: "Simulation",
    type: "image",
    src: section3Image,
    title: "",
    caption: "In Taco’s final stages of design and optimization the aero dynamic forces, stability and performance are verified in flow simulation tool Flow5 and finally CFD simulation tool Simscale."
    
  },
  {
    id: 4,
    category: " Structural Design ",
    type: "image",
    src: section4Image,
    title: "",
    caption: "With 10+ years of experience in UAV design the final form for Taco is drawn with finesse and optimized for minimum weight and high structural strength on Fusion 360 software. Manufacturing involved using balsa wood for the ribs, aluminum for the spar and tail boom and finally Monocote as skin. All materials chosen to satisfy the required structural strength while maintaining minimum weight."
    
  },
  {
    id: 5,
    category: "Taco in action",
    type: "video",
    src: flyingVideo,
    title: "",
    caption: "Taco’s first flight was a success, achieving a stable flight.",
  },
 
  
  // …and so on for each stage
];
