import { Box, Typography, Stack, Container } from "@mui/material";
import TeamMemberCard from "./TeamMemberCard";
import teamMemberData from "../../assets/data/teamMemberData";
import useAnimate from "../../hooks/use-animate";

const TeamMembersSection = () => {
	const elementRef = useAnimate("animate", false);

	return (
		<Container maxWidth="lg">
			<Stack
				ref={elementRef}
				sx={{
					opacity: 0,
					transition: "all 2s ease",
				}}>
				<Typography
					variant="h4"
					sx={{
						textAlign: "center",
						fontWeight: 400,
						mb: 2,
					}}>
					Our Team
				</Typography>
				<Typography
					variant="h6"
					sx={{
						textAlign: "center",
						fontWeight: 300,
						mb: 4,
					}}>
					Meet the team who make the magic happen.
				</Typography>
			</Stack>
			<Box
				sx={{
					// mt: 4,
					display: "flex",
					flexWrap: "wrap",
					flexDirection: "row",
					justifyContent:
						window.innerWidth > 600 ? "center" : "space-between",
				}}>
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
