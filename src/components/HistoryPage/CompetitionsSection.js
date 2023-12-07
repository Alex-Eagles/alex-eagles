import { Typography, Stack, Container, Box } from "@mui/material";
import useAnimate from "../../hooks/use-animate";
import competitionData from "../../assets/data/competitionData";
import CompetitionCard from "./CompetitionCard";

const CompetitionsSection = () => {
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
					The Competitions
				</Typography>
				<Typography
					variant="h6"
					sx={{
						textAlign: "center",
						fontWeight: 300,
						mb: 4,
					}}>
					Where we compete to showcase our innovations
				</Typography>
				{competitionData.map((competition, index) => {
					return (
						<CompetitionCard
							key={index}
							index={index}
							name={competition.name}
							image={competition.image}
							description={competition.description}
						/>
					);
				})}
			</Stack>
		</Container>
	);
};

export default CompetitionsSection;
