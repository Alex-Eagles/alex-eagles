import React from "react";
import { Box, Card, CardContent, Typography, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useNavigate } from "react-router-dom";

const SearchResults = ({ results, onClose }) => {
  const navigate = useNavigate();

  if (!results || results.length === 0) return null;

  const handleClick = (result) => {
    console.log("Navigating to:", result.value || "No valid path"); // Debug log
    if (result.value) {
      navigate(result.value);
    } else {
      alert(`No valid path for: ${result.key}`);
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
          <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
            <IconButton
              onClick={() => {
                console.log("Closing entire search results card");
                onClose();
              }}
              sx={{
                width: "10px", // Set width to 10px
                height: "10px", // Set height to 10px
                borderRadius: 0, // Make the button squared
                backgroundColor: "rgba(0, 0, 0, 0.1)",
                '&:hover': {
                  backgroundColor: "rgba(0, 0, 0, 0.2)",
                },
              }}
            >
              <CloseIcon sx={{ fontSize: "10px" }} />
            </IconButton>
          </Box>
          {results.map((result, index) => (
            <Box key={index} sx={{ mb: 2, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              <Box>
                <Typography
                  variant="body1"
                  onClick={() => handleClick(result)}
                  sx={{
                    cursor: "pointer",
                    fontWeight: "bold",
                  }}
                >
                  {result.key}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: "gray",
                    opacity: 0.7,
                  }}
                >
                  {result.value}
                </Typography>
              </Box>
              <IconButton
                onClick={() => {
                  console.log("Closing individual result:", result);
                  onClose(result);
                }}
                sx={{
                  width: "10px", // Set width to 10px
                  height: "10px", // Set height to 10px
                  borderRadius: 0, // Make the button squared
                  backgroundColor: "rgba(0, 0, 0, 0.1)",
                  '&:hover': {
                    backgroundColor: "rgba(0, 0, 0, 0.2)",
                  },
                  marginLeft: "10px", // Add spacing from the text
                }}
              >
                <CloseIcon sx={{ fontSize: "10px" }} />
              </IconButton>
            </Box>
          ))}
        </CardContent>
      </Card>
    </Box>
  );
};

export default SearchResults;
