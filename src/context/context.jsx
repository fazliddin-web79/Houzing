import React, { createContext, useState } from "react";
import { usersData } from "../mock/usersData";

export const UserContext = createContext();

export const Context = ({ children }) => {
  const [users, setUsers] = useState(usersData);
  return (
    <UserContext.Provider value={[users, setUsers]}>
      {children}
    </UserContext.Provider>
  );
};

export default Context;
