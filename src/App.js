import "./App.css";
import NavBar from "./components/NavBar";
import LandingPage from "./pages/LandingPage";
import TeamPage from "./pages/TeamPage";
import { Box } from "@mui/material";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { ThemeProvider, createTheme } from "@mui/material/styles";

function App() {
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
				<NavBar />
				<AnimatePresence mode="wait">
					<Routes
						key={useLocation().pathname}
						location={useLocation()}>
						<Route path="/" element={<LandingPage />} exact />
						<Route path="/team" element={<TeamPage />} exact />
						{/* <Route path="/contact" element={<ContactPage />} exact /> */}
						<Route path="*" element={<LandingPage />} />
					</Routes>
				</AnimatePresence>
			</Box>
		</ThemeProvider>
	);
}

export default App;