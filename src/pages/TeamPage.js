import React, { useState, useMemo } from "react";
import { Box } from "@mui/material";
import HomeSection from "../components/HomeSection/HomeSection";
import AnimatedPage from "./AnimatedPage";
import backgroundPhoto from "../assets/images/team-2025.jpg";
import background from "../assets/images/bgnd-logo.png";
import Footer from "../components/Footer/Footer";
import Background from "../components/Background/Background";
import FilterBar from "../components/TeamPage/FilterBar";
import TeamMembersSection from "../components/TeamPage/TeamMembersSection";
import teamMemberData from "../assets/data/teamMemberData";

const TeamPage = () => {
    const [activeTeam, setActiveTeam] = useState("All");
    const [activeSubTeam, setActiveSubTeam] = useState(null);

    const handleTeamChange = (team) => {
        setActiveTeam(team);
        setActiveSubTeam(null);
    };

    // Normalize data: If the old data is an array of arrays, flatten it to a single array
    const normalizedData = useMemo(() => {
        if (!teamMemberData || teamMemberData.length === 0) return [];
        if (Array.isArray(teamMemberData[0])) {
            return teamMemberData.flat();
        }
        return teamMemberData;
    }, []);

    // Filter members based on selected categories
    const filteredMembers = useMemo(() => {
        let filtered = normalizedData;

        if (activeTeam !== "All") {
            filtered = filtered.filter((m) => m?.team === activeTeam);
        }

        if (activeSubTeam) {
            filtered = filtered.filter((m) => m?.subTeam === activeSubTeam);
        }

        return filtered;
    }, [activeTeam, activeSubTeam, normalizedData]);

    return (
        <>
            {/* Fixed Background */}
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
                {/* Hero Section */}
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

                {/* Main Content Area */}
                <Box
                    sx={{
                        width: "100%",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        minHeight: "50vh",
                        backgroundColor: "#ffffff", // Added solid background for the grid area to match the new clean design
                    }}
                >
                    <div style={{ width: "100%" }}>
                        <FilterBar
                            activeTeam={activeTeam}
                            activeSubTeam={activeSubTeam}
                            onTeamChange={handleTeamChange}
                            onSubTeamChange={setActiveSubTeam}
                        />
                    </div>
                    
                    <div style={{ width: "100%" }}>
                        <TeamMembersSection members={filteredMembers} />
                    </div>
                </Box>

                <Footer />
            </AnimatedPage>
        </>
    );
};

export default TeamPage;