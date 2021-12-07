import React from "react";
import { Link } from "react-router-dom";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";

const UserCard = ({ user }) => {
    return (
        <Link
            to={`/user/${user.id}`}
            data-testid="userCard"
            style={{ textDecoration: "none" }}
        >
            <Card
                sx={{
                    display: "flex",
                    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                    height: "169px",
                }}
            >
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
                        <Avatar
                            style={{
                                width: "96px",
                                height: "102px",
                                boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                                borderRadius: "500px",
                                marginRight: "20px",
                                marginLeft: "10px",
                            }}
                            alt="Username"
                        ></Avatar>
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
                        <p
                            data-testid="user-name"
                            style={{
                                color: "#AD0F5B",
                                fontFamily: "Open Sans",
                                fontStyle: "normal",
                                fontWeight: 600,
                                fontSize: "24px",
                                lineHeight: "6px",
                                //line height on design template at 32px. This creates too much of a gap on app |.| <p>
                            }}
                        >
                            {user.name}
                        </p>
                        <p
                            data-testid="user-role"
                            style={{
                                color: "#848484",
                                fontFamily: "Open Sans",
                                fontStyle: "normal",
                                fontWeight: 600,
                                fontSize: "18px",
                                lineHeight: "28px",
                            }}
                        >
                            {user.role}
                        </p>

                        <p
                            data-testid="user-team"
                            style={{
                                color: "#050505",
                                fontFamily: "Open Sans",
                                fontStyle: "normal",
                                fontWeight: 600,
                                fontSize: "18px",
                                lineHeight: "20px",
                            }}
                        >
                            @{user.team}
                        </p>
                    </CardContent>
                </Box>
            </Card>
        </Link>
    );
};

export default UserCard;
