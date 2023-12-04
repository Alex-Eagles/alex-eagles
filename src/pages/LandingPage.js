import HomeSection from "../components/LandingPage/HomeSection";
import AnimatedPage from "./AnimatedPage";
import background from "../assets/images/卖点2-scaled.jpg";
import { Box, Typography } from "@mui/material";
import Footer from "../components/Footer/Footer";
import Background from "../components/Background/Background";

function LandingPage() {
	return (
		<>
			{/* <Background background={background} /> */}
			<AnimatedPage>
				<Background background={background} />
				<HomeSection
					title="Design. Build. Innovate."
					subtitle="Soar like an eagle."
					callToAction={true}
				/>
				<Box
					sx={{
						height: "100vh",
						backgroundColor: "white",
						px: window.innerWidth > 600 ? 10 : 2,
						py: 5,
					}}>
					<Typography variant="h4">About Us</Typography>
				</Box>
				<Footer />
			</AnimatedPage>
		</>
	);
}

export default LandingPage;
