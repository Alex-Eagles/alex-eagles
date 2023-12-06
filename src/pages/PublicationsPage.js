import HomeSection from "../components/HomeSection/HomeSection";
import AnimatedPage from "./AnimatedPage";
import background from "../assets/images/UAVs-help2.jpg";
import { Box, Typography, Stack } from "@mui/material";
import Footer from "../components/Footer/Footer";
import Background from "../components/Background/Background";
import PublicationsSection from "../components/PublicationsPage/PublicationsSection";
import useAnimate from "../hooks/use-animate";

const PublicationsPage = () => {
	const elementRef = useAnimate("animate", false);

	return (
		<>
			<AnimatedPage>
				<Background background={background} />
				<HomeSection
					title="Our Written Work."
					subtitle="Read our contributions."
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
					<PublicationsSection />
				</Box>
				<Footer />
			</AnimatedPage>
		</>
	);
};

export default PublicationsPage;
