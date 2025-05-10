import { Box } from "@mui/material";
import AnimatedPage from "./AnimatedPage";
import background from "../assets/images/eagles-4.png";
import HomeSection from "../components/HomeSection/HomeSection";
import Footer from "../components/Footer/Footer";
import Background from "../components/Background/Background";
import TeamMembersSection from "../components/TeamPage/TeamMembersSection";
import SectionHeading from "../components/SectionHeading/SectionHeading";
import teamMemberData from "../assets/data/teamMemberData";

const [headsAndLeads, autonomous, mechanical] = teamMemberData;

const TeamPage = () => {
	return (
		<>
			<AnimatedPage>
				<Background background={background} />
				<HomeSection
					title="The Eagles"
					subtitle="Our team are ambitious, creative and innovative engineers who are passionate about what they do."
				/>
				<Box
					sx={{
						backgroundColor: "white",
						px: 2,
						py: 5,
						display: "flex",
						flexDirection: "column",
						justifyItems: "center",
						alignItems: "center",
					}}>
					<SectionHeading
						title="Our Team"
						subtitle="Meet the team who make the magic happen."
						mainSection="true"
					/>
					<br />
					<TeamMembersSection
						title="Heads and Leads"
						subtitle="The visionaries who lead, inspire, and drive the team forward."
						members={headsAndLeads}
					/>
					<br />
					<TeamMembersSection
						title="Autonomous Team"
						subtitle="The tech minds behind innovation, coding intelligence and powering our autonomous systems"
						members={autonomous}
					/>
					<br />
					<TeamMembersSection
						title="Mechanical Team"
						subtitle="The builders and designers who shape ideas into reality through precision and engineering."
						members={mechanical}
					/>
				</Box>
				<Footer />
			</AnimatedPage>
		</>
	);
};

export default TeamPage;
