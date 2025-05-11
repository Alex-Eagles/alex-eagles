import HomeSection from "../components/HomeSection/HomeSection";
import AnimatedPage from "./AnimatedPage";
import backgroundPhoto from "../assets/images/team-2025.jpg";
import background from "../assets/images/bgnd-black.png"; // Corrected path or replaced file
import { Box } from "@mui/material";
import Footer from "../components/Footer/Footer";
import Background from "../components/Background/Background";
import TeamMembersSection from "../components/TeamPage/TeamMembersSection";

const TeamPage = () => {
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
						title="The Eagles"
						subtitle="Our team are ambitious, creative and innovative engineers who are passionate about what they do."
					/>
				</Box>
				<Box
					sx={{
						color: "#FFFFFF",
						px: 2,
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
