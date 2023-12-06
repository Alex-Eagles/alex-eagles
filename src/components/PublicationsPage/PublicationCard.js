import {
	Card,
	CardContent,
	Typography,
	Avatar,
	Stack,
	CardMedia,
} from "@mui/material";
import { LinkedIn, GitHub, EmailOutlined } from "@mui/icons-material";
import useAnimate from "../../hooks/use-animate";

const PublicationCard = (props) => {
	const { title, image, abstract, link } = props;
	const elementRef = useAnimate("animate", false);

	return (
		<Card
			ref={elementRef}
			sx={{
				// maxWidth: 150,
				mx: window.innerWidth > 600 ? 4 : 0,
				my: 4,
				boxShadow: "none",
				display: "flex",
				flexDirection: window.innerWidth > 600 ? "row" : "column",
				alignItems: "center",
				justifyContent: "center",
				opacity: 0,
				transform: "translatex(-50%)",
				transition: "all 1s ease",
				borderRadius: 0,
			}}>
			<CardMedia
				component="img"
				alt={title}
				src={image}
				sx={{
					width: 300,
					height: 300,
					mx: "auto",
					// border: "3px solid #305fb0",
					// borderRadius: "50px",
				}}
			/>
			<CardContent
				sx={{
					display: "flex",
					flexDirection: "column",
					alignItems: window.innerWidth > 600 ? "left" : "center",
					justifyContent: "center",
					textAlign: window.innerWidth > 600 ? "left" : "center",
					borderBottom: "3px solid #305fb0",
					py: 4,
					px: window.innerWidth > 600 ? 4 : 0,
				}}>
				<Typography gutterBottom variant="h5">
					{title}
				</Typography>
				<Typography variant="body2" color="text.secondary">
					{abstract}
				</Typography>
				<Typography
					variant="body2"
					color="text.secondary"
					sx={{
						mt: 2,
						textDecoration: "underline",
						"&:hover": {
							// textDecoration: "underline",
							color: "#305fb0 !important",
						},
					}}>
					<a
						href={link}
						target="_blank"
						rel="noopener noreferrer"
						style={{
							textDecoration: "none",
							color: "inherit",
						}}>
						Read More
					</a>
				</Typography>
			</CardContent>
		</Card>
	);
};

export default PublicationCard;
