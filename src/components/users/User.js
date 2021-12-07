import React,{useContext} from 'react';
import { useNavigate } from 'react-router';
import { UserContext } from '../../UserProvider';


const User = () => {
    const [users] = useContext(UserContext)
    console.log(users)
    const navigate = useNavigate()
    return (
        <div>
            <button onClick={() => navigate('/')}>Back</button>
            user
        </div>
    );
}

export default User;