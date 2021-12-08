import React, { createContext, useState, useEffect } from "react";
import { data } from "./data";
import { getUsers } from "./apiCall";

export const UserContext = createContext();

const UserProvider = (props) => {
    const [users, setUsers] = useState(data);
    useEffect(() => {
        async function callingApi() {
            const data = await getUsers();
            setUsers(data);
        }
        callingApi();
    }, []);
    const value = [users, setUsers];
    return <UserContext.Provider value={value} {...props} />;
};

export default UserProvider;
