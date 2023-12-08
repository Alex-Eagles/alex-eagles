import HomeSection from "../components/HomeSection/HomeSection";
import AnimatedPage from "./AnimatedPage";
import background from "../assets/images/eagles3.png";
import { Box, Typography, Stack } from "@mui/material";
import Footer from "../components/Footer/Footer";
import Background from "../components/Background/Background";
import PublicationsSection from "../components/PublicationsPage/PublicationsSection";

const PublicationsPage = () => {
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
						px: 2,
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
