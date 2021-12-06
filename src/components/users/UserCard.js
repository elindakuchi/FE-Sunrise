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
                    width: "433px",
                    height: "169px",
                }}
            >
                <Box
                    sx={{ display: "flex", flexDirection: "row" }}
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
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
                            style={{
                                color: "#AD0F5B",
                                fontFamily: "Open Sans",
                                fontStyle: "normal",
                                fontWeight: 600,
                                fontSize: "24px",
                                lineHeight: "32px",
                            }}
                        >
                            {user.name}
                        </p>
                        <p
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
                            style={{
                                color: "#050505",
                                fontFamily: "Open Sans",
                                fontStyle: "normal",
                                fontWeight: 600,
                                fontSize: "18px",
                                lineHeight: "20px",
                            }}
                        >
                            {user.location}
                        </p>
                    </CardContent>
                </Box>
            </Card>
        </Link>
    );
};

export default UserCard;
