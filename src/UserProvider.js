import React, { createContext, useState } from "react";
import { data } from "./data";

export const UserContext = createContext();

const UserProvider = (props) => {
  const [users, setUsers] = useState(data);
  const value = [users, setUsers];

  return <UserContext.Provider value={value} {...props} />;
};

export default UserProvider;
