import uavc2024 from "../images/uavc-2024.jpg";
import suas2023 from "../images/suas-2023.jpg";
import sae20221 from "../images/sae-2022-1.jpeg";
import sae20222 from "../images/sae-2022-2.jpeg";
import sae2021 from "../images/sae-2021.png";
import sae2020 from "../images/sae-2020.png";
import sae2019 from "../images/sae-2019.jpeg";
import sae2018 from "../images/sae-2018.png";
import sae2017 from "../images/sae-2017.png";

const achievementData = [
	
	{
		achievements: [
			{
				title: "5th Place",
				competition: <span style={{ color: "#FFFFFF" }}>UAVC</span>,
				images: [uavc2024],
			},
		],
		year: "2024",
	},
	{
		achievements: [
			{
				title: "11th Place - Overall",
				competition: <span style={{ color: "#FFFFFF" }}>SAE Aero Design</span>,
				images: [suas2023],
			},
		],
		year: "2023",
	},
	{
		achievements: [
			{
				title: "1st Place - Best Design",
				competition: <span style={{ color: "#FFFFFF" }}>SAE Aero Design</span>,
			},
			{
				title: "1st Place - Best Presentation",
				competition: <span style={{ color: "#FFFFFF" }}>SAE Aero Design</span>,
				images: [sae20221, sae20222],
			},
		],
		year: "2022",
	},
	{
		achievements: [
			{ 
				title: "Best Design Award", 
				competition: <span style={{ color: "#FFFFFF" }}>UAVC</span> 
			},
			{
				title: "4th Place - Overall",
				competition: <span style={{ color: "#FFFFFF" }}>SAE Aero Design</span>,
				images: [sae2021],
			},
		],
		year: "2021",
	},
	{
		achievements: [
			{
				title: "3rd Place - Overall",
				competition: <span style={{ color: "#FFFFFF" }}>SAE Aero Design</span>,
				images: [sae2020],
			},
		],
		year: "2020",
	},
	{
		achievements: [
			{
				title: "3rd Place - Best Design",
				competition: <span style={{ color: "#FFFFFF" }}>SAE Aero Design</span>,
				images: [sae2019],
			},
		],
		year: "2019",
	},
	{
		achievements: [
			{
				title: "1st Place - Best Design",
				competition: <span style={{ color: "#FFFFFF" }}>SAE Aero Design</span>,
				images: [sae2018],
			},
		],
		year: "2018",
	},
	{
		achievements: [
			{
				title: "2nd Place - Best Design",
				competition: <span style={{ color: "#FFFFFF" }}>SAE Aero Design</span>,
				images: [sae2017],
			},
		],
		year: "2017",
	},
	{
		year: "2013",
		achievements: [
			{
				title: "Alex Eagles is Established",
				competition:
				<span style={{ color: "#FFFFFF" }}>Established in 2013, Alex Eagles is a dynamic and diverse group of 40 engineering students from Alexandria University, specializing in various fields, such as mechanical and computer engineering.</span>,
				
			},
		],
	},
];

export default achievementData;
