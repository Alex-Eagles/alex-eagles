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
import { Typography, Box } from "@mui/material";
import useAnimate from "../../hooks/use-animate";

const HistoryTimelineItem = (props) => {
	const { year } = props;
	const itemRef = useAnimate("animate", false);

	return (
		<TimelineItem>
			<TimelineOppositeContent
				sx={{ m: "auto 0" }}
				variant="body2"
				color="text.secondary">
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
					opacity: 0,
					transform: "translateY(50%)",
					transition: "all 1s ease",
					// mr: "auto",
					my: 2,
					py: "12px",
					px: 2,
					// borderBottom: "2px solid #305fb0",
				}}>
				{year.achievements.map((achievement, index) => (
					<Box
						key={index}
						sx={{
							my: 4,
						}}>
						<Typography variant="h5" component="span">
							{achievement.title}
						</Typography>
						<Typography>{achievement.competition}</Typography>
					</Box>
				))}
			</TimelineContent>
		</TimelineItem>
	);
};

export default HistoryTimelineItem;
