import { Box, Container, Typography } from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import TeamMemberCard from "./TeamMemberCard";
import teamMemberData from "../../assets/data/teamMemberData";
import SectionHeading from "../SectionHeading/SectionHeading";
import { useEffect, useState } from "react";

const TeamMembersSection = () => {
	const [shuffledMembers, setShuffledMembers] = useState(teamMemberData);
	const [animatingIds, setAnimatingIds] = useState([]);

	useEffect(() => {
		if (shuffledMembers.length < 2) return;

		const intervalId = setInterval(() => {
			const i = Math.floor(Math.random() * shuffledMembers.length);
			let j = Math.floor(Math.random() * shuffledMembers.length);
			while (j === i) j = Math.floor(Math.random() * shuffledMembers.length);

			const id1 = shuffledMembers[i].name;
			const id2 = shuffledMembers[j].name;

			// Step 1: Fade out
			setAnimatingIds([id1, id2]);

			// Step 2: Swap after fade out
			setTimeout(() => {
				setShuffledMembers((prev) => {
					const newArray = [...prev];
					[newArray[i], newArray[j]] = [newArray[j], newArray[i]];
					return newArray;
				});
				setAnimatingIds([]);
			}, 500); // Match fade-out duration
		}, Math.random() * 3000 + 6000); // Every 6-9 seconds

		return () => clearInterval(intervalId);
	}, [shuffledMembers]);

	return (
		<Container maxWidth="false">
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
				<AnimatePresence>
					{shuffledMembers.map((member, index) => {
						return (
							<motion.div
								key={member.name}
								initial={{ opacity: 0 }}
								animate={{ opacity: animatingIds.includes(member.name) ? 0 : 1 }}
								exit={{ opacity: 0 }}
								transition={{ duration: 0.5 }}
							>
								<TeamMemberCard
									key={index}
									name={member.name}
									role={member.role}
									image={member.image}
									email={member.email}
									graduationYear={member.GraduationYear}
								/>
							</motion.div>
						);
					})}
				</AnimatePresence>
			</Box>
		</Container>
	);
};

export default TeamMembersSection;