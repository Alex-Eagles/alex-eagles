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
import IntroPage from "./pages/IntroPage";

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
bst.insert("Team", "/team"); // Correct path for TeamPage
bst.insert("Sponsors", "/sponsors"); // Correct path for SponsorsPage
bst.insert("Publications", "/publications"); // Correct path for PublicationsPage
bst.insert("Contact", "/contact"); // Correct path for ContactPage
bst.insert("History", "/history"); // Correct path for HistoryPage

// Ensure valid paths are inserted into the BST
competitionData.forEach((item) => {
  if (item.name?.props?.children && item.route) {
    bst.insert(item.name.props.children, item.route); // Use `item.route` instead of description
  }
});

mediaCoverageData.forEach((item) => {
  item.media.forEach((mediaItem) => {
    if (item.image && mediaItem.link) {
      bst.insert(item.image, mediaItem.link);
    }
  });
});

projectData.forEach((item) => {
  if (item.name && item.description) {
    bst.insert(item.name, item.description);
  }
});

sponsorData.forEach((item) => {
  if (item.name) {
    bst.insert(item.name, "/sponsors");
  }
});

teamMemberData.forEach((item) => {
  if (item.name) {
    bst.insert(item.name, item.role || "Team Member");
  }
});

const searchDictionary = {
  "home": "/", // Not found, left unchanged
  "team": "/team",
  "uavc": "/history",
  "landing page": "/", // Not found, left unchanged
  "members": "/team",
  "memberships": "/team",
  "member": "/team",

  "contact": "/contact",
  "form": "/contact",
  "email": "/contact",
  "phone": "/contact",
  "join": "/contact",
  "call": "/contact",
  "hi": "/contact",
  "facebook": "/contact",
  "instagram": "/contact",
  "linkedin": "/contact",
  "github": "/contact",
  "social": "/contact",
  "name": "/contact",
  "message": "/contact",
  "send": "/contact",

  "history": "/history",
  "competitions": "/history",
  "projects": "/history",
  "compitition": "/history",
  "media": "/history",
  "coverage": "/history",
  "articles": "/history",
  "article": "/history",
  "competition": "/history",
  "competitions": "/history",
  "aerial": "/history",
  "vehicle": "/history",
  "unmanned": "/history",
  "aerial vehicle": "/history",
  "uav": "/history",
  "sae": "/history",
  "suas": "/history",
  "drone": "/history",
  "fixed": "/history",
  "wing": "/history",
  "aero": "/history",
  "team": "/history",
  "achievements": "/history",
  "awards": "/history",
  "award": "/history",
  "achievement": "/history",
  "accomplishments": "/history",
  "accomplishment": "/history",
  "place": "/history",
  "first": "/history",
  "second": "/history",
  "third": "/history",
  "fourth": "/history",
  "fifth": "/history",
  "eleventh": "/history",
  "1st": "/history",
  "2nd": "/history",
  "3rd": "/history",
  "4th": "/history",
  "5th": "/history",
  "11th": "/history",
  "overall": "/history",
  "ranking": "/history",
  "rank": "/history",
  "results": "/history",
  "result": "/history",
  "best": "/history",
  "performance": "/history",
  "presentation": "/history",
  "alex": "/history",
  "eagles": "/history",
  "dmc": "/history",
  "mbc": "/history",
  "cbc": "/history",
  "on": "/history",
  "tv": "/history",
  "interviews": "/history",
  "interview": "/history",
  "news": "/history",

  "publications": "/publications",
  "publication": "/publications",
  "paper": "/publications",
  "design": "/publications",
  "journal": "/publications",
  "conference": "/publications",
  "conferences": "/publications",
  "research": "/publications",
  "researches": "/publications",
  "world": "/publications",
  "case": "/publications",
  "study": "/publications",
  "survey": "/publications",
  "review": "/publications",
  "empowering": "/publications",
  "autonomous": "/publications",

  "fabrication ": "/publications",
  "fixed": "/publications",
  "wing": "/publications",
  "unmanned": "/publications",
  "aerial": "/publications",
  "vehicle": "/publications",
  "low": "/publications",
  "reynolds": "/publications",
  "number": "/publications",
  "uav": "/publications",
  "aerial": "/publications",
  "vehicle": "/publications",
  "unmanned": "/publications",
  "flare": "/publications",
  "free": "/publications",
  "image": "/publications",
  "processing": "/publications",
  "vision": "/publications",
  "uformer": "/publications",
  "depth": "/publications",
  "insights": "/publications",
  "icassp2024": "/publications",

  "team": "/team",
  "members": "/team",
  "memberships": "/team",
  "member": "/team",
  "lead": "/team",
  "captain": "/team",
  "leader": "/team",
  "ceo": "/team",
  "vice": "/team",
  "subteam": "/team",
  "autonomous": "/team",
  "hardware": "/team",
  "computer vision": "/team",
  "vision": "/team",
  "software": "/team",
  "mechanical": "/team",
  "wing": "/team",
  "cad": "/team",
  "design": "/team",
  "propulsion": "/team",
  "fuselage": "/team",
  "electronics": "/team",
  "team": "/team",
  "member": "/team",
  "members": "/team",
  "engineer": "/team",
  "engineers": "/team",
  "engineering": "/team",
  "teamwork": "/team",
  "heads": "/team",
  "head": "/team",
  "electro": "/team",
  "integration": "/team",
  "cfd": "/team",
  "aerodynamics": "/team",
  "aero": "/team",
  "structures": "/team",
  "structural": "/team",
  "structure": "/team",
  "subteam": "/team",
  "sub": "/team",
  "tail": "/team",
  "stability": "/team",

  "sponsors": "/sponsors",
  "sponsor": "/sponsors",
  "mathworks": "/sponsors",
  "dualsky": "/sponsors",
  "mejzlik": "/sponsors",
  "tyto robotics": "/sponsors",
  "t-motor": "/sponsors",
  "scorpion": "/sponsors",
  "partners": "/sponsors",
  "success": "/sponsors",
  "support": "/sponsors",
  "join": "/sponsors",
};

Object.entries(searchDictionary).forEach(([key, value]) => {
  bst.insert(key, value);
});

// Debug log to verify BST population
console.log("BST populated with:", bst);

const App = () => {
	const location = useLocation();
	const [searchResults, setSearchResults] = useState([]);
	const [query, setQuery] = useState("");

	const handleSearchResults = (results, searchTerm) => {
		console.log("Search term:", searchTerm);
		console.log("Search results:", results);
		setSearchResults(results);
		setQuery(searchTerm);
	};

	const handleCloseSearchResults = (result) => {
		if (result) {
			// Handle individual result close
			setSearchResults((prevResults) => prevResults.filter((r) => r !== result));
		} else {
			// Handle closing the entire search results card
			setSearchResults([]);
		}
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
				{/* Optional background layer */}
				{/* <Background background={background} /> */}

				{/* Show NavBar on non-home routes */}
				<Box sx={{ position: "relative", zIndex: 1 }}>
					{location.pathname !== "/" && (
						<NavBar
							bst={bst}
							onSearch={(results, searchTerm) =>
								handleSearchResults(results, searchTerm)
							}
						/>
					)}
				</Box>

				<SearchResults results={searchResults} query={query} onClose={handleCloseSearchResults} />

				<AnimatePresence>
					<ScrollToTop />
					<Routes key={location.pathname} location={location}>
						<Route path="/" element={<ScenePage />} exact />
						<Route path="/team" element={<TeamPage />} exact />
						<Route path="/history" element={<HistoryPage />} exact />
						<Route path="/publications" element={<PublicationsPage />} exact />
						<Route path="/sponsors" element={<SponsorsPage />} exact />
						<Route path="/contact" element={<ContactPage />} exact />
						<Route path="/intro" element={<IntroPage />} exact />
					</Routes>
				</AnimatePresence>
			</Box>
		</ThemeProvider>
	);
};

export default App;
