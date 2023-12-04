import HomeSection from "../components/LandingPage/HomeSection";
import AnimatedPage from "./AnimatedPage";
import background from "../assets/images/UAVs-help2.jpg";
import { Box, Typography } from "@mui/material";
import Footer from "../components/Footer/Footer";
import Background from "../components/Background/Background";
import TeamMembers from "../components/TeamPage/TeamMembers";

function TeamPage() {
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
						// height: "100vh",
						backgroundColor: "white",
						px: window.innerWidth > 600 ? 10 : 2,
						py: 5,
					}}>
					<Typography
						variant="h4"
						sx={{
							textAlign: "center",
							fontWeight: 400,
							mb: 2,
						}}>
						Our Team
					</Typography>
					<Typography
						variant="h6"
						sx={{
							textAlign: "center",
							fontWeight: 300,
							mb: 4,
						}}>
						Meet the team who make the magic happen.
					</Typography>
					<TeamMembers />
				</Box>
				<Footer />
			</AnimatedPage>
		</>
	);
}

export default TeamPage;
