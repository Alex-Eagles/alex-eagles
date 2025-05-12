import HomeSection from "../components/HomeSection/HomeSection";
import AnimatedPage from "./AnimatedPage";
import backgroundPhoto from "../assets/images/team-2025.jpg";
import background from "../assets/images/bgnd-logo.png"; // Corrected path or replaced file
import { Box } from "@mui/material";
import Footer from "../components/Footer/Footer";
import Background from "../components/Background/Background";
import SponsorsSection from "../components/SponsorsPage/SponsorsSection";
import CallToAction from "../components/SponsorsPage/CallToAction";

const SponsorsPage = () => {
	return (
		<>
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
					zIndex: -2,
				}}
			/>
			<AnimatedPage>
				<Box
					sx={{
						position: "relative",
						height: "71.5vh",
					}}
				>
					<Background background={backgroundPhoto} />
					<HomeSection
						title="Our Backers."
						subtitle="Our sponsors help us every step of the way."
					/>
				</Box>
				<Box
					sx={{
						ycolor: "#FFFFFF",
						px: 2,
						py: 5,
						display: "flex",
						flexDirection: "column",
						justifyItems: "center",
						alignItems: "center",
					}}>
					<Box
                   sx={{
                    backgroundColor: "rgba(11, 11, 11, 0.31)",
                    borderRadius: 3,
                    p: 4,
                    color: "#FFFFFF",
                }}>
						<SponsorsSection />
						<CallToAction />
					</Box>
				</Box>
				<Footer />
			</AnimatedPage>
		</>
	);
};

export default SponsorsPage;
