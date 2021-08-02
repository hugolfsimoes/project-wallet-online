import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom';
import MyContext from '../providers/MyContext';

export default function Profile() {
  const {user, setUser} = React.useContext(MyContext);
  const history = useHistory();

useEffect(() => {
  const userStorage = localStorage.getItem('user');
  if(userStorage) {
    setUser(JSON.parse(userStorage))
  }else {
    setUser('');
  }
}, [])

  function handleClickLogOut() {
    localStorage.removeItem('user');
    setUser('');
    history.push('/');
  }

  return (
    <div>
      <p>{user}</p>
      <button type="button">Change Password</button>
      <button type="button" onClick={ handleClickLogOut }>Log out</button>
    </div>
  )
}
