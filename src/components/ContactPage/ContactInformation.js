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
	return (
		<Stack
			direction="column"
			sx={{
				p: 4,
			}}>
			<Typography
				variant="h6"
				sx={{
					textAlign: window.innerWidth > 600 ? "left" : "center",
					mb: 4,
				}}>
				We are always happy to hear from you. Give us a call, send an
				email or fill out this form.
			</Typography>
			<StyledList>
				<li>
					<StyledNavLink
						to="mailto:alex_eagles@alexu.edu.eg"
						color="inherit">
						<Stack direction="row" spacing={1} alignItems="center">
							<EmailOutlined />
							<Typography
								variant="body1"
								sx={{
									fontWeight: 300,
									fontSize: "1.1rem",
								}}>
								alex_eagles@alexu.edu.eg
							</Typography>
						</Stack>
					</StyledNavLink>
				</li>
				<li>
					<StyledNavLink to="tel:+20 1001427585" color="inherit">
						<Stack direction="row" spacing={1} alignItems="center">
							<PhoneAndroidOutlined />
							<Typography
								variant="body1"
								sx={{
									fontWeight: 300,
									fontSize: "1.1rem",
								}}>
								+20 1001427585
							</Typography>
						</Stack>
					</StyledNavLink>
				</li>
			</StyledList>
			<Stack
				direction="row"
				justifyContent={window.innerWidth > 600 ? "left" : "center"}
				alignItems="center"
				spacing={1}
				sx={{ mt: 6, mb: 0, py: 0 }}>
				<StyledNavLink
					to="https://github.com/Alex-Eagles"
					target="_blank"
					rel="noopener noreferrer"
					color="inherit">
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
							"&:hover": {
								transform: "translateY(-10%) scale(1.1)",
								color: "#305fb0",
							},
						}}
					/>
				</StyledNavLink>
				<StyledNavLink
					to="/"
					color="inherit"
					target="_blank"
					rel="noopener noreferrer">
					<Instagram
						sx={{
							transition: "all 0.5s ease",
							"&:hover": {
								transform: "translateY(-10%) ",
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
