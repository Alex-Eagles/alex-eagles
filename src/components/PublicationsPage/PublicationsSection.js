import { Typography, Stack, Container } from "@mui/material";
import useAnimate from "../../hooks/use-animate";
import PublicationCard from "./PublicationCard";
import publicationData from "../../assets/data/publicationData";

const PublicationsSection = () => {
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
					Our Publications
				</Typography>
				<Typography
					variant="h6"
					sx={{
						textAlign: "center",
						fontWeight: 300,
						mb: 4,
					}}>
					We've written and contributed to publications that have been
					published in journals and presented at conferences.
				</Typography>
			</Stack>
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
