import { Container, Stack } from "@mui/material";
import ContactInformation from "./ContactInformation";
import ContactForm from "./ContactForm";
import SectionHeading from "../SectionHeading/SectionHeading";

const ContactSection = () => {
	return (
		<Container
			maxWidth="lg"
			sx={{
				backgroundColor: "rgba(11, 11, 11, 0.31)", // Dark background
				borderRadius: "16px", // Rounded corners
				padding: 4, // Padding inside the container
				color: "#FFFFFF", // White text for contrast
				boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)", // Subtle shadow
			}}
		>
			<SectionHeading title="Contact Us" subtitle="" />
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
