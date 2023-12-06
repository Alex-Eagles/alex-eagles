import { Container, Stack } from "@mui/material";
import ContactInformation from "./ContactInformation";
import ContactForm from "./ContactForm";

const ContactSection = () => {
	return (
		<Container maxWidth="lg">
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
