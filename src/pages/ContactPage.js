import HomeSection from "../components/HomeSection/HomeSection";
import AnimatedPage from "./AnimatedPage";
import background from "../assets/images/UAVs-help2.jpg";
import { Box, Typography } from "@mui/material";
import Footer from "../components/Footer/Footer";
import Background from "../components/Background/Background";
import ContactSection from "../components/ContactPage/ContactSection";

const ContactPage = () => {
	return (
		<>
			<AnimatedPage>
				<Background background={background} />
				<HomeSection
					title="Get in Touch."
					subtitle="Want to join our team, become a sponsor, ask a question or just say hi? Reach out now."
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
					<ContactSection />
				</Box>
				<Footer />
			</AnimatedPage>
		</>
	);
};

export default ContactPage;