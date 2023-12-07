import { Box, Button, Container, Stack, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";
import { styled } from "@mui/material/styles";
import useAnimate from "../../hooks/use-animate";

const StyledNavLink = styled(NavLink)((theme) => ({
	color: "inherit",
	textDecoration: "none",
}));

const HomeSection = (props) => {
	const titleRef = useAnimate("animate", false);
	const descriptionRef = useAnimate("animate", false);
	const callToActionRef = useAnimate("animate", false);
	const { title, subtitle, callToAction } = props;

	return (
		<Box
			sx={{
				bgcolor: "rgba(0, 0, 0, 0.6)",
				pt: 25,
				pb: 15,
				minWidth: "100vw !important",
				position: "relative",
				top: 0,
			}}>
			<Container maxWidth="sm">
				<Typography
					ref={titleRef}
					variant="h2"
					align="center"
					color="common.white"
					sx={{
						opacity: "0",
						transition: "all 1.75s ease",
						transitionDelay: "1s",
						mb: 2,
					}}>
					{title}
				</Typography>
				<Typography
					ref={descriptionRef}
					variant="h6"
					align="center"
					color="common.white"
					sx={{
						opacity: "0",
						transition: "all 1.75s ease",
						transitionDelay: "1.5s",
					}}
					paragraph>
					{subtitle}
				</Typography>
				{callToAction && (
					<Stack
						ref={callToActionRef}
						sx={{
							pt: 2,
							opacity: "0",
							transition: "all 1s ease",
							transitionDelay: "2s",
						}}
						direction="row"
						spacing={2}
						justifyContent="center">
						<StyledNavLink to="/sponsors" exact="true">
							<Button
								variant="contained"
								size="large"
								color="primary"
								disableElevation
								sx={{
									height: "100%",
									// color: "#000000",
									// backgroundColor: "#222222",
									// border: "solid #00f3b6",
									// borderWidth: 1,
									// "&:hover": {
									// 	backgroundColor: "rgba(0, 0, 0, 0)",
									// 	border: "solid #00f3b6",
									// 	borderWidth: 1,
									// 	color: "#00f3b6",
									// },
								}}>
								Become a Sponsor
							</Button>
						</StyledNavLink>
						<StyledNavLink to="/contact" exact="true">
							<Button
								variant="outlined"
								size="large"
								disableElevation
								sx={{
									height: "100%",
									color: "#ffffff",
									// color: "#00f3b6",
									borderColor: "#ffffff",
									// borderWidth: 1,
									// "&:hover": {
									// 	border: "solid #00f3b6",
									// 	backgroundColor: "#00f3b6",
									// 	borderWidth: 1,
									// 	color: "#000000",
									// },
								}}>
								Get in Touch with Us
							</Button>
						</StyledNavLink>
					</Stack>
				)}
			</Container>
		</Box>
	);
};

export default HomeSection;
