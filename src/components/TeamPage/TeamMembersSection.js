import { Box, Container, Typography } from "@mui/material";
import TeamMemberCard from "./TeamMemberCard";
import teamMemberData from "../../assets/data/teamMemberData";
import SectionHeading from "../SectionHeading/SectionHeading";

const TeamMembersSection = () => {
	return (
		<Container maxWidth="lg">
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
				{/* TODO: Remove after adding team member data */}
				{teamMemberData.map((member, index) => {
					return (
						<TeamMemberCard
							key={index}
							name={member.name}
							role={member.role}
							image={member.image}
							email={member.email}
							linkedInLink={member.linkedInLink}
							gitHubLink={member.gitHubLink}
						/>
					);
				})}
			</Box>
		</Container>
	);
};

export default TeamMembersSection;
