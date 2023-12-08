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
						<Typography
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
							justifyContent="flex-start"
							alignItems={
								window.innerWidth > 1200
									? "center"
									: "flex-start"
							}
							alignContent="flex-start"
							// gap={2}
							spacing={2}>
							{achievement?.images?.map((image, index) => (
								<Box
									sx={{
										transition: "all 0.5s ease",
										width:
											window.innerWidth > 600
												? "400px"
												: "100%",
										aspectRatio: "16/9",
										borderRadius: "20px",
										"&:hover": {
											width:
												window.innerWidth > 600
													? "450px"
													: "110%",
										},
									}}>
									<img
										key={index}
										src={image}
										alt={achievement.title}
										style={{
											width: "100%",
											height: "100%",
											objectFit: "cover",
											borderRadius: "20px",
										}}
									/>
								</Box>
							))}
						</Stack>
					</Box>
				))}
			</TimelineContent>
		</TimelineItem>
	);
};

export default HistoryTimelineItem;
