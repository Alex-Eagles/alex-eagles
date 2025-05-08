import React from "react";
import TeamMemberCard from "./TeamMemberCard";

// Example team data
const teamData = [
	{
		name: "John Doe",
		role: "Frontend Developer",
		image: "https://via.placeholder.com/150",
		email: "mailto:john@example.com",
		linkedInLink: "https://linkedin.com/in/johndoe",
		gitHubLink: "https://github.com/johndoe",
	},
	{
		name: "Jane Smith",
		role: "Backend Developer",
		image: "https://via.placeholder.com/150",
		email: "mailto:jane@example.com",
		linkedInLink: "https://linkedin.com/in/janesmith",
		gitHubLink: "https://github.com/janesmith",
	},
	// Add more members...
];

const TeamGrid = () => {
	return (
		<div style={{
			display: "grid",
			gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
			gap: 24,
			padding: 24,
			justifyItems: "center",
		}}>
			{teamData.map((member, index) => (
				<TeamMemberCard key={index} {...member} />
			))}
		</div>
	);
};

export default TeamGrid;
