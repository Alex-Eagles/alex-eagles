import React, { useState } from "react";
import { Box, TextField } from "@mui/material";
import BinarySearchTree from "../../utils/BinarySearchTree";

const SearchBar = ({ bst, onSearch }) => {
  const [query, setQuery] = useState("");

  const handleSearch = (event) => {
    const searchTerm = event.target.value;
    setQuery(searchTerm);

    if (searchTerm.trim() === "") {
      onSearch([]); // Notify parent of empty results
      return;
    }

    const searchResults = [];
    bst.inOrderTraversal((node) => {
      if (node.key.toLowerCase().includes(searchTerm.toLowerCase())) {
        searchResults.push({ key: node.key, value: node.value });
      }
    });

    onSearch(searchResults); // Notify parent of results
  };

  return (
    <Box sx={{ width: "100%", maxWidth: 360, margin: "0 auto" }}>
      <TextField
        fullWidth
        label="Search"
        variant="outlined"
        value={query}
        onChange={handleSearch}
      />
    </Box>
  );
};

export default SearchBar;
