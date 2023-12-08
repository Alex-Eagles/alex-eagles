import { Stack, Container, Typography, Box } from "@mui/material";
import SectionHeading from "../../SectionHeading/SectionHeading";
import blackLogo from "../../../assets/icons/logo-black.png";
import {
	School,
	Engineering,
	BarChart,
	Business,
	Flight,
} from "@mui/icons-material";
import useAnimate from "../../../hooks/use-animate";

const GoalsSection = () => {
	const logoRef = useAnimate("animate", false);
	const line1Ref = useAnimate("animate", false);
	const line2Ref = useAnimate("animate", false);
	const line3Ref = useAnimate("animate", false);
	const line4Ref = useAnimate("animate", false);
	const line5Ref = useAnimate("animate", false);

	return (
		<Container maxWidth="lg">
			<SectionHeading title="Our Goals" subtitle="We aim high." />
			<Stack
				gap={4}
				sx={{
					display: "flex",
					flexDirection: window.innerWidth > 850 ? "row" : "column",
					justifyContent: "center",
					alignItems: "center",
					// flexWrap: "wrap",
					mt: 4,
					mb: 8,
				}}>
				<Box
					ref={logoRef}
					sx={{
						display: "flex",
						justifyContent: "center",
						alignItems: "center",
						width: window.innerWidth > 850 ? "700px" : "50%",
						my: 2,
						opacity: 0,
						transform: "scale(0.5)",
						transition: "all 1s ease",
					}}>
					<img
						src={blackLogo}
						alt="Logo"
						style={{
							width: "100%",
							height: "auto",
						}}
					/>
				</Box>
				<Stack
					direction="column"
					spacing={2}
					sx={{
						my: 1,
						alignContent: "left",
						justifyContent: "left",
					}}>
					<Stack
						ref={line1Ref}
						direction="row"
						spacing={2}
						sx={{
							alignContent: "center",
							// justifyContent: "center",

							opacity: 0,
							transform: "translateY(50%)",
							transition: "all 1s ease",
							transitionDelay: "0.2s",
						}}>
						<School
							sx={{
								fontSize: "3rem",
								color: "#305fb0",
							}}
						/>
						<Typography variant="h6">
							Allowing students to better themselves and hone
							their skills.
						</Typography>
					</Stack>
					<Stack
						ref={line2Ref}
						direction="row"
						spacing={2}
						sx={{
							alignContent: "center",
							// justifyContent: "center",
							opacity: 0,
							transform: "translateY(50%)",
							transition: "all 1s ease",
							transitionDelay: "0.4s",
						}}>
						<Flight
							sx={{
								fontSize: "3rem",
								color: "#305fb0",
							}}
						/>
						<Typography variant="h6">
							Specializing in UAV design and development.
						</Typography>
					</Stack>
					<Stack
						ref={line3Ref}
						direction="row"
						spacing={2}
						sx={{
							alignContent: "center",
							// justifyContent: "center",
							opacity: 0,
							transform: "translateY(50%)",
							transition: "all 1s ease",
							transitionDelay: "0.6s",
						}}>
						<Engineering
							sx={{
								fontSize: "3rem",
								color: "#305fb0",
							}}
						/>
						<Typography variant="h6">
							Elevating proficiency in aerodynamics to advance
							technical knowledge and design skills in both
							mechanical and software engineering domains.
						</Typography>
					</Stack>
					<Stack
						ref={line4Ref}
						direction="row"
						spacing={2}
						sx={{
							// my: 1,
							alignContent: "center",
							// justifyContent: "center",
							opacity: 0,
							transform: "translateY(50%)",
							transition: "all 1s ease",
							transitionDelay: "0.8s",
						}}>
						<BarChart
							sx={{
								fontSize: "3rem",
								color: "#305fb0",
							}}
						/>

						<Typography variant="h6">
							Participating in international competitions.
						</Typography>
					</Stack>
					<Stack
						ref={line5Ref}
						direction="row"
						spacing={2}
						sx={{
							// my: 1,
							alignContent: "center",
							// justifyContent: "center",
							opacity: 0,
							transform: "translateY(50%)",
							transition: "all 1s ease",
							transitionDelay: "1s",
						}}>
						<Business
							sx={{
								fontSize: "3rem",
								color: "#305fb0",
							}}
						/>
						<Typography variant="h6">
							Transitioning the team into a startup focused on
							designing and fabricating eVTOLs and UAVs.
						</Typography>
					</Stack>
				</Stack>
			</Stack>
		</Container>
	);
};

export default GoalsSection;
