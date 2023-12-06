import { Container, Stack, Typography, Box } from "@mui/material";
import SponsorCard from "./SponsorCard";
import sponsorData from "../../assets/data/sponsorData";
import useAnimate from "../../hooks/use-animate";

const SponsorsSection = () => {
	const elementRef = useAnimate("animate", false);
	return (
		<Container maxWidth="lg">
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
					Our Sponsors
				</Typography>
				<Typography
					variant="h6"
					sx={{
						textAlign: "center",
						fontWeight: 300,
						mb: 4,
					}}>
					Partners who make our work possible.
				</Typography>
			</Stack>
			<Box
				sx={{
					// mt: 4,
					display: "flex",
					flexWrap: "wrap",
					justifyContent:
						window.innerWidth > 600 ? "center" : "space-around",
					alignItems: window.innerWidth > 600 ? "start" : "center",
					placeContent: "center",
					placeItems: "center",
					mb: 8,
				}}>
				{sponsorData.map((sponsor, index) => {
					return (
						<SponsorCard
							key={index}
							name={sponsor.name}
							image={sponsor.image}
							link={sponsor.link}
						/>
					);
				})}
			</Box>
		</Container>
	);
};

export default SponsorsSection;
