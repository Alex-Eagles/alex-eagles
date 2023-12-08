import { Container } from "@mui/material";
import SectionHeading from "../../SectionHeading/SectionHeading";
import HistoryTimeline from "./HistoryTimeline";

const AchievmentsSection = () => {
	return (
		<Container maxWidth="lg">
			<SectionHeading
				title="Our Achievements"
				subtitle="Our history and proudest accomplishments."
			/>
			<HistoryTimeline />
		</Container>
	);
};

export default AchievmentsSection;
