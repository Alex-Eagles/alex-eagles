import { Card, CardContent, Typography, CardMedia } from "@mui/material";
import useAnimate from "../../hooks/use-animate";

const SponsorCard = (props) => {
    const { name, image } = props;
    const elementRef = useAnimate("animate", false);

    return (
        <Card
            ref={elementRef}
            sx={{
                width: 250,
                mx: window.innerWidth > 600 ? 4 : 0,
                my: 4,
                boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)", // Subtle shadow
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                opacity: 0,
                transform: "scale(0.85)",
                transition: "all 1s ease",
                backgroundColor: "#FFFFFF", // White background
                borderRadius: "16px", // Rounded corners
                padding: 2, // Add padding inside the card
            }}>
            <CardMedia
                component="img"
                alt={name}
                src={image}
                sx={{
                    width: "80%", // Adjust image size
                    height: "auto",
                    objectFit: "contain",
                    borderRadius: "8px", // Optional: round the image corners slightly
                }}
            />
            <CardContent
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                }}>
            </CardContent>
        </Card>
    );
};

export default SponsorCard;
