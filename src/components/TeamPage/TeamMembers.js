import { Box } from "@mui/material";
import TeamMemberCard from "./TeamMemberCard";
import teamMemberData from "../../assets/data/teamMemberData";

const TeamMembers = () => {
	return (
		<Box
			maxWidth="lg"
			sx={{
				mt: 4,
				display: "flex",
				flexWrap: "wrap",
				justifyContent:
					window.innerWidth > 600 ? "center" : "space-around",
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
	);
};

export default TeamMembers;
