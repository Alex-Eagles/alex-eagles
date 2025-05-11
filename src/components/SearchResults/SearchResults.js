import React from "react";
import { Box, Card, CardContent, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const SearchResults = ({ results, query }) => {
  const navigate = useNavigate();

  if (!results || results.length === 0) return null;

  const highlightText = (text, query) => {
    if (!query) return text;
    const parts = text.split(new RegExp(`(${query})`, "gi"));
    return parts.map((part, index) => (
      <span
        key={index}
        style={{
          backgroundColor: part.toLowerCase() === query.toLowerCase() ? "yellow" : "transparent",
          fontWeight: part.toLowerCase() === query.toLowerCase() ? "bold" : "normal",
        }}
      >
        {part}
      </span>
    ));
  };

  const handleClick = (result) => {
    // Example navigation logic based on the result
    if (result.includes("Team")) {
      navigate("/team");
    } else if (result.includes("Sponsors")) {
      navigate("/sponsors");
    } else if (result.includes("Publications")) {
      navigate("/publications");
    } else if (result.includes("Contact")) {
      navigate("/contact");
    } else if (result.includes("History")) {
      navigate("/history");
    } else {
      alert(`No specific page found for: ${result}`);
    }
  };

  return (
    <Box
      sx={{
        position: "absolute", // Ensure it is positioned independently
        top: "64px", // Adjust based on NavBar height
        left: 0,
        width: "100%",
        zIndex: 10, // Ensure it appears above other content
        display: "flex",
        justifyContent: "center",
        pointerEvents: "auto", // Ensure it is interactive
      }}
    >
      <Card
        sx={{
          width: "90%",
          maxWidth: "800px",
          backgroundColor: "rgba(255, 255, 255, 0.9)",
          boxShadow: 3,
        }}
      >
        <CardContent>
          {results.map((result, index) => (
            <Typography
              key={index}
              variant="body1"
              onClick={() => handleClick(result)}
              sx={{
                mb: 1,
                backgroundColor: index % 2 === 0 ? "#f0f0f0" : "#ffffff",
                overflow: "hidden",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap",
                cursor: "pointer",
              }}
            >
              {highlightText(result, query)}
            </Typography>
          ))}
        </CardContent>
      </Card>
    </Box>
  );
};

export default SearchResults;
