import { Stack, Container } from "@mui/material";
import mediaCoverageData from "../../../assets/data/mediaCoverageData";
import MediaCoverageCard from "./MediaCoverageCard";
import SectionHeading from "../../SectionHeading/SectionHeading";

const MediaCoverageSection = () => {
	return (
		<Container maxWidth="lg">
			<SectionHeading
				title="Media Coverage"
				subtitle="We've been featured on several news outlets."
			/>
			<Stack
				sx={{
					display: "flex",
					flexDirection: window.innerWidth > 600 ? "row" : "column",
					flexWrap: "wrap",
					justifyContent:
						window.innerWidth > 600 ? "space-around" : "center",
					alignItems: window.innerWidth > 600 ? "left" : "center",
					// px: 4,
					mb: 8,
				}}>
				{mediaCoverageData.map((mediaCoverage, index) => (
					<MediaCoverageCard
						key={index}
						index={index}
						image={mediaCoverage.image}
						media={mediaCoverage.media}
					/>
				))}
			</Stack>
		</Container>
	);
};

export default MediaCoverageSection;
