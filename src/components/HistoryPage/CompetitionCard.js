import { Typography, Stack, Container, Box } from "@mui/material";
import useAnimate from "../../hooks/use-animate";

const CompetitionCard = (props) => {
	const { index, name, image, description } = props;
	const elementRef = useAnimate("animate", false);

	return (
		<Stack
			ref={elementRef}
			direction={
				window.innerWidth < 600
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
				sx={{
					height: "100%",
				}}>
				<img
					src={image}
					alt="SAE Aero Design"
					style={{
						width: window.innerWidth > 600 ? "500px" : "100%",
						borderRadius: "20px",
					}}
				/>
			</Box>
			<Box
				sx={{
					pt: 4,
					px: window.innerWidth > 600 ? 4 : 0,
					// borderBottom: "2px solid #305fb0",
				}}>
				<Typography
					variant="h5"
					sx={{
						textAlign: window.innerWidth > 600 ? "left" : "center",
						fontWeight: 400,
						mb: 2,
					}}>
					{name}
				</Typography>
				<Typography
					variant="body2"
					sx={{
						textAlign: window.innerWidth > 600 ? "left" : "center",
						fontWeight: 300,
						mb: 4,
					}}>
					{description}
				</Typography>
			</Box>
		</Stack>
	);
};

export default CompetitionCard;
