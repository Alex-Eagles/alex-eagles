import AnimatedPage from "./AnimatedPage";
import HomeSection from "../components/HomeSection/HomeSection";
import ContactSection from "../components/ContactPage/ContactSection";
import Footer from "../components/Footer/Footer";
import { Box } from "@mui/material";
import background from "../assets/images/bgnd-black.png"; // Import background
import backgroundPhoto from "../assets/images/team-2025.jpg"; // Import backgroundPhoto
import Background from "../components/Background/Background"; // Ensure Background is imported

const ContactPage = () => {
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
						title="Get in Touch."
						subtitle="Want to join our team, become a sponsor, ask a question or just say hi? Reach out now."
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
					<ContactSection />
				</Box>

				<Footer />
			</AnimatedPage>
		</>
	);
};

export default ContactPage;
