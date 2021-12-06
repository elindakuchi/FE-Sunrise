import React from 'react';
import { Link } from 'react-router-dom';

const Users = () =>{
    return (
        <Link to={`/user/${1}`}>
            Users
        </Link>
    );
}

export default Users;