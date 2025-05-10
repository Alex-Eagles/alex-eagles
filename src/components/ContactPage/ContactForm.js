import React from "react";
import { TextField, Button, Container, Box } from "@mui/material";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import useAnimate from "../../hooks/use-animate";

const schema = z.object({
	name: z.string(),
	email: z.string().email("Invalid email!"),
	message: z.string(),
});

const ContactForm = () => {
	const elementRef = useAnimate("animate", false);
	const {
		control,
		handleSubmit,
		formState: { errors },
	} = useForm({
		mode: "onTouched",
		resolver: zodResolver(schema),
	});

	const onSubmit = (data) => {
		const { name, email, message } = data;

		// Constructing the mailto link
		const mailtoLink = `mailto:alex_eagles@alexu.edu.eg?subject=Message from ${name}&body=${message}%0D%0A%0D%0AContact Email: ${email}`;

		// Redirecting to the mailto link
		window.location.href = mailtoLink;
	};

	return (
		<Box
			ref={elementRef}
			sx={{
				px: window.innerWidth > 600 ? 8 : 2,
				py: 4,
				borderLeft:
					window.innerWidth > 600 ? "1px solid #FFFFFF" : "none", // White border
				borderTop:
					window.innerWidth < 600 ? "1px solid #FFFFFF" : "none", // White border
				opacity: 0,
				transition: "all 2s ease",
				transitionDelay: "1s",
				color: "#FFFFFF", // Set text color to white
			}}>
			<form onSubmit={handleSubmit(onSubmit)}>
				<Controller
					name="name"
					control={control}
					defaultValue=""
					render={({ field }) => (
						<TextField
							label="Name"
							{...field}
							fullWidth
							margin="normal"
							variant="outlined"
							error={!!errors.name}
							helperText={errors.name?.message}
							required
							InputProps={{
								style: { color: "#FFFFFF" }, // Text color
							}}
							InputLabelProps={{
								style: { color: "#FFFFFF" }, // Label color
							}}
							sx={{
								"& .MuiOutlinedInput-root": {
									"& fieldset": {
										borderColor: "#FFFFFF", // White outline
									},
									"&:hover fieldset": {
										borderColor: "#FFFFFF", // White outline on hover
									},
									"&.Mui-focused fieldset": {
										borderColor: "#FFFFFF", // White outline when focused
									},
								},
							}}
						/>
					)}
				/>
				<Controller
					name="email"
					control={control}
					defaultValue=""
					render={({ field }) => (
						<TextField
							label="Email"
							{...field}
							fullWidth
							margin="normal"
							variant="outlined"
							error={!!errors.email}
							helperText={errors.email?.message}
							required
							type="email"
							InputProps={{
								style: { color: "#FFFFFF" }, // Text color
							}}
							InputLabelProps={{
								style: { color: "#FFFFFF" }, // Label color
							}}
							sx={{
								"& .MuiOutlinedInput-root": {
									"& fieldset": {
										borderColor: "#FFFFFF", // White outline
									},
									"&:hover fieldset": {
										borderColor: "#FFFFFF", // White outline on hover
									},
									"&.Mui-focused fieldset": {
										borderColor: "#FFFFFF", // White outline when focused
									},
								},
							}}
						/>
					)}
				/>
				<Controller
					name="message"
					control={control}
					defaultValue=""
					render={({ field }) => (
						<TextField
							label="Message"
							{...field}
							fullWidth
							multiline
							rows={4}
							margin="normal"
							variant="outlined"
							error={!!errors.message}
							helperText={errors.message?.message}
							required
							sx={{
								mb: 3,
								"& .MuiOutlinedInput-root": {
									"& fieldset": {
										borderColor: "#FFFFFF", // White outline
									},
									"&:hover fieldset": {
										borderColor: "#FFFFFF", // White outline on hover
									},
									"&.Mui-focused fieldset": {
										borderColor: "#FFFFFF", // White outline when focused
									},
								},
							}}
							InputProps={{
								style: { color: "#FFFFFF" }, // Text color
							}}
							InputLabelProps={{
								style: { color: "#FFFFFF" }, // Label color
							}}
						/>
					)}
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
		</Box>
	);
};

export default ContactForm;
