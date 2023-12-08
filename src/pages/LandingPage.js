import HomeSection from "../components/HomeSection/HomeSection";
import AnimatedPage from "./AnimatedPage";
import background from "../assets/images/eagles1.png";
import { Box } from "@mui/material";
import Footer from "../components/Footer/Footer";
import Background from "../components/Background/Background";
import ProjectsSection from "../components/LandingPage/ProjectsSection/ProjectsSection";
import GoalsSection from "../components/LandingPage/GoalsSection/GoalsSection";
import MissionSection from "../components/LandingPage/MissionSection/MissionSection";

const LandingPage = () => {
	return (
		<>
			<AnimatedPage>
				<Background background={background} />
				<HomeSection
					title="Design. Build. Innovate."
					subtitle="Soar like an eagle."
					callToAction={true}
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
					<MissionSection />
					<GoalsSection />
					<ProjectsSection />
				</Box>
				<Footer />
			</AnimatedPage>
		</>
	);
};

export default LandingPage;
