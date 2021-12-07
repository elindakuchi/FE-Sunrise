import React, {useContext} from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../UserProvider';

const Users = () => {
  const [users] = useContext(UserContext);

  return (
    <div>
      {users.length ? (
        <div>
          {users.map((user) => (
            <Link to={`/user/${user.id}`} data-testid="userCard" key={user.id}>
              {user.name}
            </Link>
          ))}
        </div>
      ) : (
        <div>No users to display</div>
      )}
    </div>
  );
};

export default Users;