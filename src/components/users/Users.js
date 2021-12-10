import React, { useContext } from "react";
import { UserContext } from "../../UserProvider";
import { Link } from "react-router-dom";
import Grid from "@mui/material/Grid";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import { paperStyles, usersContainerStyles } from "./styles";
import { Card } from "@mui/material";
import { useLocation } from "react-router-dom";

const Users = () => {
	const [users] = useContext(UserContext);
	let searchTerm = useLocation().search.slice(12);

	const getName = (term) => {
		return term.name.toLowerCase().includes(searchTerm.toLowerCase());
	};
	const getRole = (term) => {
		return term.role.toLowerCase().includes(searchTerm.toLowerCase());
	};
	const getTeam = (term) => {
		return term.team.toLowerCase().includes(searchTerm.toLowerCase());
	};

	const renderCard = (user) => (
		<Card style={{ marginBottom: 20 }}>
			<CardContent>
				<div style={{ display: "flex", alignItems: "center" }}>
					<Avatar
						alt={user.name.charAt(0)}
						src={user.image}
						sx={{ width: 100, height: 100 }}
					>
						<Typography variant="h5">
							{user.name.charAt(0).toUpperCase()}
						</Typography>
					</Avatar>
					<div style={{ flexDirection: "column", marginLeft: 35 }}>
						<Typography
							data-testid="user-name"
							align="left"
							variant="h6"
							style={{ color: "#AD0F5B" }}
						>
							{user.name}
						</Typography>
						<Typography
							data-testid="user-role"
							align="left"
							variant="subtitle1"
							style={{ color: "#808080" }}
						>
							{user.role}
						</Typography>
						<Typography data-testid="user-team" align="left" ariant="subtitle1">
							@{user.team}
						</Typography>
					</div>
				</div>
			</CardContent>
		</Card>
	);
	return (
		<div style={usersContainerStyles}>
			{users?.length ? (
				<Grid container spacing={3} style={{ marginTop: 25 }}>
					{users
						.filter((val) => {
							if (searchTerm === "") {
								return val;
							} else if (getName(val) || getRole(val) || getTeam(val)) {
								return val;
							} else return null;
						})
						.map((user) => (
							<Grid
								item
								key={user.id}
								xs={12}
								md={6}
								lg={4}
								data-testid="user-card"
							>
								<Link
									to={`/user/${user.id}`}
									style={{ textDecoration: "none" }}
								>
									{renderCard(user)}
								</Link>
							</Grid>
						))}
				</Grid>
			) : (
				<Typography data-testid="no-data" variant="h6" style={paperStyles}>
					No users to display
				</Typography>
			)}
		</div>
	);
};

export default Users;
