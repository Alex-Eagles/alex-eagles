import * as React from "react";
import {
	Timeline,
	TimelineItem,
	TimelineSeparator,
	TimelineConnector,
	TimelineContent,
	TimelineOppositeContent,
	TimelineDot,
	timelineOppositeContentClasses,
} from "@mui/lab";
import FastfoodIcon from "@mui/icons-material/Fastfood";
import LaptopMacIcon from "@mui/icons-material/LaptopMac";
import HotelIcon from "@mui/icons-material/Hotel";
import RepeatIcon from "@mui/icons-material/Repeat";
import { Typography, Box, Stack } from "@mui/material";
import HistoryTimelineItemImage from "./HistoryTimelineItemImage";
import useAnimate from "../../../hooks/use-animate";

const HistoryTimelineItem = (props) => {
	const { year, index } = props;
	const itemRef = useAnimate("animate", false);
	const imageRef = useAnimate("animate", false);

	return (
		<TimelineItem>
			<TimelineOppositeContent
				sx={{
					m: "auto 0",
					color: "#FFFFFF", // Set year text color to white
				}}
				variant="body2">
				{year.year}
			</TimelineOppositeContent>
			<TimelineSeparator>
				<TimelineConnector sx={{ bgcolor: "primary.main" }} />
				<TimelineDot color="primary" variant="outlined" />
				<TimelineConnector sx={{ bgcolor: "primary.main" }} />
			</TimelineSeparator>
			<TimelineContent
				ref={itemRef}
				sx={{
					color: "#FFFFFF", // Set text color to white
					opacity: 0,
					transform: "translateY(50%)",
					transition: "all 1s ease",
					// mr: "auto",
					my: 2,
					py: "12px",
					px: 2,
					// borderBottom: "2px solid #305fb0",
				}}>
				{year.achievements.map((achievement, idx) => (
					<Box
						key={idx}
						sx={
							{
								// my: 4,
							}
						}>
						<Typography variant="h5" component="span">
							{achievement.title}
						</Typography>
						<Typography
							color="text.secondary"
							sx={{
								mb: 2,
							}}>
							{achievement.competition}
						</Typography>
						<Stack
							display="flex"
							flexWrap="wrap"
							direction={
								window.innerWidth > 1200 ? "row" : "column"
							}
							justifyContent={
								index % 2 == 0 ? "flex-start" : "flex-end"
							}
							alignItems={
								window.innerWidth > 1200
									? "center"
									: "flex-start"
							}
							alignContent="flex-start"
							gap={2}
							// spacing={2}
						>
							{achievement?.images?.map((image, idx) => (
								<HistoryTimelineItemImage
									key={idx}
									index={idx}
									image={image}
									position={index % 2 == 0 ? "left" : "right"}
									title={achievement.title}
								/>
							))}
						</Stack>
					</Box>
				))}
			</TimelineContent>
		</TimelineItem>
	);
};

export default HistoryTimelineItem;
