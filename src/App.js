import "./App.css";
import { Box } from "@mui/material";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { ThemeProvider, createTheme } from "@mui/material/styles";

import NavBar from "./components/NavBar/NavBar";

import TeamPage from "./pages/TeamPage";
import HistoryPage from "./pages/HistoryPage";
import PublicationsPage from "./pages/PublicationsPage";
import SponsorsPage from "./pages/SponsorsPage";
import ContactPage from "./pages/ContactPage";
import ScenePage from "./pages/ScenePage";
import IntroPage from "./pages/IntroPage";
import HomePage from "./pages/HomePage";


// HomePage (composed in ./pages/HomePage) already imports these sections.


import ScrollToTop from "./pages/ScrollToTop";

import SearchResults from "./components/SearchResults/SearchResults";

import BinarySearchTree from "./utils/BinarySearchTree";

import { useState } from "react";


import competitionData from "./assets/data/competitionData";
import sponsorData from "./assets/data/sponsorData";
import teamMemberData from "./assets/data/teamMemberData";




const bst = new BinarySearchTree();



bst.insert("Team", "/team");
bst.insert("Sponsors", "/sponsors");
bst.insert("Publications", "/publications");
bst.insert("Contact", "/contact");
bst.insert("History", "/history");
bst.insert("Home", "/home");




competitionData.forEach((item) => {

  if (item.name?.props?.children && item.route) {

    bst.insert(
      item.name.props.children,
      item.route
    );

  }

});




sponsorData.forEach((item)=>{

  if(item.name){

    bst.insert(
      item.name,
      "/sponsors"
    );

  }

});




teamMemberData.forEach((item)=>{

  if(item.name){

    bst.insert(
      item.name,
      "/team"
    );

  }

});






const searchDictionary = {

home:"/home",

team:"/team",

contact:"/contact",

history:"/history",

competitions:"/history",

publications:"/publications",

sponsors:"/sponsors",

};





Object.entries(searchDictionary).forEach(([key,value])=>{

  bst.insert(
    key,
    value
  );

});














const App = () => {


const location = useLocation();


const [searchResults,setSearchResults] = useState([]);

const [query,setQuery] = useState("");






const handleSearchResults = (results,searchTerm)=>{

setSearchResults(results);

setQuery(searchTerm);

};






const handleCloseSearchResults = ()=>{

setSearchResults([]);

};







const theme = createTheme({

palette:{

primary:{

main:"#305fb0",

},

secondary:{

main:"#000000",

},

},



typography:{

fontFamily:"Montserrat, Roboto, sans-serif",

},

});







return (


<ThemeProvider theme={theme}>


<Box

sx={{

minWidth:"100vw",

overflowX:"hidden"

}}

>




<Box

sx={{

position:"relative",

zIndex:1

}}

>



<NavBar


bst={bst}


onSearch={(results,searchTerm)=>

handleSearchResults(

results,

searchTerm

)

}


/>



</Box>








<SearchResults

results={searchResults}

query={query}

onClose={handleCloseSearchResults}


/>







<AnimatePresence>


<ScrollToTop />




<Routes

key={location.pathname}

location={location}

>




<Route

path="/"

element={<ScenePage />}

/>





<Route

path="/home"

element={<HomePage />}

/>





<Route

path="/team"

element={<TeamPage />}

/>





<Route

path="/history"

element={<HistoryPage />}

/>





<Route

path="/publications"

element={<PublicationsPage />}

/>





<Route

path="/sponsors"

element={<SponsorsPage />}

/>





<Route

path="/contact"

element={<ContactPage />}

/>





<Route

path="/intro"

element={<IntroPage />}

/>





</Routes>



</AnimatePresence>





</Box>


</ThemeProvider>


);


};




export default App;