import React from 'react'

export default function ChangePassword() {
  return (
    <div>
      <label htmlFor="current-password">Current Password
        <input type="text" id="current-password" />
      </label>

      <label htmlFor="new-password">New Password
        <input type="text" id="new-password" />
      </label>

      <label htmlFor="confim-new-password">Confirm New Password
        <input type="text" id="confim-new-password" />
      </label>

      <button type="button">Confirm</button>
    </div>
  )
}
