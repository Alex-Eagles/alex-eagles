import { Box, Container, Typography } from "@mui/material";
import TeamMemberCard from "./TeamMemberCard";
import teamMemberData from "../../assets/data/teamMemberData";
import SectionHeading from "../SectionHeading/SectionHeading";
import logo from "../../assets/icons/logo.webp";
import { useEffect, useState } from "react";

const shuffleArray = (array) => {
	return [...array].sort(() => Math.random() - 0.5);
};

const TeamMembersSection = () => {
	const [shuffledMembers, setShuffledMembers] = useState(teamMemberData);
	// Shuffle team members periodically at random intervals
	useEffect(() => {
		const shufflePeriodically = () => {
			const delay = Math.random() * 30000 + 3000; // Between 3s and 6s
			const timeoutId = setTimeout(() => {
				setShuffledMembers(shuffleArray);
				shufflePeriodically(); // Repeat
			}, delay);
			return () => clearTimeout(timeoutId);
		};

		const cancel = shufflePeriodically();
		return cancel;
	}, []);

	return (
		<Container maxWidth="falsw">
			<SectionHeading
				title="Our Team"
				subtitle="Meet the team who make the magic happen."
			/>
			<Box
				sx={{
					// mt: 4,
					display: "flex",
					flexWrap: "wrap",
					flexDirection: "row",
					justifyContent:
						window.innerWidth > 600 ? "center" : "space-between",
				}}>
				{/* TODO: Remove after adding team member data */}
				{shuffledMembers.length === 0 && (
					<Typography
						variant="h5"
						component="span"
						color="primary"
						sx={{
							textAlign: "center",
							width: "100%",
							my: 8,
						}}>
						Coming Soon!
					</Typography>
				)}
				{/* TODO: Remove after adding team member data */}
				{shuffledMembers.map((member, index) => (
  				<TeamMemberCard
  				  key={index}
  				  name={member.name}
  				  role={member.role}
  				  image={member.image}
  				  email={member.email}
  				  linkedInLink={member.linkedInLink}
  				  gitHubLink={member.gitHubLink}
  				/>
))}
			</Box>
		</Container>
	);
};

export default TeamMembersSection;