import { Box, Button, Container, Stack, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";
import { styled } from "@mui/material/styles";
import useAnimate from "../../hooks/use-animate";
import backgroundPhoto from "../../assets/images/team-2025.jpg"; // Corrected path

const StyledNavLink = styled(NavLink)(() => ({
	color: "inherit",
	textDecoration: "none",
}));

const HomeSection = ({ title, subtitle, callToAction }) => {
	const titleRef = useAnimate("animate", false);
	const descriptionRef = useAnimate("animate", false);
	const callToActionRef = useAnimate("animate", false);

	return (
		<Box sx={{ position: "relative", height: "71.5vh", width: "100%" }}>
			{/* Background Photo */}
			<Box
				sx={{
					position: "absolute",
					top: 0,
					left: 0,
					width: "100%",
					height: "100%",
					backgroundImage: `url(${backgroundPhoto})`,
					backgroundSize: "cover",
					backgroundPosition: "center",
					zIndex: 0,
				}}
			/>

			{/* Dark overlay */}
			<Box
				sx={{
					position: "absolute",
					top: 0,
					left: 0,
					width: "100%",
					height: "100%",
					backgroundColor: "rgba(0, 0, 0, 0.3)",
					zIndex: 1,
				}}
			/>

			{/* Text content */}
			<Box
				sx={{
					position: "relative",
					zIndex: 2,
					pt: 25,
					pb: 15,
					width: "100%",
				}}
			>
				<Container maxWidth="sm">
					<Typography
						ref={titleRef}
						variant="h2"
						align="center"
						color="common.white"
						sx={{
							opacity: 0,
							transition: "all 1.75s ease",
							transitionDelay: "1s",
							mb: 2,
						}}
					>
						{title}
					</Typography>
					<Typography
						ref={descriptionRef}
						variant="h6"
						align="center"
						color="common.white"
						sx={{
							opacity: 0,
							transition: "all 1.75s ease",
							transitionDelay: "1.5s",
						}}
						paragraph
					>
						{subtitle}
					</Typography>
					{callToAction && (
						<Stack
							ref={callToActionRef}
							sx={{
								pt: 2,
								opacity: 0,
								transition: "all 1s ease",
								transitionDelay: "2s",
							}}
							direction="row"
							spacing={2}
							justifyContent="center"
						>
							<StyledNavLink to="/sponsors">
								<Button variant="contained" size="large" color="primary">
									Become a Sponsor
								</Button>
							</StyledNavLink>
							<StyledNavLink to="/contact">
								<Button variant="outlined" size="large" sx={{ color: "#fff", borderColor: "#fff" }}>
									Get in Touch with Us
								</Button>
							</StyledNavLink>
						</Stack>
					)}
				</Container>
			</Box>
		</Box>
	);
};

export default HomeSection;
