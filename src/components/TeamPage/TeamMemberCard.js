import React from "react";
import "./TeamMemberCard.css";

const TeamMemberCard = ({ name, role, image }) => {
	return (
		<>
			{/* <div class="container">
				<img src={image} alt="Avatar" class="image" />
				<div class="overlay">
					<h3 style={{ margin: 0 }}>{name}</h3>
					<p style={{ color: "#777" }}>{role}</p>
				</div>
			</div> */}
			{/* <div class="container">
				<img src={image} alt="Avatar" class="image" style={{ width: '100%' }}/>
					<div class="middle">
					<h3 style={{ margin: 0 }}>{name}</h3>
					<p style={{ color: "#777" }}>{role}</p>
					</div>
			</div> */}
			<div class="card">
				<img src={image} alt="Avatar" style={{ width: '100%' }}	 />
				<div class="container">
					<h3 style={{ margin: 0 }}>{name}</h3>
					<p style={{ color: "#777" }}>{role}</p>
				</div>
			</div>
		</>
	);
};

export default TeamMemberCard;