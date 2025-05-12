import React from "react";
import { Box, Card, CardContent, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const SearchResults = ({ results }) => {
  const navigate = useNavigate();

  if (!results || results.length === 0) return null;

  const handleClick = (result) => {
    if (result.value) {
      navigate(result.value);
    } else {
      alert(`No results found for: ${result.key}`);
    }
  };

  return (
    <Box
      sx={{
        position: "absolute",
        top: "64px",
        left: 0,
        width: "100%",
        zIndex: 10,
        display: "flex",
        justifyContent: "center",
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
        <CardContent
          sx={{
            maxHeight: "300px", // Set the maximum height
            overflowY: "auto", // Enable vertical scrolling if content exceeds max height
          }}
        >
          {results.map((result, index) => (
            <Typography
              key={index}
              variant="body1"
              onClick={() => handleClick(result)}
              sx={{
                mb: 1,
                backgroundColor: index % 2 === 0 ? "#f0f0f0" : "#ffffff",
                cursor: "pointer"
              }}

            >
              {result.key}
            </Typography>
          ))}
        </CardContent>
      </Card>
    </Box>
  );
};

export default SearchResults;
