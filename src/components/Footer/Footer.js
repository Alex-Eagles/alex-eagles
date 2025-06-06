import React from "react";
import { Box, Container, Grid, Typography, Stack } from "@mui/material";
import { NavLink } from "react-router-dom";
import { styled } from "@mui/material/styles";
import {
	EmailOutlined,
	Facebook,
	GitHub,
	Instagram,
	LinkedIn,
	PhoneAndroidOutlined,
} from "@mui/icons-material";
import useAnimate from "../../hooks/use-animate";

const StyledNavLink = styled(NavLink)((theme) => ({
	color: " #000000",
	fontSize: "1.1rem",
	fontWeight: "300",
	transition: "all 0.5s ease",
	textDecoration: "none",
	"&:hover": {
		// textDecoration: "underline",
		color: "#305fb0",
	},
}));

const StyledList = styled("ul")((theme) => ({
	listStyle: "none",
	paddingLeft: 0,
	"& li": {
		marginBottom: 16,
		marginLeft: 16,
	},
}));

const Footer = () => {
	const currentYear = new Date().getFullYear();
	const grid1Ref = useAnimate("animate", false);
	const grid2Ref = useAnimate("animate", false);
	const stackRef = useAnimate("animate", false);
	const copyRightRef = useAnimate("animate", false);

	return (
		<Box
			component="footer"
			sx={{
				backgroundColor: "black", // for the black background
				//backgroundColor: "#03101c", // for the navy blue background
				color: "#FFFFFF", // Set all text color to white
				padding: "50px 0",
			}}>
			<Container maxWidth="lg">
				{/* <StyledNavLink
					to="/"
					exact="true"
					color="inherit"
					sx={{
						"&:hover": {
							textDecoration: "none",
						},
					}}>
					<Typography variant="h4" sx={{ marginBottom: 6 }}>
						Alex Eagles
					</Typography>
				</StyledNavLink> */}
				<Grid container spacing={2}>
					<Grid
						item
						xs={12}
						sm={4}
						ref={grid1Ref}
						sx={{
							opacity: 0,
							transition: "all 2s ease",
							// transitionDelay: "0.2s",
						}}>
						<Typography
							variant="h6"
							// color="primary"
							sx={{
								fontWeight: 500, // 400,
								marginBottom: 2,
								color: "#FFFFFF", // Set text color to white
							}}>
							Useful Links
						</Typography>
						<StyledList>
							<li>
								<StyledNavLink
									to="/history"
									color="inherit"
									exact="true"
									sx={{ color: "#FFFFFF" }}> {/* Set link color to white */}
									Our History
								</StyledNavLink>
							</li>
							<li>
								<StyledNavLink
									to="/publications"
									color="inherit"
									exact="true"
									sx={{ color: "#FFFFFF" }}> {/* Set link color to white */}
									Our Publications
								</StyledNavLink>
							</li>
							<li>
								<StyledNavLink
									to="/team"
									color="inherit"
									exact="true"
									sx={{ color: "#FFFFFF" }}> {/* Set link color to white */}
									Our Team
								</StyledNavLink>
							</li>
							<li>
								<StyledNavLink
									to="/sponsors"
									color="inherit"
									exact="true"
									sx={{ color: "#FFFFFF" }}> {/* Set link color to white */}
									Our Sponsors
								</StyledNavLink>
							</li>
							<li>
								<StyledNavLink
									to="/contact"
									color="inherit"
									exact="true"
									sx={{ color: "#FFFFFF" }}> {/* Set link color to white */}
									Contact Us
								</StyledNavLink>
							</li>
						</StyledList>
					</Grid>
					<Grid
						item
						xs={12}
						sm={4}
						ref={grid2Ref}
						sx={{
							opacity: 0,
							transition: "all 2s ease",
							transitionDelay: "0.4s",
						}}>
						<Typography
							variant="h6"
							// color="primary"
							sx={{
								fontWeight: 500,
								marginBottom: 2,
								color: "#FFFFFF", // Set text color to white
							}}>
							Contact Us
						</Typography>
						<StyledList>
							<li>
								<StyledNavLink
									to="mailto:alex_eagles@alexu.edu.eg"
									color="inherit"
									sx={{ color: "#FFFFFF" }}> {/* Set link color to white */}
									<Stack
										direction="row"
										spacing={1}
										alignItems="center">
										<EmailOutlined sx={{ color: "#FFFFFF" }} /> {/* Icon color */}
										<Typography
											variant="body1"
											sx={{
												fontWeight: 300,
												fontSize: "1.1rem",
												color: "#FFFFFF", // Set text color to white
											}}>
											alex_eagles@alexu.edu.eg
										</Typography>
									</Stack>
								</StyledNavLink>
							</li>
							<li>
								<StyledNavLink
									to="tel:+20 109 448 6922"
									color="inherit"
									sx={{ color: "#FFFFFF" }}> {/* Set link color to white */}
									<Stack
										direction="row"
										spacing={1}
										alignItems="center">
										<PhoneAndroidOutlined sx={{ color: "#FFFFFF" }} /> {/* Icon color */}
										<Typography
											variant="body1"
											sx={{
												fontWeight: 300,
												fontSize: "1.1rem",
												color: "#FFFFFF", // Set text color to white
											}}>
											+20 109 448 6922
										</Typography>
									</Stack>
								</StyledNavLink>
							</li>
						</StyledList>
					</Grid>
				</Grid>
				<Stack
					ref={stackRef}
					direction="row"
					justifyContent="left"
					alignItems="center"
					spacing={1}
					sx={{
						mt: 6,
						mb: 0,
						py: 0,
						opacity: 0,
						transition: "all 2s ease",
						transitionDelay: "0.8s",
					}}>
					<StyledNavLink
						to="https://github.com/Alex-Eagles"
						target="_blank"
						rel="noopener noreferrer"
						color="inherit">
						<GitHub
							sx={{
								transform: "scale(0.95)",
								transition: "all 0.5s ease",
								color: "#FFFFFF", // Icon color
								"&:hover": {
									transform: "translateY(-10%) scale(0.95)",
									color: "#305fb0",
								},
							}}
						/>
					</StyledNavLink>
					<StyledNavLink
						to="https://www.linkedin.com/company/alex-eagles-aerodesign-team/"
						color="inherit"
						target="_blank"
						rel="noopener noreferrer">
						<LinkedIn
							sx={{
								transform: "scale(1.1)",
								transition: "all 0.5s ease",
								color: "#FFFFFF", // Icon color
								"&:hover": {
									transform: "translateY(-10%) scale(1.1)",
									color: "#305fb0",
								},
							}}
						/>
					</StyledNavLink>
					<StyledNavLink
						to="https://www.facebook.com/alexeagles2015/"
						color="inherit"
						target="_blank"
						rel="noopener noreferrer">
						<Facebook
							sx={{
								transform: "scale(1.1)",
								transition: "all 0.5s ease",
								color: "#FFFFFF", // Icon color
								"&:hover": {
									transform: "translateY(-10%) scale(1.1)",
									color: "#305fb0",
								},
							}}
						/>
					</StyledNavLink>
					<StyledNavLink
						to="https://www.instagram.com/alex_eagles.aerodesign/"
						color="inherit"
						target="_blank"
						rel="noopener noreferrer">
						<Instagram
							sx={{
								transition: "all 0.5s ease",
								color: "#FFFFFF", // Icon color
								"&:hover": {
									transform: "translateY(-10%) ", //"translateY(-20%) ",
									color: "#305fb0",
							 },
							}}
						/>
					</StyledNavLink>
				</Stack>
				<Typography
					ref={copyRightRef}
					variant="body2"
					sx={{
						marginTop: 6,
						opacity: 0,
						transition: "all 2s ease",
						transitionDelay: "1.2s",
						color: "#FFFFFF", // Set text color to white
					}}>
					&copy; {currentYear} Alex Eagles Aero Design. All rights
					reserved.
				</Typography>
			</Container>
		</Box>
	);
};

export default Footer;
