import HomeSection from "../components/HomeSection/HomeSection";
import AnimatedPage from "./AnimatedPage";
import background from "../assets/images/eagles-2.png";
import { Box, Typography } from "@mui/material";
import Footer from "../components/Footer/Footer";
import Background from "../components/Background/Background";
import AchievmentsSection from "../components/HistoryPage/AcheivementsSection/AchievementsSection";
import CompetitionsSection from "../components/HistoryPage/CompetitionsSection/CompetitionsSection";
import MediaCoverageSection from "../components/HistoryPage/MediaCoverageSection/MediaCoverageSection";

const HistoryPage = () => {
	return (
		<>
			<AnimatedPage>
				<Background background={background} />
				<HomeSection
					title="We've come a long way."
					subtitle="Read about the feats the Eagles have accomplished."
				/>
				<Box
					sx={{
						backgroundColor: "white",
						px: 2,
						py: 5,
						display: "flex",
						flexDirection: "column",
						justifyItems: "center",
						alignItems: "center",
					}}>
					<AchievmentsSection />
					<MediaCoverageSection />
					<CompetitionsSection />
				</Box>
				<Footer />
			</AnimatedPage>
		</>
	);
};

export default HistoryPage;
