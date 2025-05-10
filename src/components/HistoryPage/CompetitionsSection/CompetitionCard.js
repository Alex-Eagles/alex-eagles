import { Typography, Stack, Box } from "@mui/material";
import useAnimate from "../../../hooks/use-animate";

const CompetitionCard = (props) => {
	const { index, name, image, description } = props;
	const stackRef = useAnimate("animate", false);
	const imageRef = useAnimate("animate", false);
	const contentRef = useAnimate("animate", false);

	// Determine layout direction and animation direction
	const isReversed = index === 1;
	const isMobile = window.innerWidth < 850;
	const direction = isMobile ? "column" : isReversed ? "row-reverse" : "row";
	const transformDirection = isReversed ? "translateX(100%)" : "translateX(-100%)";

	return (
		<Stack
			ref={stackRef}
			direction={direction}
			alignItems="center"
			sx={{
				my: 4,
				mx: window.innerWidth > 600 ? 4 : 0,
				borderBottom: "3px solid #305fb0",
				py: 4,
				opacity: 0,
				transform: transformDirection,
				transition: "all 1s ease",
			}}>
			<Box
				ref={imageRef}
				sx={{
					height: "100%",
					opacity: 0,
					transform: transformDirection,
					transition: "all 1s ease",
					transitionDelay: "0.4s",
				}}>
				<img
					src={image}
					alt={name}
					style={{
						width: window.innerWidth > 600 ? "350px" : "100%",
						borderRadius: "20px",
					}}
				/>
			</Box>
			<Box
				ref={contentRef}
				sx={{
					pt: 4,
					px: window.innerWidth > 600 ? 4 : 0,
					opacity: 0,
					transform: transformDirection,
					transition: "all 1s ease",
					transitionDelay: "0.2s",
					color: "#FFFFFF",
				}}>
				<Typography
					variant="h5"
					sx={{
						textAlign: window.innerWidth > 600 ? "left" : "center",
						mb: 2,
						color: "#FFFFFF",
					}}>
					{name}
				</Typography>
				<Typography
					variant="body1"
					color="text.secondary"
					sx={{
						textAlign: window.innerWidth > 600 ? "left" : "center",
						mb: 4,
					}}>
					{description}
				</Typography>
			</Box>
		</Stack>
	);
};

export default CompetitionCard;
