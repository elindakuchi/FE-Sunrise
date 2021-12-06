import React from "react";
import { Link } from "react-router-dom";

const UserCard = ({ user }) => {
    return (
        <Link to={`/user/${user.id}`} data-testid="userCard">
            {user.name}
        </Link>
    );
};

export default UserCard;
