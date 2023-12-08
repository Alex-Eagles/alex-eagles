import * as React from "react";
import { Typography, Box, Stack } from "@mui/material";
import useAnimate from "../../hooks/use-animate";

const HistoryTimelineItemImage = (props) => {
	const { index, image, title } = props;
	const imageRef = useAnimate("animate", false);

	return (
		<Box
			ref={imageRef}
			sx={{
				transition: `width 0.5s ease, transform 0.5s ${
					index * 0.5
				}s ease, opacity 0.5s ${index * 0.5}s ease`,
				width: window.innerWidth > 600 ? "400px" : "100%",
				aspectRatio: "16/9",
				borderRadius: "20px",
				"&:hover": {
					width: window.innerWidth > 600 ? "450px" : "110%",
				},
				opacity: 0,
				transform: "translateX(50%)",
			}}>
			<img
				key={index}
				src={image}
				alt={title}
				style={{
					width: "100%",
					height: "100%",
					objectFit: "cover",
					borderRadius: "20px",
				}}
			/>
		</Box>
	);
};

export default HistoryTimelineItemImage;
