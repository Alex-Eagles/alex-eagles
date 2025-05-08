import React from "react";
import "./TeamMemberCard.css";

const iconStyle = {
	width: 24,
	height: 24,
	fill: "#555",
	transition: "all 0.3s ease",
	cursor: "pointer",
};

const iconHoverStyle = {
	transform: "translateY(-10%)",
	fill: "#305fb0",
};

const InlineIcon = ({ type }) => {
	switch (type) {
		case "email":
			return (
				<svg xmlns="http://www.w3.org/2000/svg" style={iconStyle} viewBox="0 0 24 24">
					<path d="M20 4H4a2 2 0 0 0-2 2v12a2 
						2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 
						2 0 0 0-2-2zm0 2v.01L12 13 4 6.01V6h16zM4 
						18V8l8 5 8-5v10H4z" />
				</svg>
			);
		case "github":
			return (
				<svg xmlns="http://www.w3.org/2000/svg" style={iconStyle} viewBox="0 0 24 24">
					<path d="M12 0C5.37 0 0 5.37 0 
						12c0 5.3 3.438 9.8 8.205 
						11.385.6.113.82-.26.82-.577v-2.04c-3.338.725-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.729.083-.729 
						1.205.085 1.84 1.237 1.84 
						1.237 1.07 1.835 2.807 1.305 3.492.997.107-.775.418-1.305.762-1.605-2.665-.304-5.467-1.333-5.467-5.931 
						0-1.31.468-2.38 1.236-3.22-.123-.303-.535-1.524.117-3.176 
						0 0 1.008-.322 3.3 1.23a11.49 
						11.49 0 0 1 3.003-.404c1.02.005 
						2.045.137 3.003.404 2.29-1.552 
						3.296-1.23 3.296-1.23.653 1.653.241 2.874.118 
						3.176.77.84 1.234 1.91 1.234 
						3.22 0 4.61-2.807 5.625-5.48 
						5.921.43.372.823 1.102.823 
						2.222v3.293c0 .319.218.694.825.576C20.565 
						21.796 24 17.298 24 12c0-6.63-5.37-12-12-12z" />
				</svg>
			);
		case "linkedin":
			return (
				<svg xmlns="http://www.w3.org/2000/svg" style={iconStyle} viewBox="0 0 24 24">
					<path d="M4.98 3.5C4.98 4.6 4.1 5.5 3 
						5.5S1.02 4.6 1.02 3.5 1.9 1.5 3 
						1.5s1.98.9 1.98 2zm.02 
						4.5H1V21h4V8zm7.5 0h-3.9V21h4v-6.5c0-1.7 
						2-1.8 2 0V21h4v-7.2c0-4.1-4.5-3.9-6-1.9V8z" />
				</svg>
			);
		default:
			return null;
	}
};

const TeamMemberCard = ({ name, role, image, email, linkedInLink, gitHubLink }) => {
	return (
		/*<div
			style={{
				width: 180,
				margin: 16,
				textAlign: "center",
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				transition: "opacity 1s ease",
			}}>
			<img
				src={image}
				alt={name}
				style={{
					width: 150,
					height: 150,
					borderRadius: "50%",
					objectFit: "cover",
				}}
			/>
			<div style={{ marginTop: 12 }}>
				<h3 style={{ margin: 4 }}>{name}</h3>
				<p style={{ color: "#777", marginBottom: 12 }}>{role}</p>
				<div style={{ display: "flex", justifyContent: "center", gap: 12 }}>
					<a href={email} target="_blank" rel="noreferrer" title="Email">
						<InlineIcon type="email" />
					</a>
					<a href={gitHubLink} target="_blank" rel="noreferrer" title="GitHub">
						<InlineIcon type="github" />
					</a>
					<a href={linkedInLink} target="_blank" rel="noreferrer" title="LinkedIn">
						<InlineIcon type="linkedin" />
					</a>
				</div>
			</div>
		</div>*/
		<div class="container">
			<img src={image} alt="Avatar" class="image" />
			<div class="overlay">
				<h3 style={{ margin: 4 }}>{name}</h3>
				<p style={{ color: "#777", marginBottom: 12 }}>{role}</p>
				<div style={{ display: "flex", justifyContent: "center", gap: 12 }}>
					<a href={email} target="_blank" rel="noreferrer" title="Email">
						<InlineIcon type="email" />
					</a>
					<a href={gitHubLink} target="_blank" rel="noreferrer" title="GitHub">
						<InlineIcon type="github" />
					</a>
					<a href={linkedInLink} target="_blank" rel="noreferrer" title="LinkedIn">
						<InlineIcon type="linkedin" />
					</a>
				</div></div>
		</div>
	);
};

export default TeamMemberCard;





// import { Card, CardContent, Typography, Avatar, Stack } from "@mui/material";
// import { LinkedIn, GitHub, EmailOutlined } from "@mui/icons-material";
// import useAnimate from "../../hooks/use-animate";

// const TeamMemberCard = (props) => {
// 	const { name, role, image, email, linkedInLink, gitHubLink } = props;
// 	const elementRef = useAnimate("animate", false);

// 	return (
// 		<Card
// 			ref={elementRef}
// 			sx={{
// 				maxWidth: 150,
// 				mx: window.innerWidth > 600 ? 4 : 0,
// 				my: 4,
// 				boxShadow: "none",
// 				display: "flex",
// 				flexDirection: "column",
// 				alignItems: "center",
// 				justifyContent: "center",
// 				opacity: 0,
// 				transition: "all 1s ease",
// 			}}>
// 			<Avatar
// 				alt={name}
// 				src={image}
// 				sx={{ width: 150, height: 150, mx: "auto" }}
// 			/>
// 			<CardContent
// 				sx={{
// 					display: "flex",
// 					flexDirection: "column",
// 					alignItems: "center",
// 					justifyContent: "center",
// 					textAlign: "center",
// 				}}>
// 				<Typography gutterBottom variant="h5" component="div">
// 					{name}
// 				</Typography>
// 				<Typography variant="body2" color="text.secondary">
// 					{role}
// 				</Typography>
// 				<Stack
// 					direction="row"
// 					spacing={1}
// 					sx={{
// 						mt: 2,
// 						display: "flex",
// 						flexDirection: "row",
// 						alignItems: "center",
// 						justifyContent: "center",
// 					}}>
// 					<a
// 						href={email}
// 						target="_blank"
// 						rel="noopener noreferrer"
// 						style={{
// 							textDecoration: "none",
// 							color: "inherit",
// 						}}>
// 						<EmailOutlined
// 							sx={{
// 								transform: "scale(1.15)",
// 								transition: "all 0.5s ease",
// 								"&:hover": {
// 									transform: "translateY(-10%) scale(1.15)",
// 									color: "#305fb0",
// 								},
// 							}}
// 						/>
// 					</a>
// 					<a
// 						href={gitHubLink}
// 						target="_blank"
// 						rel="noopener noreferrer"
// 						style={{
// 							textDecoration: "none",
// 							color: "inherit",
// 						}}>
// 						<GitHub
// 							sx={{
// 								transform: "scale(0.95)",
// 								transition: "all 0.5s ease",
// 								"&:hover": {
// 									transform: "translateY(-10%) scale(0.95)",
// 									color: "#305fb0",
// 								},
// 							}}
// 						/>
// 					</a>
// 					<a
// 						href={linkedInLink}
// 						target="_blank"
// 						rel="noopener noreferrer"
// 						style={{
// 							textDecoration: "none",
// 							color: "inherit",
// 						}}>
// 						<LinkedIn
// 							sx={{
// 								transform: "scale(1.1)",
// 								transition: "all 0.5s ease",
// 								"&:hover": {
// 									transform: "translateY(-10%) scale(1.1)",
// 									color: "#305fb0",
// 								},
// 							}}
// 						/>
// 					</a>
// 				</Stack>
// 			</CardContent>
// 		</Card>
// 	);
// };

// export default TeamMemberCard;
