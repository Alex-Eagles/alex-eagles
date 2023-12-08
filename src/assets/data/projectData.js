import oqab from "../images/oqab.jpg";
import drone from "../images/drone.png";

const projectData = [
	{
		title: "Our Last Project",
		name: "OQAB",
		image: oqab,
		description:
			"OQAB, a highly efficient unmanned aerial vehicle, excels in cargo transport with swift delivery to remote locations. Featuring wings optimized for lifting and a structure minimizing air resistance, it carries up to 9 kilograms with minimal power consumption, less than 1000 watts during take-off. Globally acclaimed, it holds the distinguished title for the best drone design.",
	},
	{
		title: "Our Upcoming Project",
		name: "AUTONOMOUS DRONE", // TODO: Change this to the actual name of the project 'HORUS-1'
		image: drone,
		description:
			"Our inaugural fully autonomous drone system, currently in development, is designed for precise delivery of essential supplies like food, water, and medical resources to specified locations. Proficient in navigating static and dynamic obstacles using predefined waypoints, it incorporates advanced technologies like YOLO v8 for automatic object detection, localization, and classification. Built with inherent modularity, the system seamlessly integrates various sensors, expanding its capabilities to meet diverse mission requirements. Engineered for remarkable flexibility, it excels in missions up to 25km, adapting to specialized applications with precision. The system's versatility enables smooth transitions between domains, providing valuable insights across industries, making it a formidable asset for tackling complex challenges.",
	},
];

export default projectData;
