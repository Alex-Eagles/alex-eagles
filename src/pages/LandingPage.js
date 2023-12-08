import HomeSection from "../components/HomeSection/HomeSection";
import AnimatedPage from "./AnimatedPage";
import background from "../assets/images/eagles1.png";
import { Box } from "@mui/material";
import Footer from "../components/Footer/Footer";
import Background from "../components/Background/Background";
import SectionHeading from "../components/SectionHeading/SectionHeading";
import ProjectsSection from "../components/LandingPage/ProjectsSection/ProjectsSection";
import GoalsSection from "../components/LandingPage/GoalsSection/GoalsSection";

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
					<SectionHeading
						title="Our Mission"
						subtitle="We strive for excellence in everything we do."
					/>
					<GoalsSection />
					<ProjectsSection />
				</Box>
				<Footer />
			</AnimatedPage>
		</>
	);
};

export default LandingPage;
