import { Box } from "@mui/material";
import useAnimate from "../../hooks/use-animate";

const Background = ({ background }) => {
	const backgroundRef = useAnimate("animate-background", false);

	return (
		<Box
			sx={{
				position: "absolute",
				top: 0,
				left: 0,
				width: "100%",
				height: "100%",
				zIndex: -1,
			}}
		>
			<Box
				ref={backgroundRef}
				sx={{
					width: "100%",
					height: "100%",
					backgroundSize: "cover",
					backgroundPosition: "center",
					backgroundImage: `url(${background})`,
				}}
			/>
		</Box>
	);
};

export default Background;
