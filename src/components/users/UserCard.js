import React from "react";
import { Link } from "react-router-dom";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import {
    userCardStyle,
    avatarStyle,
    userNameStyle,
    userRoleStyle,
    userTeamStyle,
} from "./styles";

const UserCard = ({ user }) => {
    return (
        <Link
            to={`/user/${user.id}`}
            data-testid="userCard"
            style={{ textDecoration: "none" }}
        >
            <Card sx={userCardStyle}>
                <Box
                    sx={{ display: "flex", flexDirection: "row" }}
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                    width="40%"
                >
                    <CardContent
                        sx={{ flex: "1 0 auto", justifyContent: "center" }}
                    >
                        <Avatar style={avatarStyle} alt="Username"></Avatar>
                    </CardContent>
                </Box>
                <Box
                    sx={{ display: "flex", flexDirection: "row" }}
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                >
                    <CardContent
                        sx={{ flex: "1 0 auto", justifyContent: "center" }}
                    >
                        <p data-testid="user-name" style={userNameStyle}>
                            {user.name}
                        </p>
                        <p data-testid="user-role" style={userRoleStyle}>
                            {user.role}
                        </p>

                        <p data-testid="user-team" style={userTeamStyle}>
                            @{user.team}
                        </p>
                    </CardContent>
                </Box>
            </Card>
        </Link>
    );
};

export default UserCard;
