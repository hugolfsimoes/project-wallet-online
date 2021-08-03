import React, { useState } from 'react';

import MyContext from './MyContext';

export default function DataProvider({children}) {
  const [user, setUser] = useState(
    {
    email: '',
    password: ''
  });
  
  return (
    <MyContext.Provider value={{user, setUser}} >
      {children}
    </MyContext.Provider>
  )
}