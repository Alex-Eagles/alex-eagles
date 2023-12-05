import { Box, Stack, Typography } from "@mui/material";
import AnimatedPage from "./AnimatedPage";
import background from "../assets/images/卖点2-scaled.jpg";
import HomeSection from "../components/HomeSection/HomeSection";
import Footer from "../components/Footer/Footer";
import Background from "../components/Background/Background";
import TeamMembers from "../components/TeamPage/TeamMembers";
import useAnimate from "../hooks/use-animate";

const TeamPage = () => {
	const elementRef = useAnimate("animate", false);

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
					<Stack
						ref={elementRef}
						sx={{
							opacity: 0,
							transition: "all 2s ease",
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
					</Stack>
					<TeamMembers />
				</Box>
				<Footer />
			</AnimatedPage>
		</>
	);
};

export default TeamPage;
