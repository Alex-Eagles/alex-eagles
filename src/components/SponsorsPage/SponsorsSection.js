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
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: "center", // Center the cards
                    alignItems: "center",
                    gap: 4, // Add spacing between cards
                    mb: 8,
                }}>
                {sponsorData.map((sponsor, index) => {
                    return (
                        <SponsorCard
                            key={index}
                            name={sponsor.name}
                            image={sponsor.image}
                        />
                    );
                })}
            </Box>
        </Container>
    );
};

export default SponsorsSection;
