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
import HistoryTimelineItem from "./HistoryTimelineItem";
import achievementData from "../../assets/data/achievementData";

const HistoryTimeline = () => {
	return (
		<Timeline
			// position="alternate"
			sx={{
				[`& .${timelineOppositeContentClasses.root}`]: {
					flex: 0.2,
				},
				mb: 8,
			}}>
			{achievementData.map((year) => (
				<HistoryTimelineItem key={year.year} year={year} />
			))}
		</Timeline>
	);
};

export default HistoryTimeline;
