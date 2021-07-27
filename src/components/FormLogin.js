import React from 'react'
import { Link } from "react-router-dom";

export default function FormLogin() {
  return (
    <form>
      <label htmlFor="email-input">E-mail
        <input id="email-input" type="text"/>
      </label>

      <label htmlFor="password-input">Password
        <input id="password-input" type="text"/>
      </label>

      <button type="button">Login</button>
      <Link to='/aaa'>Or sign up</Link>
    </form>
  )
}
