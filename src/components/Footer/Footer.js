import React from "react";
import { Box, Container, Grid, Typography, Stack } from "@mui/material";
import { NavLink } from "react-router-dom";
import { styled } from "@mui/material/styles";
import { Facebook, GitHub, Instagram, LinkedIn } from "@mui/icons-material";

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

	return (
		<Box
			component="footer"
			sx={{
				backgroundColor: "white",
				color: "#000000",
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
					<Grid item xs={12} sm={4}>
						<Typography
							variant="h6"
							// color="primary"
							sx={{ fontWeight: 400, marginBottom: 2 }}>
							Useful Links
						</Typography>
						<StyledList>
							<li>
								<StyledNavLink
									to="/history"
									color="inherit"
									exact="true">
									Our History
								</StyledNavLink>
							</li>
							{/* <li>
								<StyledNavLink
									to="/careers"
									color="inherit"
									exact="true">
									Careers
								</StyledNavLink>
							</li> */}
							<li>
								<StyledNavLink
									to="/team"
									color="inherit"
									exact="true">
									Our Team
								</StyledNavLink>
							</li>
							{/* <li>
							<StyledNavLink
								to="/contact"
								color="inherit"
								exact="true">
								Contact Us
							</StyledNavLink>
						</li> */}
							<li>
								<StyledNavLink
									to="/sponsors"
									color="inherit"
									exact="true">
									Our Sponsors
								</StyledNavLink>
							</li>
							<li>
								<StyledNavLink
									to="/contact"
									color="inherit"
									exact="true">
									Contact Us
								</StyledNavLink>
							</li>
						</StyledList>
					</Grid>
					<Grid item xs={12} sm={4}>
						<Typography
							variant="h6"
							// color="primary"
							sx={{ fontWeight: 400, marginBottom: 2 }}>
							Contact Us
						</Typography>
						<StyledList>
							<li>
								<StyledNavLink to="/about" color="inherit">
									alexeagles@gmail.com
								</StyledNavLink>
							</li>
							<li>
								<StyledNavLink to="/contact" color="inherit">
									+201010101010
								</StyledNavLink>
							</li>
						</StyledList>
					</Grid>
				</Grid>
				<Stack
					direction="row"
					justifyContent="left"
					alignItems="center"
					spacing={1}
					sx={{ mt: 6, mb: 0, py: 0 }}>
					<GitHub
						sx={{
							transform: "scale(0.95)",
							transition: "all 0.5s ease",
							"&:hover": {
								transform: "translateY(-10%) scale(0.95)",
								color: "#305fb0",
							},
						}}
					/>
					<LinkedIn
						sx={{
							transform: "scale(1.1)",
							transition: "all 0.5s ease",
							"&:hover": {
								transform: "translateY(-10%) scale(1.1)",
								color: "#305fb0",
							},
						}}
					/>
					<Facebook
						sx={{
							transform: "scale(1.1)",
							transition: "all 0.5s ease",
							"&:hover": {
								transform: "translateY(-10%) scale(1.1)",
								color: "#305fb0",
							},
						}}
					/>
					<Instagram
						sx={{
							transition: "all 0.5s ease",
							"&:hover": {
								transform: "translateY(-10%) ",
								color: "#305fb0",
							},
						}}
					/>
				</Stack>
				<Typography variant="body2" sx={{ marginTop: 6 }}>
					&copy; {currentYear} Alex Eagles - SAE Aero Design. All
					rights reserved.
				</Typography>
			</Container>
		</Box>
	);
};

export default Footer;
