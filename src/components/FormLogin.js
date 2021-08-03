import React, { useEffect, useState } from 'react'
import { Link, useHistory } from "react-router-dom";
import MyContext from '../providers/MyContext';

export default function FormLogin() {
  const history = useHistory();
  const {user, setUser} = React.useContext(MyContext)
  const [inputEmail, setInputEmail] = useState('');
  const [inputPassword, setInputPassword] = useState('');
  const [isDisable, setIsDisabled] = useState(true);

  const emailValidationRegex = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i;
  const minimalPasswordLength = 6;

  useEffect(() => {
    // Verificação de email adquirido através do site do Stackoverflow no link https://pt.stackoverflow.com/questions/1386/express%C3%A3o-regular-para-valida%C3%A7%C3%A3o-de-e-mail
    if (emailValidationRegex.test(inputEmail) && inputPassword.length >= minimalPasswordLength) {
      setIsDisabled(false)
    }else{
      setIsDisabled(true)
    }
  },[inputEmail, inputPassword])

  function handleClickUser() {
    setUser({
      email: inputEmail,
      password: inputPassword
    });
    localStorage.setItem('user', JSON.stringify(inputEmail));
    history.push('/profile')
  }
  
  
  return (
    <form>
      <label htmlFor="email-input">E-mail
        <input id="email-input" type="text" onChange={(e) => setInputEmail(e.target.value)}/>
      </label>

      <label htmlFor="password-input">Password
        <input id="password-input" type="text" onChange={(e) => setInputPassword( e.target.value)}/>
      </label>

      <button type="button" onClick={ handleClickUser } disabled={isDisable}>Login</button>
      <Link to='/aaa'>Or sign up</Link>
    </form>
  )
}
