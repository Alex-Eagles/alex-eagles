import HomeSection from "../components/HomeSection/HomeSection";
import AnimatedPage from "./AnimatedPage";
import background from "../assets/images/eagles2.png";
import { Box, Typography } from "@mui/material";
import Footer from "../components/Footer/Footer";
import Background from "../components/Background/Background";
import AchievmentsSection from "../components/HistoryPage/AchievementsSection";
import CompetitionsSection from "../components/HistoryPage/CompetitionsSection";

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
						px: window.innerWidth > 600 ? 10 : 2,
						py: 5,
						display: "flex",
						flexDirection: "column",
						justifyItems: "center",
						alignItems: "center",
					}}>
					<AchievmentsSection />
					<CompetitionsSection />
				</Box>
				<Footer />
			</AnimatedPage>
		</>
	);
};

export default HistoryPage;
