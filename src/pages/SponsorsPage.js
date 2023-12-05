import HomeSection from "../components/HomeSection/HomeSection";
import AnimatedPage from "./AnimatedPage";
import background from "../assets/images/kXUY9hyetVzhZ2scwJP7p3-1200-80.jpg";
import { Box, Typography } from "@mui/material";
import Footer from "../components/Footer/Footer";
import Background from "../components/Background/Background";

const SponsorsPage = () => {
	return (
		<>
			<AnimatedPage>
				<Background background={background} />
				<HomeSection
					title="Our Sponsors."
					subtitle="Our sponsors help us every step of the way."
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
					}}></Box>
				<Footer />
			</AnimatedPage>
		</>
	);
};

export default SponsorsPage;
