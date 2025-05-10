import * as React from "react";
import {
	AppBar,
	Box,
	Button,
	Container,
	IconButton,
	Menu,
	MenuItem,
	Toolbar,
	Typography,
	Stack,
} from "@mui/material";
import { Menu as MenuIcon } from "@mui/icons-material";
import useAnimate from "../../hooks/use-animate";
import logo from "../../assets/icons/logo.webp";
import { NavLink, useLocation } from "react-router-dom";
import { styled } from "@mui/material/styles";
import AnimatedNavMenuButton from "../AnimatedMenu/AnimatedNavMenuButton";
const pages = ["History", "Publications", "Team", "Sponsors", "Contact"];

const StyledNavLink = styled(NavLink)((theme) => ({
	color: "inherit",
	transition: "all 0.5s ease",
	textDecoration: "none",
	"&:hover": {
		color: "#305fb0",
		// textDecoration: "underline",
	},
}));

const NavBar = () => {
	const [anchorElNav, setAnchorElNav] = React.useState(null);
	const navBarRef = useAnimate("animate-navbar", false);
	const contentRef = useAnimate("animate", false);
	const location = useLocation();
	const handleOpenNavMenu = (event) => {
		setAnchorElNav(event.currentTarget);
	};

	const handleCloseNavMenu = () => {
		setAnchorElNav(null);
	};

	
  

	return (
		<AppBar
			ref={navBarRef}
			position="fixed"
			sx={{
				zIndex: (theme) => theme.zIndex.modal + 1,   // or theme.zIndex.drawer + 1
				backgroundColor: "transparent",
				boxShadow: "none",
				transition: "all 0.5s ease",
				color: "secondary.main",
				"&::before": {
					content: "''",
					// backgroundColor: "#305fb0",
					backgroundColor: "white",

					transition: "all 0.4s ease",
					transitionDelay: "1.25s",
					zIndex: -1,
					position: "absolute",
					top: 0,
					left: "-100%",
					width: "100%",
					height: "100%",
				},
			}}>
			<Container
				maxWidth="xl"
				ref={contentRef}
				sx={{
					opacity: "0",
					transition: "all 0.5s ease",
					transitionDelay: "1.5s",
				}}>
				<Toolbar disableGutters>
					<NavLink
						to="/"
						style={{
							textDecoration: "none",
							color: "inherit",
							display: "flex",
							alignContent: "center",
							justifyContent: "center",
							height: "40px",
						}}>
						<Box
							sx={{
								display: { xs: "flex", md: "flex" },
								mr: 2,
								height: "40px",
								width: "40px",
								aspectRatio: "1/1",
							}}>
							<img
								src={logo}
								alt="logo"
								style={{
									height: "100%",
									width: "100%",
									objectFit: "contain",
								}}
							/>
						</Box>
						<Stack
							direction="column"
							justifyContent="center"
							sx={{
								gap: 0,
								borderLeft: "1px solid #000000",
								display: { xs: "none", md: "flex" },
								// my: 2,
							}}>
							<Typography
								variant="h6"
								noWrap
								sx={{
									mx: 2,
									my: 0,
									display: { xs: "none", md: "flex" },
									fontWeight: 600, //500,
									lineHeight: 0.95,
									// letterSpacing: ".1rem",
									color: "inherit",
									textDecoration: "none",
								}}>
								ALEX EAGLES
							</Typography>
							<Typography
								variant="h6"
								noWrap
								sx={{
									mx: 2,
									my: 0,
									display: { xs: "none", md: "flex" },
									fontWeight: 300, //100,
									lineHeight: 0.95,
									// letterSpacing: ".1rem",
									color: "primary.main",
									textDecoration: "none",
								}}>
								AERO DESIGN
							</Typography>
						</Stack>
					</NavLink>
					<AnimatedNavMenuButton/>
				</Toolbar>
			</Container>
		</AppBar>
	);
};
export default NavBar;
