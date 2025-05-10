import React from "react";
import "./TeamMemberCard.css";

const TeamMemberCard = ({ name, role, image }) => {
	return (
		<div class="container">
			<img src={image} alt="Avatar" class="image" />
			<div class="overlay">
				<h3 style={{ margin: 0 }}>{name}</h3>
				<p style={{ color: "#777"}}>{role}</p>
			</div>
		</div>
	);
};

export default TeamMemberCard;