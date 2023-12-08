import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";
import { ArrowForward } from "@mui/icons-material";
import useAnimate from "../../hooks/use-animate";

const MediaCoverageCard = (props) => {
	const { index, image, media } = props;
	const elementRef = useAnimate("animate", false);

	return (
		<Card
			ref={elementRef}
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
				component="img"
				alt="Media Coverage"
				src={image}
				sx={{
					width: 75,
				}}
			/>
			<CardContent
				sx={{
					display: "flex",
					flexDirection: window.innerWidth > 600 ? "row" : "column",
					alignItems: window.innerWidth > 600 ? "left" : "center",
					justifyContent: "center",
					textAlign: window.innerWidth > 600 ? "left" : "center",
					gap: 2,
					px: 0,
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
						<CardMedia
							component="img"
							alt="Media Coverage"
							src={mediaItem.image}
							sx={{
								width:
									window.innerWidth > 600 ? "350px" : "100%",
								maxHeight:
									window.innerWidth > 600 ? "150px" : "auto",
								borderRadius: "20px",
								transition: "all 1s ease",
								"&:hover": {
									transform: "translateY(-10px)",
									filter: "brightness(0.5)",
								},
							}}
						/>
						{/* <Typography
							variant="caption"
							sx={{
								color: "#fff",
								position: "absolute",
								top: "50%",
								left: "50%",
								transform: "translate(-50%, -50%)",
								textAlign: "center",
								width: "80%", // Adjust the width as needed
								// display: "none", // Initially hide the caption
							}}>
							Click to view
						</Typography> */}
					</NavLink>
				))}
			</CardContent>
		</Card>
	);
};

export default MediaCoverageCard;
