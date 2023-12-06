import { Typography, Stack, Container } from "@mui/material";
import useAnimate from "../../hooks/use-animate";

const PublicationsSection = () => {
	const elementRef = useAnimate("animate", false);

	return (
		<Container maxWidth="lg">
			{/* <Stack
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
					Our Publications
				</Typography>
				<Typography
					variant="h6"
					sx={{
						textAlign: "center",
						fontWeight: 300,
						mb: 4,
					}}>
					We've written publications that on XX have been published in
					journals and presented at conferences.
				</Typography>
			</Stack> */}
		</Container>
	);
};

export default PublicationsSection;
