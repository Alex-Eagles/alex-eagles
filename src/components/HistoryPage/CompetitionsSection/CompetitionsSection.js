import { Container } from "@mui/material";
import competitionData from "../../../assets/data/competitionData";
import CompetitionCard from "./CompetitionCard";
import SectionHeading from "../../SectionHeading/SectionHeading";

const CompetitionsSection = () => {
	return (
		<Container
			maxWidth="lg"
			sx={{
				color: "#FFFFFF", // Set text color to white
			}}>
			<SectionHeading
				title="The Competitions"
				subtitle="Where we compete to showcase our innovations"
			/>
			{competitionData.map((competition, index) => {
				return (
					<CompetitionCard
						key={index}
						index={index}
						name={competition.name}
						image={competition.image}
						description={competition.description}
					/>
				);
			})}
		</Container>
	);
};

export default CompetitionsSection;
