import HomeSection from "../components/HomeSection/HomeSection";
import AnimatedPage from "./AnimatedPage";
import background from "../assets/images/eagles5.png";
import { Box, Typography } from "@mui/material";
import Footer from "../components/Footer/Footer";
import Background from "../components/Background/Background";
import SponsorsSection from "../components/SponsorsPage/SponsorsSection";
import CallToAction from "../components/SponsorsPage/CallToAction";

const SponsorsPage = () => {
	return (
		<>
			<AnimatedPage>
				<Background background={background} />
				<HomeSection
					title="Our Backers."
					subtitle="Our sponsors help us every step of the way."
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
					<SponsorsSection />
					<CallToAction />
				</Box>
				<Footer />
			</AnimatedPage>
		</>
	);
};

export default SponsorsPage;
