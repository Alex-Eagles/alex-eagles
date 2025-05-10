import sae from "../images/sae.png";
import uavc from "../images/uavc.png";
import suas from "../images/suas.png";

const competitionData = [
	{
		name: <span style={{ color: "#FFFFFF" }}>SAE Aero Design</span>, // Explicitly set to white
		description:
		<span style={{ color: "#FFFFFF" }}>An esteemed international aerospace engineering event, conducted under the supervision of Lockheed Martin Co., challenges aspiring students to design and construct cutting-edge aircraft.</span>,
		image: sae,
	},
	{
		name: <span style={{ color: "#FFFFFF" }}>SUAS - Student Unmanned Aerial Systems</span>, // Explicitly set to white
		description:
		<span style={{ color: "#FFFFFF" }}>An arena for student teams in unmanned aerial systems (UAS) or drones, this competition involves designing, building, and operating autonomous aerial vehicles for diverse and challenging missions.</span>,
		image: suas,
	},
	{
		name: <span style={{ color: "#FFFFFF" }}>UAVC - Unmanned Aerial Vehicle Challenge</span>, // Explicitly set to white
		description:
		<span style={{ color: "#FFFFFF" }}>This competition immerses student teams in the domain of unmanned aerial systems (UAS) or drones. Teams engage in the intricate process of designing, constructing, and operating autonomous aerial vehicles for competitive missions.</span>,
		image: uavc,
	},
];

export default competitionData;
