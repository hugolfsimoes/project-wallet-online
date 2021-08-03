import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom';
import MyContext from '../providers/MyContext';

export default function Profile() {
  const {setUser} = React.useContext(MyContext);
  const history = useHistory();

  const [userStorage, setUserStorage] = useState(JSON.parse(localStorage.getItem('user')));

useEffect(() => {
  setUserStorage(JSON.parse(localStorage.getItem('user')))
  }
, [userStorage])

  function handleClickLogOut() {
    localStorage.removeItem('user');
    setUser({
      email:'',
      password:''}
      );
    history.push('/');
  }

  return (
    <div>
      <p>{userStorage}</p>
      <button type="button">Change Password</button>
      <button type="button" onClick={ handleClickLogOut }>Log out</button>
    </div>
  )
}
