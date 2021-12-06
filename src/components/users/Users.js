import React, { useContext } from "react";
import { UserContext } from "../../UserProvider";
import UserCard from "./UserCard";
import Grid from "@mui/material/Grid";

const Users = () => {
    const [users] = useContext(UserContext);
    console.log(users);
    return (
        <div
            style={{
                boxSizing: "border-box",
                paddingRight: "50px",
                paddingLeft: "50px",
                display: "flex",
                flexDirection: "column",
                width: "100%",
                height: "100%",
            }}
        >
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

// const containerStyle = {
//     display: "flex",
//     flexDirection: "column",
//     width: "100%",
//     height: "100%",
// };
