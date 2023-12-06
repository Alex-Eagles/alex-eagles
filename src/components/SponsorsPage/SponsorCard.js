import { Card, CardContent, Typography, CardMedia } from "@mui/material";
import useAnimate from "../../hooks/use-animate";

const SponsorCard = (props) => {
	const { name, image } = props;
	const elementRef = useAnimate("animate", false);

	return (
		<Card
			ref={elementRef}
			sx={{
				width: 250,
				mx: window.innerWidth > 600 ? 4 : 0,
				my: 4,
				boxShadow: "none",
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				justifyContent: "center",
				opacity: 0,
				transform: "scale(0.85)",
				transition: "all 1s ease",
				// height: "300px",
			}}>
			<CardMedia
				component="img" // Use 'component="img"' for images
				alt={name}
				src={image} // Make sure 'image' is a valid URL or path
				sx={{ width: "100%", mx: "auto" }}
			/>
			{/* <CardContent
				sx={{
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
					justifyContent: "center",
					textAlign: "center",
				}}>
				<Typography gutterBottom variant="h5">
					{name}
				</Typography>
			</CardContent> */}
		</Card>
	);
};

export default SponsorCard;
