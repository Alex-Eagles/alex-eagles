import { Container, Stack, Typography } from "@mui/material";
import ContactInformation from "./ContactInformation";
import ContactForm from "./ContactForm";
import useAnimate from "../../hooks/use-animate";

const ContactSection = () => {
	const elementRef = useAnimate("animate", false);
	return (
		<Container maxWidth="lg">
			<Stack
				ref={elementRef}
				sx={{
					opacity: 0,
					transition: "all 2s ease",
				}}>
				<Typography
					variant="h4"
					sx={{
						textAlign: "center",
						fontWeight: 400,
						mb: 2,
					}}>
					Contact Us
				</Typography>
				{/* <Typography
					variant="h6"
					sx={{
						textAlign: "center",
						fontWeight: 300,
						mb: 4,
					}}>
					How you can find us.
				</Typography> */}
			</Stack>
			<Stack
				sx={{ mt: window.innerWidth > 600 ? 4 : 0 }}
				direction={window.innerWidth > 600 ? "row" : "column"}
				display="grid"
				gridTemplateColumns={
					window.innerWidth > 600 ? "1fr 1fr" : "1fr"
				}
				gridTemplateRows={window.innerWidth > 600 ? "1fr" : "1fr 1fr"}
				justifyContent="center"
				alignItems="center">
				<ContactInformation />
				<ContactForm />
			</Stack>
		</Container>
	);
};

export default ContactSection;
