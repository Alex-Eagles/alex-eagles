import React from "react";
import "./TeamMemberCard.css";

const TeamMemberCard = ({ name, role, image }) => {
	return (
		<div className="card">
			<img src={image} style={{ width: '100%' }} />
			<div className="container">
				<h3>{name}</h3>
				<p style={{ color: "#777" }}>{role}</p>
			</div>
		</div>
	);
};

export default TeamMemberCard;