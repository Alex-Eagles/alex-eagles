import { Box, Container, Typography } from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import TeamMemberCard from "./TeamMemberCard";
import teamMemberData from "../../assets/data/teamMemberData";
import SectionHeading from "../SectionHeading/SectionHeading";
import { useEffect, useState } from "react";

const shuffleArray = (array) => {
	return [...array].sort(() => Math.random() - 0.5);
};

const TeamMembersSection = () => {
	const [shuffledMembers, setShuffledMembers] = useState(teamMemberData);
	const [animatingIds, setAnimatingIds] = useState([]);

	useEffect(() => {
		const shuffleTwoRandom = () => {
			const delay = Math.random() * 3000 + 6000; // Between 6s and 9s
			const timeoutId = setTimeout(() => {
				setShuffledMembers(prevMembers => {
					if (prevMembers.length < 2) return prevMembers;

					const newArray = [...prevMembers];
					let i = Math.floor(Math.random() * newArray.length);
					let j = Math.floor(Math.random() * newArray.length);
					while (j === i) {
						j = Math.floor(Math.random() * newArray.length);
					}
					// Swap elements
					const swappedIds = [newArray[i].role, newArray[j].role];
					setAnimatingIds(swappedIds);

					[newArray[i], newArray[j]] = [newArray[j], newArray[i]];

					// Clear animation flags after fade duration (500ms)
					setTimeout(() => setAnimatingIds([]), 500);
					return newArray;
				});
				shuffleTwoRandom(); // Repeat
			}, delay);
			return () => clearTimeout(timeoutId);
		};

		const cancel = shuffleTwoRandom();
		return cancel;
	}, []);

	useEffect(() => {
		console.log("Shuffled:", shuffledMembers.map(m => m.name));
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
						const isAnimating = animatingIds.includes(member.role);
						return(
						<motion.div
							key={member.role} // use a stable unique key
							layout
							initial={{ opacity: 0 }}
							animate={{ opacity: isAnimating ? 0 : 1}}
							exit={{ opacity: 0 }}
							transition={{ duration: isAnimating ? 0.5 : 0 }}
						// style={{ margin: 8 }} // optional spacing
						>
							<TeamMemberCard
								key={index}
								name={member.name}
								role={member.role}
								image={member.image}
								email={member.email}
								linkedInLink={member.linkedInLink}
								gitHubLink={member.gitHubLink}
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