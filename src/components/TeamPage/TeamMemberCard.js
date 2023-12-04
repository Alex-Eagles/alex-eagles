import { Card, CardContent, Typography, Avatar, Stack } from "@mui/material";
import { LinkedIn, GitHub, EmailOutlined } from "@mui/icons-material";

const TeamMemberCard = (props) => {
	const { name, role, image, email, linkedInLink, gitHubLink } = props;

	return (
		<Card
			sx={{
				maxWidth: 150,
				mx: window.innerWidth > 600 ? 4 : 0,
				my: 4,
				boxShadow: "none",
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				justifyContent: "center",
			}}>
			<Avatar
				alt={name}
				src={image}
				sx={{ width: 150, height: 150, mx: "auto" }}
			/>
			<CardContent
				sx={{
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
					justifyContent: "center",
					textAlign: "center",
				}}>
				<Typography gutterBottom variant="h5" component="div">
					{name}
				</Typography>
				<Typography variant="body2" color="text.secondary">
					{role}
				</Typography>
				<Stack
					direction="row"
					spacing={1}
					sx={{
						mt: 2,
						display: "flex",
						flexDirection: "row",
						alignItems: "center",
						justifyContent: "center",
					}}>
					<a
						href={email}
						target="_blank"
						rel="noopener noreferrer"
						style={{
							textDecoration: "none",
							color: "inherit",
						}}>
						<EmailOutlined
							sx={{
								transform: "scale(1.15)",
								transition: "all 0.5s ease",
								"&:hover": {
									transform: "translateY(-10%) scale(1.15)",
									color: "#305fb0",
								},
							}}
						/>
					</a>
					<a
						href={gitHubLink}
						target="_blank"
						rel="noopener noreferrer"
						style={{
							textDecoration: "none",
							color: "inherit",
						}}>
						<GitHub
							sx={{
								transform: "scale(0.95)",
								transition: "all 0.5s ease",
								"&:hover": {
									transform: "translateY(-10%) scale(0.95)",
									color: "#305fb0",
								},
							}}
						/>
					</a>
					<a
						href={linkedInLink}
						target="_blank"
						rel="noopener noreferrer"
						style={{
							textDecoration: "none",
							color: "inherit",
						}}>
						<LinkedIn
							sx={{
								transform: "scale(1.1)",
								transition: "all 0.5s ease",
								"&:hover": {
									transform: "translateY(-10%) scale(1.1)",
									color: "#305fb0",
								},
							}}
						/>
					</a>
				</Stack>
			</CardContent>
		</Card>
	);
};

export default TeamMemberCard;
