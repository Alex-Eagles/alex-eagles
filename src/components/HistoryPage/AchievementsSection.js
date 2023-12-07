import { Typography, Stack, Container } from "@mui/material";
import useAnimate from "../../hooks/use-animate";
import PublicationCard from "../PublicationsPage/PublicationCard";
import publicationData from "../../assets/data/publicationData";
import HistoryTimeline from "./HistoryTimeline";

const AchievmentsSection = () => {
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
					Our Achievments
				</Typography>
				<Typography
					variant="h6"
					sx={{
						textAlign: "center",
						fontWeight: 300,
						mb: 4,
					}}>
					Our hitory and proudest accomplishments.
				</Typography>
			</Stack>
			<HistoryTimeline />
		</Container>
	);
};

export default AchievmentsSection;
