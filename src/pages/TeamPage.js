import { Box, Stack, Typography } from "@mui/material";
import AnimatedPage from "./AnimatedPage";
import background from "../assets/images/eagles4.png";
import HomeSection from "../components/HomeSection/HomeSection";
import Footer from "../components/Footer/Footer";
import Background from "../components/Background/Background";
import TeamMembersSection from "../components/TeamPage/TeamMembersSection";

const TeamPage = () => {
	return (
		<>
			<AnimatedPage>
				<Background background={background} />
				<HomeSection
					title="The Eagles"
					subtitle="Our team are ambitious, creative and innovative engineers who are passionate about what they do."
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
					<TeamMembersSection />
				</Box>
				<Footer />
			</AnimatedPage>
		</>
	);
};

export default TeamPage;
