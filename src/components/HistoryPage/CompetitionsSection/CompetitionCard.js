import { Typography, Stack, Container, Box } from "@mui/material";
import useAnimate from "../../../hooks/use-animate";

const CompetitionCard = (props) => {
	const { index, name, image, description } = props;
	const stackRef = useAnimate("animate", false);
	const imageRef = useAnimate("animate", false);
	const contentRef = useAnimate("animate", false);

	return (
		<Stack
			ref={stackRef}
			direction={
				window.innerWidth < 850
					? "column"
					: index == 1
					? "row-reverse"
					: "row"
			}
			alignItems="center"
			sx={{
				my: 4,
				mx: window.innerWidth > 600 ? 4 : 0,
				borderBottom: "3px solid #305fb0",
				py: 4,
				opacity: 0,
				transform:
					index == 1 ? "translateX(100%)" : "translateX(-100%)",
				transition: "all 1s ease",
			}}>
			<Box
				ref={imageRef}
				sx={{
					height: "100%",
					opacity: 0,
					transform:
						index == 1 ? "translateX(100%)" : "translateX(-100%)",
					transition: "all 1s ease",
					transitionDelay: "0.4s",
				}}>
				<img
					src={image}
					alt="SAE Aero Design"
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
					// borderBottom: "2px solid #305fb0",
					opacity: 0,
					transform:
						index == 1 ? "translateX(100%)" : "translateX(-100%)",
					transition: "all 1s ease",
					transitionDelay: "0.2s",
				}}>
				<Typography
					variant="h5"
					sx={{
						textAlign: window.innerWidth > 600 ? "left" : "center",
						mb: 2,
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
