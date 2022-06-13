import React, { Children, createContext, useState } from "react";
import { data } from "./data";
export const CardContext = createContext();

export const Context = ({ Children }) => {
  const [dates, setdata] = useState(data);
  return <CardContext.Provider value={dates}>{Children}</CardContext.Provider>;
};

export default Context;
