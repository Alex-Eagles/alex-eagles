import React from "react";
import "./TeamMemberCard.css";

const TeamMemberCard = ({ name, role, image }) => {
	return (
		<div className="card">
			<div className="img-container">
				<img src={image} style={{ width: '100%' }} />
			</div>
			<div className="container">
				<h3>{name}</h3>
				<p>{role}</p>
			</div>
		</div>
	);
};

export default TeamMemberCard;