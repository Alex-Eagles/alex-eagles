import "./App.css";
import { Box } from "@mui/material";
import { Routes, Route, useLocation,Navigate } from "react-router-dom";
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

const App = () => {
	 const location = useLocation();
	
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
        		{location.pathname !== "/" && <NavBar />}

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
