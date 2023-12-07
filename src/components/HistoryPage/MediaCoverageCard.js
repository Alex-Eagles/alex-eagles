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

const MediaCoverageCard = (props) => {
	const { image, videoLinks, articleLinks } = props;
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
				flexDirection: "column",
				alignItems: "center",
				justifyContent: "space-between",
				justifyItems: "center",
				alignContent: "center",
				opacity: 0,
				transform: "translatex(-50%)",
				transition: "all 1s ease",
				borderRadius: 0,
				borderBottom: "3px solid #305fb0",
				// minWidth: "100% !important",
			}}>
			<CardMedia
				component="img"
				alt="Media Coverage"
				src={image}
				sx={{
					width: 75,
					// height: 75,
					mx: "auto",
					// border: "3px solid #305fb0",
					// borderRadius: "50px",
				}}
			/>
			<CardContent
				sx={{
					display: "flex",
					flexDirection: window.innerWidth > 600 ? "row" : "column",
					alignItems: window.innerWidth > 600 ? "left" : "center",
					justifyContent: "center",
					textAlign: window.innerWidth > 600 ? "left" : "center",
					// borderBottom: "3px solid #305fb0",
					py: 4,
					px: window.innerWidth > 600 ? 4 : 0,
				}}>
				{videoLinks?.map((link, index) => (
					<video
						key={index}
						src={link}
						controls
						style={{
							width: "100%",
							height: "100%",
							margin: 4,
						}}
					/>
				))}
				{articleLinks?.map((link, index) => (
					<Typography
						key={index}
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
							Read Article
						</a>
					</Typography>
				))}
			</CardContent>
		</Card>
	);
};

export default MediaCoverageCard;
