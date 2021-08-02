import React from 'react'
import MyContext from '../providers/MyContext';

export default function Profile() {
  const {user: {email}} = React.useContext(MyContext)
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
