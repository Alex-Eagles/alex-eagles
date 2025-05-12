import video from "../videos/oldDrone.MOV"
import video2 from "../videos/Drone.MOV"
import cad1 from "../images/droneimages/cad1.png"
import cad2 from "../images/droneimages/cad2.jpg"
import cad3 from "../images/droneimages/cad3.jpg"
import cad4 from "../images/droneimages/cad4.jpg"
import cad5 from "../images/droneimages/cad5.png"
import irl from "../images/droneimages/Ablakash_irl_itay.jpeg"
import carbon from "../images/droneimages/carbon fiber manufacturing.jpeg"
import assembly from "../images/droneimages/assembly.jpg"
import propulsionVideo from "../videos/Itay-videos/propulsion.MOV"
import airdrop1 from "../images/droneimages/airdrop1.jpg"
import airdrop2 from "../images/droneimages/airdrop2.jpg"
import airdrop3 from "../images/droneimages/airdrop3.jpg"
import testingVideo from "../videos/Itay-videos/testingVideo - Trim.mp4"
// src/data/media.js
export const mediaItems = [
  {
    id: 1,
    category: "Airframe",
   
    title: "",
    caption: "Our development process involved multiple design iterations, each building on the lessons of the last. This continuous refinement allowed us to converge on an airframe that delivers optimal performance for our mission requirements. . Before finalizing our design, we manufactured multiple prototypes using cheap plywood to validate our designs",
    media: [
      {
        type : "image",
        src: irl,


      },
      {
        type: "image",
        src: cad1,
        
      },
      {
        type:'image',
        src: cad2,
      },
      {
        type:'image',
        src: cad3,
      },
      {
        type:'image',
        src: cad4,
      },
      {
        type:'image',
        src: cad5,


      },
      

    
      
    ]
      
    
  },
 {
    id: 2,
    category: "Manufacturing",
    title: "",
    caption: "The drone’s airframe is constructed primarily from carbon fiber sheets and tubes, chosen for their excellent strength-to-weight ratio and high stiffness. This material selection ensures structural integrity under dynamic loads while minimizing overall weight, contributing to improved flight efficiency and maneuverability. The components were precisely designed and CNC-cut to ensure accurate fit and alignment during assembly. The modular design approach also allows for quick maintenance, part replacement, and system upgrades.",
    media: [
      {
        type: "image",
        src: carbon,
      },
      
    ],
 },
 {
    id: 3,
    category: "Assembly",
    title: "",
    caption: " Following the completion of the final airframe, the drone was meticulously assembled. All screws and fasteners were securely tightened to prevent loosening due to in-flight vibrations, ensuring structural integrity and safety. Additionally, all components were properly installed, and wiring was neatly routed to maintain organization and reliability during operation.",
    media: [
      {
        type: "image",
        src: assembly,
      },
     
    ],
 },
  {
      id: 4,
      category: "Propulsion system",
      title: "",
      caption: "Our state-of-the-art propulsion system utilizes T-motors P80III waterproof, Dust resistant, and extremely durable motors compatible for a UAV of this scale, providing more than enough thrust to effectively maneuver our drone at high speeds. Paired with 4 Alpha series 80A Electronic speed controllers, Itay can easily perform the missions required in record time. Our propulsion system is powered by 2 TATTU 28000 mAh 6S batteries connected in series, providing ample flight time for the competition without discharging below the safety margin of the cells.",
      media: [
        {
          type: "video",
          src: propulsionVideo,
        },
        
        
      ],
    },
    {
      id: 5,
      category: "Airdrop Mechanism",
      title: "",
      caption: "We explored various mechanisms suitable for our drone and the mission objective. Ultimately, we opted for a winch mechanism. This mechanism proved to be straightforward and efficient for payload deployment. It comprises four DC-motors, each coupled with a pulley that securely holds the payload. The simplicity of the mechanism facilitates easier assembly, reduces the likelihood of failures, and ensures consistent outcomes, making it an ideal solution for reliable and repeatable tasks. Additionally, the compact and lightweight frame we designed accommodates stringent weight requirements. Given the mission’s objectives, we prioritized minimizing the duration of the dropping/hovering phase. Consequently, we determined the necessary drop speed to complete the mission within the allocated time frame and selected the appropriate motors accordingly.",
      media: [
        {
          type: "image",
          src: airdrop1,
        },
        {
          type: "image",
          src: airdrop2,
        },
        {
          type: "image",
          src: airdrop3,
        }
      ],
    },
    {
      id: 6,
      category: "Testing",
      title: "",
      caption: "To ensure reliability, performance, and safety, we conducted numerous flight tests across various phases of development. Each test flight was designed to validate specific subsystems, including propulsion, flight stability, navigation, payload delivery, and autonomous functionality. ",
      media: [
        {
          type: "video",
          src: testingVideo,
        },
        
      ],
    },
   
  // …and so on for each stage
];
