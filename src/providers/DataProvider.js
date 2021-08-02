import React, { useState } from 'react';

import MyContext from './MyContext';

export default function DataProvider({children}) {
  const [user, setUser] = useState('');
  
  return (
    <MyContext.Provider value={{user, setUser}} >
      {children}
    </MyContext.Provider>
  )
}