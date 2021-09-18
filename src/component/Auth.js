import React from 'react';
import Login from './Login';
import Signup from './Signup';
import '../css/auth.css';

export default function Auth() {
  return (
    <div className='auth'>
      <Login />
      <div className='auth__border'></div>
      <Signup />
    </div>
  );
}
