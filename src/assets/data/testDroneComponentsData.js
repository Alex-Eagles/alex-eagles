
import a8mini from "../images/a8mini.png";
import gps from "../images/herelink.png";
import motor from "../images/motors.png";
import lidar from "../images/lidar.png";
import prop from "../images/propellers.jpg";
import herelink from "../images/herelinkunit.png"
import pix from "../images/pixhawk.png"
import esc from "../images/esc.png"
import testMotors from "../images/testMotors.jpg"
import testEsc from "../images/esc.jpg"
const testDroneComponentsData = [
  {
		id: 1,
		name: "PixHawk",
		description:"The Cube Orange Pixhawk is a high-performance flight controller with a fast STM32H7 processor, triple redundant IMUs, and support for PX4 and ArduPilot. It offers reliable performance, multiple interfaces, and is ideal for advanced autonomous UAVs.",
		image:  pix,
		type: "image",
		category: "Pixhawk (Flight Controller)",
		src: pix,
		

	},
  {
		id: 2,
		name: "SIYI A8 Mini",
		description:
			"The SIYI A8 Mini is a compact 3-axis gimbal camera with a 4K 8MP Sony sensor, 6X digital zoom, and smooth FOC stabilization. It offers outputs like HDMI and Ethernet for versatile UAV use.",
		image:  a8mini,
		type: "image",
		category: "Camera",
		src: a8mini,
		
	},
  {
		id: 3,
        name: "GPS HERE3+",
		description:
			"The Here3+ GPS is a high-precision GNSS module that supports multiple satellite constellations and features RTK capability for centimeter-level accuracy. It includes a built-in compass, and supports CAN protocol for reliable, low-latency communication.",
		image: gps,
		type: "image",
		category: "GPS",
		src: gps,


    },
  {
		id: 4,
		name: "SIYI Herelink",
		description:
			"The Herelink system is an all-in-one ground control system that combines RC control, HD video transmission, telemetry, and Wi-Fi over a single 2.4GHz digital link, making it ideal for long-range UAV operations.",
		image: herelink,
		type: "image",
		category: "Herelink",
		src: herelink,
	},
	{
		id: 5,
		name: "Motors",
		description:
			"We're using a small 1400KV brushless motor in our test drone for its high RPM and efficiency, making it ideal for lightweight, responsive flight.",
		image: testMotors,
		type: "image",
		category: "Motors",
		src: testMotors,
		
	},
	{
		id: 6,
		name: "ESC",
		description:
			"We're using 30A brushless ESCs to control the 1400KV motors on our test drone. These ESCs efficiently regulate power delivery, ensuring smooth throttle response and stable flight performance.",
		image: testEsc,
		type: "image",
		category: "ESC",
		src: testEsc,
		
	},
  
  
  
  
];

export default testDroneComponentsData;