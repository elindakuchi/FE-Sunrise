import React, { useContext } from "react";
import { UserContext } from "../../UserProvider";
import UserCard from "./UserCard";
import Grid from "@mui/material/Grid";
import { usersContainerStyles } from "./styles";

const Users = () => {
    const [users] = useContext(UserContext);
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
                    {users.map((user) => (
                        <Grid
                            item
                            xs={12}
                            md={4}
                            rowSpacing={2}
                            columnSpacing={2}
                            key={user.id}
                        >
                            <UserCard user={user} />
                        </Grid>
                    ))}
                </Grid>
            )}
        </div>
    );
};

export default Users;
