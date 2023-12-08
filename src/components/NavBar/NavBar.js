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
import logo from "../../assets/icons/Logo.webp";
import { NavLink } from "react-router-dom";
import { styled } from "@mui/material/styles";

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
								display: { xs: "none", md: "flex" },
								mr: 2,
								height: "40px",
							}}>
							<img src={logo} alt="logo" />
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
									fontWeight: 600,
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
									fontWeight: 300,
									lineHeight: 0.95,
									// letterSpacing: ".1rem",
									color: "primary.main",
									textDecoration: "none",
								}}>
								AERO DESIGN
							</Typography>
						</Stack>
					</NavLink>
					<Box
						sx={{
							flexGrow: 1,
							display: { xs: "flex", md: "none" },
						}}>
						<IconButton
							size="large"
							aria-label="account of current user"
							aria-controls="menu-appbar"
							aria-haspopup="true"
							onClick={handleOpenNavMenu}
							color="inherit">
							<MenuIcon />
						</IconButton>
						<Menu
							id="menu-appbar"
							anchorEl={anchorElNav}
							anchorOrigin={{
								vertical: "bottom",
								horizontal: "right",
							}}
							keepMounted
							transformOrigin={{
								vertical: "top",
								horizontal: "right",
							}}
							open={Boolean(anchorElNav)}
							onClose={handleCloseNavMenu}
							sx={{
								display: { xs: "block", md: "none" },
							}}>
							{pages.map((page) => (
								<MenuItem
									key={page}
									onClick={handleCloseNavMenu}>
									<Typography textAlign="center">
										<StyledNavLink
											to={`/${page.toLowerCase()}`}>
											{page}
										</StyledNavLink>
									</Typography>
								</MenuItem>
							))}
						</Menu>
					</Box>
					<NavLink
						to="/"
						style={{
							display: "flex",
							textDecoration: "none",
							color: "inherit",
							alignContent: "center",
							justifyContent: "center",
							height: "40px",
						}}>
						<Box
							sx={{
								display: { xs: "flex", md: "none" },
								mr: 2,
								height: "40px",
								width: "40px",
								right: "0%",
							}}>
							<img src={logo} alt="logo" />
						</Box>
						<Stack
							direction="column"
							sx={{
								gap: 0,
								borderLeft: "1px solid #000000",
								display: { xs: "flex", md: "none" },
								mr: 1,
							}}>
							<Typography
								variant="h6"
								noWrap
								sx={{
									mx: 2,
									my: 0,
									display: { xs: "flex", md: "none" },
									fontWeight: 600,
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
									display: { xs: "flex", md: "none" },
									fontWeight: 300,
									lineHeight: 0.95,
									// letterSpacing: ".1rem",
									color: "primary.main",
									textDecoration: "none",
								}}>
								AERO DESIGN
							</Typography>
						</Stack>
					</NavLink>
					<Box
						sx={{
							flexGrow: 1,
							display: { xs: "none", md: "flex" },
							justifyContent: "flex-end",
						}}>
						{pages.map((page) => (
							<StyledNavLink to={`/${page.toLowerCase()}`}>
								<Button
									key={page}
									onClick={handleCloseNavMenu}
									sx={{
										my: 2,
										color: "inherit",
										display: "block",
									}}>
									{page}
								</Button>
							</StyledNavLink>
						))}
					</Box>
				</Toolbar>
			</Container>
		</AppBar>
	);
};
export default NavBar;
