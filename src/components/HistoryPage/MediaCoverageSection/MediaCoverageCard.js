import { Card, CardContent, CardMedia, Typography, Box } from "@mui/material";
import { NavLink } from "react-router-dom";
import { ArrowForward, Launch } from "@mui/icons-material";
import useAnimate from "../../../hooks/use-animate";

const MediaCoverageCard = (props) => {
	const { index, image, media } = props;
	const cardRef = useAnimate("animate", false);
	const imageRef = useAnimate("animate", false);
	const contentRef = useAnimate("animate", false);

	return (
		<Card
			ref={cardRef}
			sx={{
				mx: window.innerWidth > 600 ? 4 : 0,
				my: 4,
				boxShadow: "none",
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				justifyContent: "space-between",
				opacity: 0,
				transform: "translateY(50%)",
				transition: "all 1s ease",
				transitionDelay: `${index * 0.2}s`,
				borderRadius: 0,
				borderBottom: "3px solid #305fb0",
				p: 0,
			}}>
			<CardMedia
				ref={imageRef}
				component="img"
				alt="Media Coverage"
				src={image}
				sx={{
					width: 75,
					opacity: 0,
					transform: "translateY(50%)",
					transition: "all 1s ease",
					transitionDelay: `${index * 0.2}s`,
				}}
			/>
			<CardContent
				ref={contentRef}
				sx={{
					display: "flex",
					flexDirection: window.innerWidth > 850 ? "row" : "column",
					alignItems: window.innerWidth > 600 ? "left" : "center",
					justifyContent: "center",
					textAlign: window.innerWidth > 600 ? "left" : "center",
					gap: 2,
					px: 0,
					opacity: 0,
					transform: "translateY(50%)",
					transition: "all 1s ease",
					// transitionDelay: `${index * 0.2}s`,
				}}>
				{media?.map((mediaItem, index) => (
					<NavLink
						key={index}
						to={mediaItem.link}
						target="_blank"
						rel="noopener noreferrer"
						sx={{
							position: "relative",
						}}>
						<Box
							sx={{
								display: "flex",
								flexDirection: "column",
								alignItems: "center",
								justifyContent: "center",
								width:
									window.innerWidth > 600 ? "350px" : "100%",
								// maxHeight:
								// 	window.innerWidth > 600 ? "150px" : "auto",
								aspectRatio: "16/9",
								// borderRadius: "20px",
								transition: "all 1s ease",
								"&:hover": {
									transform: "translateY(-10px)",
								},
							}}>
							<CardMedia
								component="img"
								alt="Media Coverage"
								src={mediaItem.image}
								sx={{
									width: "100%",
									height: "100%",
									borderRadius: "20px",
									transition: "all 1s ease",
									objectFit: "cover",
									filter: "brightness(0.8)",
									"&:hover": {
										filter: "brightness(0.5)",
									},
								}}
							/>
							<Launch
								sx={{ position: "absolute", color: "white" }}
							/>
						</Box>
					</NavLink>
				))}
			</CardContent>
		</Card>
	);
};

export default MediaCoverageCard;
