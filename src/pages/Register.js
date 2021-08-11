import React from 'react'

export default function Register() {
  return (
    <div>
      <label htmlFor="user-name">Name
        <input type="text" id="user-name" />
      </label>

      <label htmlFor="user-email">E-mail
        <input type="text" id="user-email" />
      </label>

      <label htmlFor="user-password">New Password
        <input type="text" id="user-password" />
      </label>

      <label htmlFor="user-confirm-password">Confirm Password
        <input type="text" id="user-confirm-password" />
      </label>

      <button type="button">Confirm</button>
    </div>
  )
}
