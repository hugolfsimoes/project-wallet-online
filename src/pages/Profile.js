import React from 'react'
import { AuthContext } from '../providers/auth'

export default function Profile() {
  const {user: {email}} = React.useContext(AuthContext)
  console.log(email);
  return (
    <div>
      <p>{email}</p>
      <p>email@email.com</p>
      <button type="button">Change Password</button>
      <button type="button">Log out</button>
    </div>
  )
}
