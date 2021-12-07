import React, { useContext } from "react";
import Paper from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import { useParams } from "react-router";
import { UserContext } from "../../UserProvider";
import { displayLayout, paperStyles, gridStyles } from "./styles";

const User = () => {
	const [users] = useContext(UserContext);
	let { id } = useParams();
	const USER = users.filter((user) => user.id === id)[0];
	return (
		<Paper style={paperStyles} elevation={3}>
			<Grid container spacing={3}>
				<Grid item md={2.5} xs={12}>
					<div style={displayLayout}>
						<Avatar
							alt={USER.name.charAt(0)}
							src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cHJvZmlsZXxlbnwwfHwwfHw%3D&w=1000&q=80"
							sx={{ width: 125, height: 125, marginBottom: 2 }}
						>
							<Typography variant="h4">
								{USER.name.charAt(0).toUpperCase()}
							</Typography>
						</Avatar>

						<Typography
							variant="h6"
							style={{ color: "#AD0F5B" }}
							data-testid="user-profile-name"
						>
							{USER.name}
						</Typography>

						<Typography variant="subtitle1" style={{ color: "#808080" }}>
							{USER.role}
						</Typography>
						<Typography variant="subtitle1">@{USER.team}</Typography>
					</div>
				</Grid>

				<Grid item md={0.5} xs={12} style={gridStyles}>
					<Divider orientation="vertical" />
				</Grid>
				<Grid item md={9} xs={12}>
					<Typography align="left" variant="h6">
						Bio
					</Typography>
					<Divider orientation="horizontal" />
					<Typography align="left" gutterBottom style={{ color: "#808080" }}>
						{USER.bio}
					</Typography>
					<Grid container spacing={2}>
						<Grid item md={4} xs={12}>
							<Typography align="left" variant="h6">
								ID
							</Typography>
							<Divider orientation="horizontal" />
							<Typography align="left" style={{ color: "#808080" }}>
								{USER.id}
							</Typography>
						</Grid>
						<Grid item md={4} xs={12}>
							<Typography align="left" variant="h6">
								Group
							</Typography>
							<Divider orientation="horizontal" />
							<Typography align="left" style={{ color: "#808080" }}>
								{USER.group}
							</Typography>
						</Grid>
						<Grid item md={4} xs={12}>
							<Typography align="left" variant="h6">
								Team
							</Typography>
							<Divider orientation="horizontal" />
							<Typography align="left" style={{ color: "#808080" }}>
								{USER.team}
							</Typography>
						</Grid>
					</Grid>
				</Grid>
			</Grid>
		</Paper>
	);
};

export default User;
