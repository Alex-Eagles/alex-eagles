import { Stack, Container } from "@mui/material";
import PublicationCard from "./PublicationCard";
import publicationData from "../../assets/data/publicationData";
import SectionHeading from "../SectionHeading/SectionHeading";

const PublicationsSection = () => {
	return (
		<Container maxWidth="lg">
			<SectionHeading
				title="Our Publications"
				subtitle="We've written and contributed to publications that have been published in journals and presented at conferences."
			/>
			<Stack
				sx={{
					display: "flex",
					flexDirection: "column",
					justifyContent: "center",
					alignItems: "center",
					flexWrap: "wrap",
				}}>
				{publicationData.map((publication) => (
					<PublicationCard
						title={publication.title}
						image={publication.image}
						abstract={publication.abstract}
						link={publication.link}
					/>
				))}
			</Stack>
		</Container>
	);
};

export default PublicationsSection;
