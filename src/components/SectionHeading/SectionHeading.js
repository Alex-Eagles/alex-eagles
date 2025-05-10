import React from "react";
import { Typography, Stack } from "@mui/material";
import useAnimate from "../../hooks/use-animate";

const SectionHeading = (props) => {
	const { title, subtitle, mainSection } = props;
	const elementRef = useAnimate("animate", false);

	return (
		<Stack
			ref={elementRef}
			sx={{
				opacity: 0,
				transition: "all 2s ease",
			}}>
			<Typography
				variant={mainSection ? "h4" : "h5"} // Use h4 variant if mainSection is true, otherwise h6
				sx={{
					textAlign: "center",
					fontWeight: mainSection ? 400 : 300, // Adjust fontWeight based on mainSection
					mb: mainSection ? 2 : 4, // Adjust mb (margin bottom) based on mainSection
				}}>
				{title}
			</Typography>
			<Typography
				variant={mainSection ? "h6" : "subtitle1"} // Use h6 variant if mainSection is true, otherwise subtitle1 or another appropriate variant
				sx={{
					textAlign: "center",
					fontWeight: mainSection ? 300 : 400, // Adjust fontWeight based on mainSection
					mb: mainSection ? 4 : 2, // Adjust mb (margin bottom) based on mainSection
				}}>
				{subtitle}
			</Typography>

		</Stack>
	);
};

export default SectionHeading;
