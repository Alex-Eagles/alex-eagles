import { Box } from "@mui/material";
import useAnimate from "../../hooks/use-animate";

const Background = (props) => {
	const backgroundRef = useAnimate("animate-background", false);

	return (
		<Box
			// ref={backgroundRef}
			sx={{
				position: "fixed",
				minHeight: "100vh !important",
				maxHeight: "100vh !important",
				minWidth: "100vw !important",
				maxWidth: "100vw !important",
				// opacity: "0",
				// transition: "width 0.5s ease",
				// transitionDelay: "0.75s",
				// width: "0.001vw",
				// height: "100%",
				// backgroundSize: "cover",
				// backgroundPosition: "center",
				zIndex: "-1",
				overflow: "hidden",
				// backgroundImage: `url(${props.background})`,
			}}>
			<Box
				ref={backgroundRef}
				sx={{
					// position: "fixed",
					minHeight: "100vh !important",
					// minWidth: "100vw !important",
					maxWidth: "100vw !important",
					maxHeight: "100vh !important",
					// opacity: "0",
					transition: "width 0.5s ease",
					transitionDelay: "0.4s",
					width: "0.001vw",
					height: "100%",
					backgroundSize: "cover",
					backgroundPosition: "center",
					zIndex: "-1",
					overflow: "hidden",
					backgroundImage: `url(${props.background})`,
				}}></Box>
		</Box>
	);
};

export default Background;
