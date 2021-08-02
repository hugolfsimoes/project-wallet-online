import React, { useEffect, useState } from 'react'
import { Link, useHistory } from "react-router-dom";
import MyContext from '../providers/MyContext';

export default function FormLogin() {
  const history = useHistory();
  const {user, setUser} = React.useContext(MyContext)
  const [inputUser, setInputUser] = useState();

  function handleClickUser() {
    setUser(inputUser);
    localStorage.setItem('user', JSON.stringify(inputUser));
    console.log(user);
    history.push('/profile')
  }
  
  
  return (
    <form>
      <label htmlFor="email-input">E-mail
        <input id="email-input" type="text" onChange={(e) => setInputUser(e.target.value)}/>
      </label>

      <label htmlFor="password-input">Password
        <input id="password-input" type="text"/>
      </label>

      <button type="button" onClick={ handleClickUser }>Login</button>
      <Link to='/aaa'>Or sign up</Link>
    </form>
  )
}
