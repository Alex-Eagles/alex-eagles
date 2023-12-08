import { Container, Button } from "@mui/material";
import useAnimate from "../../hooks/use-animate";
import { NavLink } from "react-router-dom";
import SectionHeading from "../SectionHeading/SectionHeading";

const CallToAction = () => {
	const elementRef = useAnimate("animate", false);
	return (
		<Container
			maxWidth="lg"
			sx={{
				display: "flex",
				flexDirection: "column",
				justifyContent: "center",
				alignItems: "center",
			}}>
			<SectionHeading
				title="Become a Sponsor"
				subtitle="Join us in our mission."
			/>
			<NavLink to="/contact">
				<Button
					ref={elementRef}
					variant="contained"
					color="primary"
					size="large"
					disableElevation
					sx={{
						width: "275px",
						opacity: 0,
						transition: "all 2s ease",
						transform: "translateY(100%)",
					}}>
					Contact Us
				</Button>
			</NavLink>
		</Container>
	);
};

export default CallToAction;
