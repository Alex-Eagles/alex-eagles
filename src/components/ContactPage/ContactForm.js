import React, { useState } from "react";
import { TextField, Button, Container } from "@mui/material";

const ContactForm = () => {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		message: "",
	});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((prevData) => ({
			...prevData,
			[name]: value,
		}));
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		const { name, email, message } = formData;

		// Constructing the mailto link
		const mailtoLink = `mailto:alex_eagles@alexu.edu.eg?subject=Message from ${name}&body=${message}%0D%0A%0D%0AContact Email: ${email}`;

		// Redirecting to the mailto link
		window.location.href = mailtoLink;
	};

	return (
		<Container
			sx={{
				p: 4,
				borderLeft:
					window.innerWidth > 600 ? "1px solid #cccccc" : "none",
				borderTop:
					window.innerWidth < 600 ? "1px solid #cccccc" : "none",
			}}>
			<form onSubmit={handleSubmit}>
				<TextField
					label="Name"
					name="name"
					value={formData.name}
					onChange={handleChange}
					fullWidth
					margin="normal"
					variant="outlined"
					required
				/>
				<TextField
					label="Email"
					name="email"
					value={formData.email}
					onChange={handleChange}
					fullWidth
					margin="normal"
					variant="outlined"
					required
					type="email"
				/>
				<TextField
					label="Message"
					name="message"
					value={formData.message}
					onChange={handleChange}
					fullWidth
					multiline
					rows={4}
					margin="normal"
					variant="outlined"
					required
					sx={{
						mb: 3,
					}}
				/>
				<Button
					type="submit"
					variant="contained"
					color="primary"
					disableElevation
					fullWidth
					size="large">
					Send
				</Button>
			</form>
		</Container>
	);
};

export default ContactForm;
