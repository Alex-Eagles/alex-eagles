import {
	Card,
	CardContent,
	Typography,
	Avatar,
	Stack,
	CardMedia,
} from "@mui/material";
import { LinkedIn, GitHub, EmailOutlined } from "@mui/icons-material";
import useAnimate from "../../../hooks/use-animate";

const PublicationCard = (props) => {
	const { index, name, title, image, description } = props;
	const cardRef = useAnimate("animate", false);
	const imageRef = useAnimate("animate", false);
	const contentRef = useAnimate("animate", false);

	return (
		<Card
			ref={cardRef}
			sx={{
				// maxWidth: 150,
				mx: window.innerWidth > 600 ? 4 : 0,
				my: 4,
				boxShadow: "none",
				display: "flex",
				flexDirection:
					window.innerWidth < 850
						? "column"
						: index % 2 === 0
						? "row"
						: "row-reverse",

				alignItems: "center",
				justifyContent: "space-around",
				opacity: 0,
				transform:
					index % 2 === 0 ? "translateX(-50%)" : "translateX(50%)",
				transition: "all 1s ease",
				borderRadius: 0,
				// borderBottom: "3px solid #305fb0",
			}}>
			<CardMedia
				ref={imageRef}
				component="img"
				alt={title}
				src={image}
				sx={{
					width: window.innerWidth > 850 ? 400 : "100%",
					height: window.innerWidth > 850 ? 400 : "",
					// mx: "auto",
					ml: window.innerWidth > 850 ? 4 : "",
					// border: "3px solid #305fb0",
					borderRadius: "100%",
					opacity: 0,
					transform:
						index % 2 === 0
							? "translateX(-50%)"
							: "translateX(50%)",
					transition: "all 1s ease",
					transitionDelay: "0.4s",
				}}
			/>
			<CardContent
				ref={contentRef}
				sx={{
					display: "flex",
					flexDirection: "column",
					alignItems: window.innerWidth > 600 ? "left" : "center",
					justifyContent: "center",
					textAlign: window.innerWidth > 600 ? "left" : "center",
					// borderBottom: "3px solid #305fb0",
					py: 4,
					px: window.innerWidth > 600 ? 4 : 0,
					opacity: 0,
					transform:
						index % 2 === 0
							? "translateX(-50%)"
							: "translateX(50%)",
					transition: "all 1s ease",
					transitionDelay: "0.2s",
				}}>
				<Typography gutterBottom variant="h5">
					{name}
				</Typography>
				<Typography
					variant="h6"
					color="primary"
					sx={{
						mb: 4,
					}}>
					{title}
				</Typography>
				<Typography variant="body1" color="text.secondary">
					{description}
				</Typography>
			</CardContent>
		</Card>
	);
};

export default PublicationCard;
