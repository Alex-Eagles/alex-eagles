import { Stack, Container, Box } from "@mui/material";
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
					flexDirection: "row",
					flexWrap: "wrap",
					justifyContent: "center",
					alignItems: "center",
					gap: 2, // Add spacing between items
					mb: 8,
				}}>
				{mediaCoverageData.map((mediaCoverage, index) => (
					<Box
						key={index}
						sx={{
							backgroundColor: "#FFFFFF",
							borderRadius: 3,
							p: 2,
							mb: 2,
							boxShadow: 3,
							//maxWidth: "calc(50% - 16px)",
						}}
					>
						<MediaCoverageCard
							index={index}
							image={mediaCoverage.image}
							media={mediaCoverage.media}
						/>
					</Box>
				))}
			</Stack>
		</Container>
	);
};

export default MediaCoverageSection;
