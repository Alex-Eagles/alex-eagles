import HomeSection from "../components/HomeSection/HomeSection";
import AnimatedPage from "./AnimatedPage";
import backgroundPhoto from "../assets/images/team-2025.jpg";
import background from "../assets/images/bgnd-white.png"; // Corrected path or replaced file
import { Box, Container } from "@mui/material";
import Footer from "../components/Footer/Footer";
import Background from "../components/Background/Background";
import SectionHeading from "../components/SectionHeading/SectionHeading";
import HistoryTimeline from "../components/HistoryPage/AcheivementsSection/HistoryTimeline";
import CompetitionsSection from "../components/HistoryPage/CompetitionsSection/CompetitionsSection";
import MediaCoverageSection from "../components/HistoryPage/MediaCoverageSection/MediaCoverageSection";

const HistoryPage = () => {
	return (
		<>
			{/* Fixed background */}
			<Box
				sx={{
					position: "fixed",
					top: 0,
					left: 0,
					width: "100%",
					height: "100%",
					backgroundImage: `url(${background})`,
					backgroundSize: "cover",
					backgroundPosition: "center",
					backgroundRepeat: "no-repeat",
					
				}}
			/>

			<AnimatedPage>
				
					<Box
						sx={{
							position: "relative",
							height: "71.5vh",

						}}
					>
					<Background background={backgroundPhoto} 
					sx={{
						position: "absolute",
						top: 0,
						left: 0,
						width: "100%",
						height: "100%", 
						zIndex: 1,
					}}/>
					<HomeSection
						title="We've come a long way."
						subtitle="Read about the feats the Eagles have accomplished."
					/>
				</Box>

				{/* Achievements Section */}
				<Box
					sx={{
						width: "100%",
						display: "flex",
						justifyContent: "center",
						px: 2,
						py: 5,
						color: "#FFFFFF",
					}}
				>
					<Container
						maxWidth="lg"
						sx={{
							backgroundColor: "rgba(11, 11, 11, 0.31)",
							borderRadius: 3,
							p: 4,
							color: "#FFFFFF",
						}}
					>
						<SectionHeading
							title="Our Achievements"
							subtitle="Our history and proudest accomplishments."
						/>
						<HistoryTimeline />
					</Container>
				</Box>

				{/* Media Section */}
				<Box
					sx={{
						width: "100%",
						display: "flex",
						justifyContent: "center",
						px: 2,
						py: 5,
						color: "#FFFFFF",
					}}
				>
					<Container
						maxWidth="lg"
						sx={{
							backgroundColor: "rgba(11, 11, 11, 0.31)", // Dark background
							borderRadius: 3,
							p: 4,
							color: "#FFFFFF",
						}}
					>
						<MediaCoverageSection />
					</Container>
				</Box>

				{/* Competitions Section */}
				<Box
					sx={{
						width: "100%",
						display: "flex",
						justifyContent: "center",
						px: 2,
						py: 5,
						color: "#FFFFFF",
					}}
				>
					<Container
						maxWidth="lg"
						sx={{
							backgroundColor: "rgba(11, 11, 11, 0.31)", // Dark background
							borderRadius: 3,
							p: 4,
							color: "#FFFFFF",
						}}
					>
						<CompetitionsSection />
					</Container>
				</Box>

				<Footer />
			</AnimatedPage>
		</>
	);
};

export default HistoryPage;
