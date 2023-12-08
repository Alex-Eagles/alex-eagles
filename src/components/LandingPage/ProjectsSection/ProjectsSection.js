import { Stack, Container } from "@mui/material";
import ProjectCard from "./ProjectCard";
import SectionHeading from "../../SectionHeading/SectionHeading";
import projectData from "../../../assets/data/projectData";

const ProjectsSection = () => {
	return (
		<Container maxWidth="lg">
			<SectionHeading title="Our Work" subtitle="We build the future." />
			<Stack
				sx={{
					display: "flex",
					flexDirection: "column",
					justifyContent: "center",
					alignItems: "center",
					flexWrap: "wrap",
				}}>
				{projectData.map((project, index) => (
					<ProjectCard
						key={index}
						index={index}
						title={project.title}
						name={project.name}
						image={project.image}
						description={project.description}
					/>
				))}
			</Stack>
		</Container>
	);
};

export default ProjectsSection;
