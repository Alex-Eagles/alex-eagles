import "../../styles/logo.css"
import AnimatedMenuButton from "./AnimatedMenuButton";
import { NavLink } from "react-router-dom";
import { Box, Stack, Typography } from "@mui/material";
import logo from "../../assets/icons/team logo .png";
function Logo() {
  
  return (
    <div className="flex items-center logo-container">
      <NavLink
						to="/"
						style={{
							position: "fixed",
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
								borderLeft: "1px solid #CFD8DC",
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
									color: "#78909C",
									textDecoration: "none",
								}}>
								AERO DESIGN
							</Typography>
						</Stack>
					</NavLink>
      
      
        <AnimatedMenuButton />
    </div>
  );
}

export default Logo;