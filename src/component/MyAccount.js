import React, { useContext } from 'react';
import { myContext } from '../Context';
import '../css/myaccount.css';

export default function MyAccount() {
  const { currentUser } = useContext(myContext);

  return (
    <div className='my--account'>
      <h1>hey {currentUser.name}</h1>
    </div>
  );
}
