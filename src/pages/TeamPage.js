import HomeSection from "../components/HomeSection/HomeSection";
import AnimatedPage from "./AnimatedPage";
import backgroundPhoto from "../assets/images/team-2025.jpg";
import background from "../assets/images/bgnd-logo.png"; // Corrected path or replaced file
import { Box } from "@mui/material";
import Footer from "../components/Footer/Footer";
import Background from "../components/Background/Background";
import TeamMembersSection from "../components/TeamPage/TeamMembersSection";
import SectionHeading from "../components/SectionHeading/SectionHeading";
import teamMemberData from "../assets/data/teamMemberData";

const [heads, autonomusLead, mechanicalLead, autonomous, mechanical] = teamMemberData;

const TeamPage = () => {
	return (
		<>
			<Box
				sx={{
					position: "fixed",
					top: 0,
					left: 0,
					width: "100%",
					height: "100%",
					backgroundImage: `url(${background})`,
					backgroundSize: "cover",
					backgroundPosition: "center",
					backgroundRepeat: "no-repeat",
					zIndex: -2,
				}}
			/>
			<AnimatedPage>
				<Box
					sx={{
						position: "relative",
						height: "71.5vh",
					}}
				>
					<Background background={backgroundPhoto} />
					<HomeSection
						title="The Eagles"
						subtitle="Meet the team who make the magic happen."
					/>
				</Box>
				<Box
					sx={{
						color: "#FFFFFF",
						px: 2,
						py: 5,
						display: "flex",
						flexDirection: "column",
						justifyItems: "center",
						alignItems: "center",
					}}>

					<SectionHeading
						title="Our Team"
						subtitle="Meet the visionaries who guide our mission, set our goals, and inspire the team to achieve excellence."
						mainSection="true"
					/>
					<br />
					<TeamMembersSection
						title="Heads"
						subtitle="Meet the visionaries who guide our mission, set our goals, and inspire the team to achieve excellence."
						members={heads}
					/>
					<br />
					<TeamMembersSection
						title="Autonomus Lead"
						subtitle="Leading the charge in innovation, our autonomous team heads push the boundaries of intelligence and automation."
						members={autonomusLead}
					/>
					<br />
					<TeamMembersSection
						title="Mechanical Lead"
						subtitle="At the forefront of engineering excellence, our mechanical heads transform imagination into mechanical reality."
						members={mechanicalLead}
					/>
					<br />
					<TeamMembersSection
						title="Autonomous Team"
						subtitle="The tech innovators coding, wiring, and empowering the brain behind our autonomous systems."
						members={autonomous}
					/>
					<br />
					<TeamMembersSection
						title="Mechanical Team"
						subtitle="The builders and makers who craft ideas into precision-engineered reality, shaping the future piece by piece."
						members={mechanical}
					/>
				</Box>
				<Footer />
			</AnimatedPage>
		</>
	);
};

export default TeamPage;
