import React from "react";
import { Typography, Stack } from "@mui/material";
import useAnimate from "../../hooks/use-animate";

const SectionHeading = (props) => {
	const { title, subtitle } = props;
	const elementRef = useAnimate("animate", false);

	return (
		<Stack
			ref={elementRef}
			sx={{
				opacity: 0,
				transition: "all 2s ease",
			}}>
			<Typography
				variant="h4"
				sx={{
					textAlign: "center",
					fontWeight: 400,
					mb: 2,
				}}>
				{title}
			</Typography>
			<Typography
				variant="h6"
				sx={{
					textAlign: "center",
					fontWeight: 300,
					mb: 4,
				}}>
				{subtitle}
			</Typography>
		</Stack>
	);
};

export default SectionHeading;
