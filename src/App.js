import "./App.css";
import { Box } from "@mui/material";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import NavBar from "./components/NavBar/NavBar";
import LandingPage from "./pages/LandingPage";
import TeamPage from "./pages/TeamPage";
import HistoryPage from "./pages/HistoryPage";
import PublicationsPage from "./pages/PublicationsPage";
import SponsorsPage from "./pages/SponsorsPage";
import ContactPage from "./pages/ContactPage";
import ScenePage from "./pages/ScenePage";
// import Background from "./components/Background/Background";
// import background from "./assets/images/UAVs-help2.jpg";
import ScrollToTop from "./pages/ScrollToTop";
import SearchBar from "./components/SearchBar/SearchBar";
import BinarySearchTree from "./utils/BinarySearchTree";
import SearchResults from "./components/SearchResults/SearchResults";
import { useState } from "react";
import competitionData from "./assets/data/competitionData";
import mediaCoverageData from "./assets/data/mediaCoverageData";
import projectData from "./assets/data/projectData";
import sponsorData from "./assets/data/sponsorData";
import teamMemberData from "./assets/data/teamMemberData";

const bst = new BinarySearchTree();

// Populate the BST with page content
bst.insert("Team", "The Eagles: Our team are ambitious, creative and innovative engineers who are passionate about what they do.");
bst.insert("Sponsors", "Our Backers: Our sponsors help us every step of the way.");
bst.insert("Publications", "Our Written Work: Read our contributions.");
bst.insert("Contact", "Get in Touch: Want to join our team, become a sponsor, ask a question or just say hi? Reach out now.");
bst.insert("History", "Our History: Learn about our journey and achievements.");

// Populate the BST with additional data
competitionData.forEach((item) => {
  bst.insert(item.name.props.children, item.description.props.children);
});

mediaCoverageData.forEach((item) => {
  item.media.forEach((mediaItem) => {
    bst.insert(item.image, mediaItem.link);
  });
});

projectData.forEach((item) => {
  bst.insert(item.name, item.description);
});

sponsorData.forEach((item) => {
  bst.insert(item.name, "Sponsor");
});

teamMemberData.forEach((item) => {
  if (item.name) {
    bst.insert(item.name, item.role || "Team Member");
  }
});

const App = () => {
	const location = useLocation();
	const [searchResults, setSearchResults] = useState([]);
	const [query, setQuery] = useState("");

	const handleSearchResults = (results, searchTerm) => {
		setSearchResults(results);
		setQuery(searchTerm);
	};

	const theme = createTheme({
		palette: {
			primary: {
				main: "#305fb0",
			},
			secondary: {
				main: "#000000",
			},
		},
		typography: {
			// fontFamily: "Archivo, Roboto, sans-serif",
			fontFamily: "Montserrat, Roboto, sans-serif",
			h1: {
				fontWeight: 500,
				letterSpacing: "0rem",
				textTransform: "none",
			},
			h2: {
				fontWeight: 500,
				letterSpacing: "0rem",
				textTransform: "none",
			},
			h3: {
				fontWeight: 500,
				letterSpacing: "0rem",
				textTransform: "none",
			},
			h4: {
				fontWeight: 400,
				letterSpacing: "0rem",
				textTransform: "none",
			},
			h5: {
				fontWeight: 400,
				letterSpacing: "0rem",
				textTransform: "none",
			},
			h6: {
				fontWeight: 300,
				letterSpacing: "0rem",
				textTransform: "none",
			},

			button: {
				textTransform: "none",
			},
		},
	});

	return (
		<ThemeProvider theme={theme}>
			<Box sx={{ minWidth: "100vw !important", overflowX: "hidden" }}>
				{/* <Background background={background} /> */}
				{/* only show NavBar on non‑home routes */}
				<Box sx={{ position: "relative", zIndex: 1 }}>
					{location.pathname !== "/" && <NavBar bst={bst} onSearch={(results, searchTerm) => handleSearchResults(results, searchTerm)} />}
				</Box>
				<SearchResults results={searchResults} query={query} />
				<AnimatePresence mode="wait">
					<ScrollToTop />
					<Routes
						key={useLocation().pathname}
						location={useLocation()}>
						<Route path="/" element={<ScenePage/>} exact />
						<Route path="/team" element={<TeamPage />} exact />
						<Route
							path="/history"
							element={<HistoryPage />}
							exact
						/>
						<Route
							path="/publications"
							element={<PublicationsPage />}
							exact
						/>
						<Route
							path="/sponsors"
							element={<SponsorsPage />}
							exact
						/>
						<Route
							path="/contact"
							element={<ContactPage />}
							exact
						/>
						<Route path="*" element={<ScenePage />} />
					</Routes>
				</AnimatePresence>
			</Box>
		</ThemeProvider>
	);
};

export default App;
