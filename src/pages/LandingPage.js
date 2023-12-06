import HomeSection from "../components/HomeSection/HomeSection";
import AnimatedPage from "./AnimatedPage";
import background from "../assets/images/卖点2-scaled.jpg";
import { Box, Typography, Stack } from "@mui/material";
import Footer from "../components/Footer/Footer";
import Background from "../components/Background/Background";
import useAnimate from "../hooks/use-animate";

const LandingPage = () => {
	const elementRef = useAnimate("animate", false);

	return (
		<>
			<AnimatedPage>
				<Background background={background} />
				<HomeSection
					title="Design. Build. Innovate."
					subtitle="Soar like an eagle."
					callToAction={true}
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
							Our Mission
						</Typography>
						<Typography
							variant="h6"
							sx={{
								textAlign: "center",
								fontWeight: 300,
								mb: 4,
							}}>
							We strive for excellence in everything we do.
						</Typography>
					</Stack>
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
							Our Goals
						</Typography>
						<Typography
							variant="h6"
							sx={{
								textAlign: "center",
								fontWeight: 300,
								mb: 4,
							}}>
							We aim high
						</Typography>
					</Stack>
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
							Our Work
						</Typography>
						<Typography
							variant="h6"
							sx={{
								textAlign: "center",
								fontWeight: 300,
								mb: 4,
							}}>
							We build the future
						</Typography>
					</Stack>
				</Box>
				<Footer />
			</AnimatedPage>
		</>
	);
};

export default LandingPage;
