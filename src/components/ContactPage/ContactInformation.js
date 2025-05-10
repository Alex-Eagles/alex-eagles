import { Box, Container, Stack, Typography } from "@mui/material";
import {
	EmailOutlined,
	PhoneAndroidOutlined,
	Facebook,
	GitHub,
	Instagram,
	LinkedIn,
} from "@mui/icons-material";
import { styled } from "@mui/material/styles";
import { NavLink } from "react-router-dom";
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

const ContactInformation = () => {
	const paragraphRef = useAnimate("animate", false);
	const listRef = useAnimate("animate", false);
	const stackRef = useAnimate("animate", false);

	return (
		<Stack
			direction="column"
			sx={{
				p: 4,
			}}>
			<Typography
				ref={paragraphRef}
				variant="h6"
				sx={{
					textAlign: window.innerWidth > 600 ? "left" : "center",
					mb: 4,
					opacity: 0,
					transition: "all 2s ease",
					color: "#FFFFFF", // Set text color to white
				}}>
				We are always happy to hear from you. Give us a call, send an
				email or fill out this form.
			</Typography>
			<StyledList
				ref={listRef}
				sx={{
					opacity: 0,
					transition: "all 2s ease",
					transitionDelay: "0.4s",
					color: "#FFFFFF", // Set text color to white
				}}>
				<li>
					<StyledNavLink
						to="mailto:alex_eagles@alexu.edu.eg"
						color="inherit">
						<Stack direction="row" spacing={1} alignItems="center">
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
					<StyledNavLink to="tel:+20 109 448 6922" color="inherit">
						<Stack direction="row" spacing={1} alignItems="center">
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
			<Stack
				ref={stackRef}
				direction="row"
				justifyContent={window.innerWidth > 600 ? "left" : "center"}
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
					to="https://www.instagram.com/ae_alexuaero/"
					color="inherit"
					target="_blank"
					rel="noopener noreferrer">
					<Instagram
						sx={{
							transition: "all 0.5s ease",
							color: "#FFFFFF", // Icon color
							"&:hover": {
								transform: "translateY(-10%)",
								color: "#305fb0",
							},
						}}
					/>
				</StyledNavLink>
			</Stack>
		</Stack>
	);
};

export default ContactInformation;
