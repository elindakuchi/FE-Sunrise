import React, { useContext } from "react";
import { UserContext } from "../../UserProvider";
import UserCard from "./UserCard";
import Grid from "@mui/material/Grid";
import { usersContainerStyles } from "./styles";

const Users = () => {
    const [users] = useContext(UserContext);
    const renderUsers = users.map((user) => (
        <Grid
            item
            xs={12}
            md={3}
            rowSpacing={8}
            columnSpacing={8}
            key={user.id}
        >
            <UserCard user={user} />
        </Grid>
    ));
    return (
        <div style={usersContainerStyles}>
            {users.length === 0 ? (
                "No users to display"
            ) : (
                <Grid
                    container
                    rowSpacing={2}
                    columnSpacing={2}
                    direction="row"
                >
                    {renderUsers}
                </Grid>
            )}
        </div>
    );
};

export default Users;
