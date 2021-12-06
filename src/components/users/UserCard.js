import React from "react";
import { Link } from "react-router-dom";

const UserCard = ({ user }) => {
    return (
        <Link
            to={`/user/${user.id}`}
            data-testid="userCard"
            style={{ textDecoration: "none" }}
        >
            <Card>{user.name}</Card>
        </Link>
    );
};

export default UserCard;
