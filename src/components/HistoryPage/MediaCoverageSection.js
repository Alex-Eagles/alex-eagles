import { Typography, Stack, Container } from "@mui/material";
import useAnimate from "../../hooks/use-animate";
import mediaCoverageData from "../../assets/data/mediaCoverageData";
import MediaCoverageCard from "./MediaCoverageCard";

const MediaCoverageSection = () => {
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
					Media Coverage
				</Typography>
				<Typography
					variant="h6"
					sx={{
						textAlign: "center",
						fontWeight: 300,
						mb: 4,
					}}>
					We've been featured on several media outlets.
				</Typography>
			</Stack>
			<Stack
				sx={{
					display: "flex",
					flexDirection: window.innerWidth > 600 ? "row" : "column",
					flexWrap: "wrap",
					justifyContent:
						window.innerWidth > 600 ? "space-between" : "center",
					alignItems: window.innerWidth > 600 ? "left" : "center",
					// flexWrap: "wrap",
					px: 4,
					mb: 8,
				}}>
				{mediaCoverageData.map((mediaCoverage, index) => (
					<MediaCoverageCard
						key={index}
						image={mediaCoverage.image}
						videoLinks={mediaCoverage.videoLinks}
						articleLinks={mediaCoverage.articleLinks}
					/>
				))}
			</Stack>
		</Container>
	);
};

export default MediaCoverageSection;
