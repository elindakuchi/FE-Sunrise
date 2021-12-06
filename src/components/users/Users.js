import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../UserProvider";

const Users = () => {
    const [users] = useContext(UserContext);
    console.log(users);
    return (
        <div>
            <Link to={`/user/${1}`}>Users</Link>
            {users.length === 0 ? (
                "No users to display"
            ) : (
                <ul>
                    {users.map((user, index) => (
                        <div data-testid="userCard" key={index}>
                            {user.name}
                        </div>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Users;
