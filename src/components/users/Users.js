import React, {useContext, useState} from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../UserProvider';

import data from './testData.json'



const Users = () =>{
    const [users] = useContext(UserContext)
    console.log(users)

    const [searchTerm,setSearchTerm] = useState('')

    return (
        <div>
            <Link to={`/user/${1}`}>
                Users
            </Link>
            <br></br>

            <input type="text" placeholder="seach..." onChange={e=>setSearchTerm(e.target.value)} />
                {data.filter((val)=>{
                    if(searchTerm == ""){
                    return val
                    }
                    else if(
                        (val.name.toLowerCase().includes(searchTerm.toLowerCase())) || 
                        (val.role.toLowerCase().includes(searchTerm.toLowerCase())) || 
                        (val.group.toLowerCase().includes(searchTerm.toLowerCase())) ||
                        (val.team.toLowerCase().includes(searchTerm.toLowerCase())) ||
                        (val.location.toLowerCase().includes(searchTerm.toLowerCase()))
                    ){
                    return val;
                    }
                }).map((val,key)=>{
                    return <div>
                            <h3>{val.name}</h3>
                            <p>{val.role}</p>
                            <p>{val.group}</p>
                            <p>{val.team}</p>
                            <p>{val.location}</p>
                         </div>
      })}
        </div>
    );
}


export default Users;