import HomeSection from "../components/HomeSection/HomeSection";
import AnimatedPage from "./AnimatedPage";
import backgroundPhoto from "../assets/images/team-2025.jpg";
import background from "../assets/images/bgnd-logo.png"; // Corrected path or replaced file
import { Box, Container } from "@mui/material";
import Footer from "../components/Footer/Footer";
import Background from "../components/Background/Background";
import PublicationsSection from "../components/PublicationsPage/PublicationsSection";

const PublicationsPage = () => {
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
						title="Our Written Work."
						subtitle="Read our contributions."
					/>
				</Box>
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
						<PublicationsSection />
					</Container>
				</Box>
				<Footer />
			</AnimatedPage>
		</>
	);
};

export default PublicationsPage;
