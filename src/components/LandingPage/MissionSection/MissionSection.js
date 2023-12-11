import {
	Card,
	CardContent,
	Typography,
	Avatar,
	Stack,
	CardMedia,
	Container,
} from "@mui/material";
import SectionHeading from "../../SectionHeading/SectionHeading";
import useAnimate from "../../../hooks/use-animate";
import teamPhoto from "../../../assets/images/team-photo.png";

const MissionSection = () => {
	const cardRef = useAnimate("animate", false);
	const imageRef = useAnimate("animate", false);
	const contentRef = useAnimate("animate", false);

	return (
		<Container maxWidth="lg">
			<SectionHeading
				title="Our Mission"
				subtitle="We strive for excellence in everything we do."
			/>
			<Card
				ref={cardRef}
				sx={{
					// maxWidth: 150,
					mx: window.innerWidth > 600 ? 4 : 0,
					my: 4,
					boxShadow: "none",
					display: "flex",
					flexDirection:
						window.innerWidth > 850 ? "row" : "column-reverse",
					alignItems: "center",
					justifyContent: "space-around",
					gap: 2,
					opacity: 0,
					transform: "translateX(-50%)",
					transition: "all 1s ease",
					borderRadius: 0,
					borderBottom: "3px solid #305fb0",
					py: 4,
				}}>
				<CardContent
					ref={contentRef}
					sx={{
						display: "flex",
						flexDirection: "column",
						alignItems: window.innerWidth > 600 ? "left" : "center",
						justifyContent: "center",
						textAlign: window.innerWidth > 600 ? "left" : "center",
						// borderBottom: "3px solid #305fb0",
						py: 4,
						px: window.innerWidth > 600 ? 4 : 0,
						opacity: 0,
						transform: "translateX(-50%)",

						transition: "all 1s ease",
						transitionDelay: "0.4s",
					}}>
					<Typography variant="body1">
						Our mission is crystal clear: conceive, design, and
						manufacture high-efficiency Unmanned Aerial Vehicles
						(UAVs) for complex tasks like object detection,
						localization, and precise payload deployment. Our UAVs
						redefine international standards and compete in
						prestigious events such as SAE Aero Design, SUAS, and
						UAVC. With a vision to transition into a pioneering
						startup, we aim to drive innovation in UAV technology.
					</Typography>
				</CardContent>
				<CardMedia
					ref={imageRef}
					component="img"
					alt="Team Photo"
					src={teamPhoto}
					sx={{
						width: window.innerWidth > 850 ? 550 : "100%",
						// height: window.innerWidth > 850 ? 400 : "",
						// mx: "auto",
						ml: window.innerWidth > 850 ? 4 : "",
						// border: "3px solid #305fb0",
						borderRadius: "20px",
						opacity: 0,
						transform: "translateX(-50%)",
						transition: "all 1s ease",
						transitionDelay: "0.8s",
					}}
				/>
			</Card>
		</Container>
	);
};

export default MissionSection;
