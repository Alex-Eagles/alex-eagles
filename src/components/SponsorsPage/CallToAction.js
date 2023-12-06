import { Container, Stack, Typography, Button } from "@mui/material";
import useAnimate from "../../hooks/use-animate";
import { NavLink } from "react-router-dom";

const CallToAction = () => {
	const elementRef = useAnimate("animate", false);
	return (
		<Container maxWidth="lg">
			<Stack
				ref={elementRef}
				sx={{
					opacity: 0,
					transition: "all 2s ease",
				}}
				display="flex"
				justifyContent="center"
				alignItems="center">
				<Typography
					variant="h4"
					sx={{
						textAlign: "center",
						fontWeight: 400,
						mb: 2,
					}}>
					Become a Sponsor
				</Typography>
				<Typography
					variant="h6"
					sx={{
						textAlign: "center",
						fontWeight: 300,
						mb: 4,
					}}>
					Join us in our mission.
				</Typography>
				<NavLink to="/contact">
					<Button
						variant="contained"
						color="primary"
						size="large"
						disableElevation
						sx={{
							width: "275px",
						}}>
						Contact Us
					</Button>
				</NavLink>
			</Stack>
		</Container>
	);
};

export default CallToAction;
