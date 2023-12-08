import { Container, Box } from "@mui/material";
import SponsorCard from "./SponsorCard";
import sponsorData from "../../assets/data/sponsorData";
import SectionHeading from "../SectionHeading/SectionHeading";

const SponsorsSection = () => {
	return (
		<Container maxWidth="lg">
			<SectionHeading
				title="Our Sponsors"
				subtitle="Partners who make our success possible"
			/>
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
