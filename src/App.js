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
  "home": "/HomePage",
  "team": "/TeamPage",
  "uavc": "/HistoryPage",
  "landing page": "/HomePage",
  "members": "/TeamPage",
  "memberships": "/TeamPage",
  "member": "/TeamPage",

  "contact": "/ContactPage",
  "form": "/ContactPage",
  "email": "/ContactPage",
  "phone": "/ContactPage",
  "join": "/ContactPage",
  "call": "/ContactPage",
  "hi": "/ContactPage",
  "Facebook": "/ContactPage",
  "Instagram": "/ContactPage",
  "LinkedIn": "/ContactPage",
  "GitHub": "/ContactPage",
  "social": "/ContactPage",
  "name": "/ContactPage",
  "message": "/ContactPage",
  "send": "/ContactPage",

  "history": "/HistoryPage",
  "competitions": "/HistoryPage",
  "projects": "/HistoryPage",
  "competition": "/HistoryPage",
  "media": "/HistoryPage",
  "coverage": "/HistoryPage",
  "articles": "/HistoryPage",
  "article": "/HistoryPage",
  "competition": "/HistoryPage",
  "competitions": "/HistoryPage",
  "aerial": "/HistoryPage",
  "vehicle": "/HistoryPage",
  "unmanned": "/HistoryPage",
  "aerial vehicle": "/HistoryPage",
  "UAV": "/HistoryPage",
  "SAE": "/HistoryPage",
  "SUAS": "/HistoryPage",
  "drone": "/HistoryPage",
  "fixed": "/HistoryPage",
  "wing": "/HistoryPage",
  "aero": "/HistoryPage",
  "team": "/HistoryPage",
  "achievements": "/HistoryPage",
  "awards": "/HistoryPage",
  "award": "/HistoryPage",
  "achievement": "/HistoryPage",
  "accomplishments": "/HistoryPage",
  "accomplishment": "/HistoryPage",
  "place": "/HistoryPage",
  "First": "/HistoryPage",
  "Second": "/HistoryPage",
  "Third": "/HistoryPage",
  "Fourth": "/HistoryPage",
  "Fifth": "/HistoryPage",
  "Eleventh": "/HistoryPage",
  "1st": "/HistoryPage",
  "2nd": "/HistoryPage",
  "3rd": "/HistoryPage",
  "4th": "/HistoryPage",
  "5th": "/HistoryPage",
  "11th": "/HistoryPage",
  "overall": "/HistoryPage",
  "ranking": "/HistoryPage",
  "rank": "/HistoryPage",
  "results": "/HistoryPage",
  "result": "/HistoryPage",
  "best": "/HistoryPage",
  "performance": "/HistoryPage",
  "presentation": "/HistoryPage",
  "alex": "/HistoryPage",
  "eagles": "/HistoryPage",
  "dmc": "/HistoryPage",
  "mbc": "/HistoryPage",
  "cbc": "/HistoryPage",
  "on": "/HistoryPage",
  "tv": "/HistoryPage",
  "interviews": "/HistoryPage",
  "interview": "/HistoryPage",
  "news": "/HistoryPage",

  "publications": "/PublicationsPage",
  "publication": "/PublicationsPage",
  "paper": "/PublicationsPage",
  "design": "/PublicationsPage",
  "journal": "/PublicationsPage",
  "conference": "/PublicationsPage",
  "conferences": "/PublicationsPage",
  "research": "/PublicationsPage",
  "researches": "/PublicationsPage",
  "world": "/PublicationsPage",
  "case": "/PublicationsPage",
  "study": "/PublicationsPage",
  "survey": "/PublicationsPage",
  "review": "/PublicationsPage",
  "empowering": "/PublicationsPage",
  "autonomous": "/PublicationsPage",

  "fabrication ": "/PublicationsPage",
  "fixed": "/PublicationsPage",
  "wing": "/PublicationsPage",
  "unmanned": "/PublicationsPage",
  "aerial": "/PublicationsPage",
  "vehicle": "/PublicationsPage",
  "low": "/PublicationsPage",
  "reynolds": "/PublicationsPage",
  "number": "/PublicationsPage",
  "uav": "/PublicationsPage",
  "aerial": "/PublicationsPage",
  "vehicle": "/PublicationsPage",
  "unmanned": "/PublicationsPage",
  "flare": "/PublicationsPage",
  "free": "/PublicationsPage",
  "image": "/PublicationsPage",
  "processing": "/PublicationsPage",
  "vision": "/PublicationsPage",
  "uformer": "/PublicationsPage",
  "depth": "/PublicationsPage",
  "insights": "/PublicationsPage",
  "icassp2024": "/PublicationsPage",

  "team": "/TeamPage",
  "members": "/TeamPage",
  "member": "/TeamPage",
  "lead": "/TeamPage",
  "leader": "/TeamPage",
  "vice": "/TeamPage",
  "subteam": "/TeamPage",
  "autonomous": "/TeamPage",
  "hardware": "/TeamPage",
  "computer vision": "/TeamPage",
  "software": "/TeamPage",
  "mechanical": "/TeamPage",
  "wing": "/TeamPage",
  "cad": "/TeamPage",
  "design": "/TeamPage",
  "propulsion": "/TeamPage",
  "fuselage": "/TeamPage",
  "electronics": "/TeamPage",
  "team": "/TeamPage",
  "member": "/TeamPage",
  "members": "/TeamPage",
  "engineer": "/TeamPage",
  "engineering": "/TeamPage",
  "heads": "/TeamPage",
  "head": "/TeamPage",
  "Electro-mechanical": "/TeamPage",
  "integration": "/TeamPage",
  "cfd": "/TeamPage",
  "aerodynamics": "/TeamPage",
  "aero": "/TeamPage",
  "structures": "/TeamPage",
  "structural": "/TeamPage",
  "structure": "/TeamPage",
  "subteam": "/TeamPage",
  "sub": "/TeamPage",
  "tail": "/TeamPage",
  "stability": "/TeamPage",

  // team members
  "Ahmed Baheyeldin": "/TeamPage",
  "Norhan Mohammed": "/TeamPage",
  "Peter Ayoub": "/TeamPage",
  "Ahmed Anan": "/TeamPage",
  "Ahmed Saleh": "/TeamPage",
  "Ann Tarek": "/TeamPage",
  "Maram Wael": "/TeamPage",
  "Ibrahem Mohamed": "/TeamPage",
  "Abdelghafour Alaa": "/TeamPage",
  "Abdelrahman Arafat": "/TeamPage",
  "Adham Amr": "/TeamPage",
  "Ehdaa Farahat": "/TeamPage",
  "Hattan Yousry": "/TeamPage",
  "Osama Mohamed": "/TeamPage",
  "Mohamed Fathallah": "/TeamPage",
  "Youssef Hozayen": "/TeamPage",
  "Ahmed Saeed": "/TeamPage",
  "John Ayman": "/TeamPage",
  "Mazen Nazeih": "/TeamPage",
  "Menna Ezzat": "/TeamPage",
  "Sara Gharib": "/TeamPage",
  "Eyad Ashraf": "/TeamPage",
  "Mohamed Bassem": "/TeamPage",
  "Peter Mina": "/TeamPage",
  "Esraa Ahmed": "/TeamPage",
  "Farah harfoush": "/TeamPage",
  "Hana Waleed": "/TeamPage",
  "Hossam Eldeen": "/TeamPage",
  "Mo'men Ashraf": "/TeamPage",
  "Moamen Nawara": "/TeamPage",
  "Mohamed Brbry": "/TeamPage",
  "Mohamed Elzayat": "/TeamPage",
  "Rana": "/TeamPage",
  "Reem Eldalil": "/TeamPage",
  "Youssef Ibrahim": "/TeamPage",




  "sponsors": "/SponsersPage",
  "sponsor": "/SponsersPage",
  "mathworks": "/SponsersPage",
  "dualsky": "/SponsersPage",
  "mejzlik": "/SponsersPage",
  "tyto robotics": "/SponsersPage",
  "t-motor": "/SponsersPage",
  "scorpion": "/SponsersPage",
  "partners": "/SponsersPage",
  "success": "/SponsersPage",
  "support": "/SponsersPage",
  "join": "/SponsersPage",
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
