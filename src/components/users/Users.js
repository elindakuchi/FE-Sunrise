import React, { useContext } from "react";
import { UserContext } from "../../UserProvider";
import UserCard from "./UserCard";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

const Users = () => {
    const [users] = useContext(UserContext);
    console.log(users);
    return (
        <div style={containerStyle}>
            {users.length === 0 ? (
                "No users to display"
            ) : (
                <Grid container xs={3} rowSpacing={10} columnSpacing={10}>
                    {users.map((user) => (
                        <Grid item key={user.id}>
                            <UserCard user={user} />
                        </Grid>
                    ))}
                </Grid>
            )}
        </div>
    );
};

export default Users;

const containerStyle = {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    height: "100%",
    justifyContent: "top",
    alignItems: "center",
};
