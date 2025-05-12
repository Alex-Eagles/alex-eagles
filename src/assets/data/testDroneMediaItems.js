import testVideo from "../videos/test-drone-videos/testDroneVideo - Trim2.mp4"
// src/data/media.js
export const testDroneMediaItems = [
  {
    id: 1,
    category: "Test Drone Development",
   
    title: "",
    caption: "The test drone was developed as a platform for learning and experimentation before deploying our work on the competition drone. We used it to test a variety of functionalities, including object detection, obstacle avoidance, and PID tuning to ensure flight stability. This process also allowed us to verify the performance of all main components in preparation for the competition.",
    media: [
      {
        type : "video",
        src: testVideo,


        },
      
    ]
      
    
  },
 

  
   
   
  // …and so on for each stage
];
