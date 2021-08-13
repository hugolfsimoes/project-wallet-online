import React, { useState } from "react";

import MyContext from "./MyContext";

export default function DataProvider({ children }) {
  const [user, setUser] = useState({
    email: "",
  });
  const [deposit, setDeposit] = useState(0);
  const [spending, setSpending] = useState(0);

  return (
    <MyContext.Provider
      value={{ user, setUser, deposit, setDeposit, spending, setSpending }}
    >
      {children}
    </MyContext.Provider>
  );
}
