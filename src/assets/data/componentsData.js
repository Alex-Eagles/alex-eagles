import a8mini from "../images/a8mini.png";
import gps from "../images/herelink.png";
import motor from "../images/motors.png";
import lidar from "../images/lidar.png";
import prop from "../images/propellers.jpg";

const componentsData = [
	{
		name: "SIYI A8 Mini",
		description:
			"The SIYI A8 Mini is a compact 3-axis gimbal camera with a 4K 8MP Sony sensor, 6X digital zoom, and smooth FOC stabilization. It offers outputs like HDMI and Ethernet for versatile UAV use.",
		image:  a8mini,
	},

	{
		name: "P80 Brushless Motors",
		description:
			"T-Motor brushless motors are high-efficiency, high-reliability motors widely used in drones and robotics. They offer strong thrust-to-weight ratios, smooth operation, and long service life, making them ideal for professional UAV applications.",
		image:  motor,
	},
    {
        name: "GPS HERE3+",
		description:
			"The Here3+ GPS is a high-precision GNSS module that supports multiple satellite constellations and features RTK capability for centimeter-level accuracy. It includes a built-in compass, and supports CAN protocol for reliable, low-latency communication.",
		image: gps,

    },
    {
        name: "Lidar sf45",
		description:
			"The LightWare SF45/B is a lightweight LiDAR sensor with a range of 0.2 to 50 meters, scanning up to 320° horizontally. It offers fast updates and supports USB, UART, and I2C interfaces, ideal for UAVs obstacle avoidance.",
		image: lidar,
        
    },
    {
        name: "Propellers",
        description:
            "Propellers are crucial components of drones, converting motor power into thrust. They come in various sizes and materials, affecting flight performance, efficiency, and stability. Proper selection is essential for optimal drone operation.",
        image: prop,
    }


];

export default componentsData;
