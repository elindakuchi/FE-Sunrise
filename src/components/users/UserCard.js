import React from "react";
import { Link } from "react-router-dom";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import {
    userCardStyle,
    avatarStyle,
    userNameStyle,
    userRoleStyle,
    userTeamStyle,
} from "./styles";

const UserCard = ({ user }) => {
    const renderAvatar = (
        <Box
            sx={{ display: "flex", flexDirection: "row" }}
            direction="row"
            justifyContent="center"
            alignItems="center"
            width="35%"
        >
            <CardContent sx={{ flex: "1 0 auto", justifyContent: "center" }}>
                <Avatar style={avatarStyle} alt="Username"></Avatar>
            </CardContent>
        </Box>
    );

    const renderUserData = (
        <Box
            sx={{ display: "flex", flexDirection: "row" }}
            direction="row"
            justifyContent="center"
            alignItems="center"
        >
            <CardContent sx={{ flex: "1 0 auto", justifyContent: "center" }}>
                <Typography
                    variant="h6"
                    data-testid="user-name"
                    style={userNameStyle}
                >
                    {user.name}
                </Typography>

                <Typography data-testid="user-role" style={userRoleStyle}>
                    {user.role}
                </Typography>

                <Typography data-testid="user-team" style={userTeamStyle}>
                    @{user.team}
                </Typography>
            </CardContent>
        </Box>
    );
    return (
        <Link
            to={`/user/${user.id}`}
            data-testid="userCard"
            style={{ textDecoration: "none" }}
        >
            <Card sx={userCardStyle}>
                {renderAvatar}
                {renderUserData}
            </Card>
        </Link>
    );
};

export default UserCard;
