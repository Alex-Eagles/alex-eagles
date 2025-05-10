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
import achievementData from "../../../assets/data/achievementData";

const HistoryTimeline = () => {
	return (
		<Timeline
			position={window.innerWidth > 1200 ? "alternate" : ""}
			sx={{
				color: "#FFFFFF", // Set text color to white
				[`& .${timelineOppositeContentClasses.root}`]:
					window.innerWidth < 1200
						? {
								flex: 0.2,
						  }
						: {},
				mb: 8,
				ml: window.innerWidth > 600 ? 0 : -6,
			}}>
			{achievementData.map((year, index) => (
				<HistoryTimelineItem
					key={year.year}
					index={index}
					year={year}
				/>
			))}
		</Timeline>
	);
};

export default HistoryTimeline;
