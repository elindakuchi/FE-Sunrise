import React from 'react';
import { useNavigate } from 'react-router';

const User = () => {
    const navigate = useNavigate()
    return (
        <div>
            <button onClick={() => navigate('/')}>Back</button>
            user
        </div>
    );
}

export default User;