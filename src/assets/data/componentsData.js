import a8mini from "../images/a8mini.png";
import gps from "../images/herelink.png";
import motor from "../images/motors.png";
import lidar from "../images/lidar.png";
import prop from "../images/propellers.jpg";
import herelink from "../images/herelinkunit.png"
import pix from "../images/pixhawk.png"
import esc from "../images/esc.png"
const componentsData = [
	{
		id: 1,
		name: "Pixhawk (Flight Controller)",
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
		name: "P80 Brushless Motors",
		description:
			"Our state-of-the-art propulsion system utilizes T-motors P80III 120kv waterproof, Dust resistant, and extremely durable motors compatible for a UAV of this scale, providing more than enough thrust to effectively maneuver our drone at high speeds.",
		image:  motor,
		type: "image",
		category: "Motor",
		src: motor,

	},
    {
		id: 4,
        name: "GPS HERE3+",
		description:
			"The Here3+ GPS is a high-precision GNSS module that supports multiple satellite constellations and features RTK capability for centimeter-level accuracy. It includes a built-in compass, and supports CAN protocol for reliable, low-latency communication.",
		image: gps,
		type: "image",
		category: "GPS",
		src: gps,


    },
    {
		id: 5,
        name: "Lidar sf45",
		description:
			"The LightWare SF45/B is a lightweight LiDAR sensor with a range of 0.2 to 50 meters, scanning up to 320° horizontally. It offers fast updates and supports USB, UART, and I2C interfaces, ideal for UAVs obstacle avoidance.",
		image: lidar,
		type: "image",
		category: "Lidar",
		src: lidar,
        
    },
    {
		id: 6,
        name: "Propellers",
        description:
            "We paired our motors with T-Motor MF3016 polymer propellers to provide us with the required thrust.",
        image: prop,
		type: "image",
		category: "Propellers",
		src: prop,

    },
	{
		id: 7,
		name: "ESCS",
		description:
			" We used Alpha Series 80A electronic speed controllers (ESCs) to drive each of the motors. These ESCs offer precise throttle control and high current handling.",
		image: esc,
		type: "image",
		category: "ESCS",
		src: esc,

	},
	{
		id: 8,
		name: "SIYI Herelink",
		description:
			"The Herelink system is an all-in-one ground control system that combines RC control, HD video transmission, telemetry, and Wi-Fi over a single 2.4GHz digital link, making it ideal for long-range UAV operations.",
		image: herelink,
		type: "image",
		category: "Herelink",
		src: herelink,
	}
	


];

export default componentsData;
