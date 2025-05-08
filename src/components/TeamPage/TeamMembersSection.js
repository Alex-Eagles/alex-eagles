import React, { useEffect, useState } from "react";
import { Box, Container } from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import TeamMemberCard from "./TeamMemberCard";
import { teamMemberData as initialData } from "../../assets/data/teamMemberData";
import SectionHeading from "../SectionHeading/SectionHeading";

const MotionBox = motion(Box);

const TeamMembersSection = () => {
	const [data, setData] = useState([...initialData]);
	const [swappedIndices, setSwappedIndices] = useState(null); // Track swapped indices

	useEffect(() => {
		const interval = setInterval(() => {
			// Randomly select two indices
			const i = Math.floor(Math.random() * data.length);
			let j = Math.floor(Math.random() * data.length);
			while (j === i) {
				j = Math.floor(Math.random() * data.length);
			}

			// Save swapped indices to state
			setSwappedIndices([i, j]);

			// Swap elements
			setData(prevData => {
				const newData = [...prevData];
				[newData[i], newData[j]] = [newData[j], newData[i]];
				return newData;
			});
		}, 10000);

		return () => clearInterval(interval);
	}, [data]);

	return (
		<Container maxWidth="false">
			<SectionHeading
				title="Our Team"
				subtitle="Meet the team who make the magic happen."
			/>
			<MotionBox
				sx={{
					display: "flex",
					flexWrap: "wrap",
					flexDirection: "row",
					justifyContent: window.innerWidth > 600 ? "center" : "space-between",
				}}>
				<AnimatePresence>
					{data.map((member, index) => {
						const isSwapped = swappedIndices && (swappedIndices[0] === index || swappedIndices[1] === index);
						const initialAnimProps = isSwapped
							? { opacity: 0, scale: 0.8 }
							: { opacity: 1, scale: 1 };

						const animateAnimProps = isSwapped
							? { opacity: 1, scale: 1 }
							: { opacity: 1, scale: 1 };

						const exitAnimProps = isSwapped
							? { opacity: 0, scale: 0.8 }
							: { opacity: 1, scale: 1 };

						return (
							<motion.div
								key={member.name + member.role + index}
								layout
								initial={initialAnimProps}
								animate={animateAnimProps}
								exit={exitAnimProps}
								transition={{ duration: 0.5 }}
							>
								<TeamMemberCard
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
			</MotionBox>
		</Container>
	);
};

export default TeamMembersSection;
