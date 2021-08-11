import React, { useState } from 'react';

import MyContext from './MyContext';

export default function DataProvider({children}) {
  const [user, setUser] = useState({
    email:""
  });
  
  return (
    <MyContext.Provider value={{user, setUser}} >
      {children}
    </MyContext.Provider>
  )
}