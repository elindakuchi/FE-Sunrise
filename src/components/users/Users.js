import React, {useContext} from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../UserProvider';

const Users = () =>{
    const [users] = useContext(UserContext)
    console.log(users)
    return (
        <Link to={`/user/${1}`}>
            Users
        </Link>
    );
}

export default Users;