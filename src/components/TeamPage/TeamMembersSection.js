import { Box, Container, Typography } from "@mui/material";
import TeamMemberCard from "./TeamMemberCard";
import SectionHeading from "../SectionHeading/SectionHeading";


const TeamMembersSection = ({ title, subtitle, members }) => {

	return (
		<Container maxWidth="false" >
			{title !== "" && subtitle !== "" && (<SectionHeading
				title={title}
				subtitle={subtitle}
			/>)}
			<Box
				sx={{
					// mt: 4,
					display: "flex",
					flexWrap: "wrap",
					flexDirection: "row",
					justifyContent: "center",
				}}>
				{members.length === 0 && (
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
				{members.map((member, index) => {
					return (
						<TeamMemberCard
							key={index}
							name={member.name}
							role={member.role}
							image={member.image}
						/>
					);
				})}
			</Box>
		</Container>
	);
};

export default TeamMembersSection;