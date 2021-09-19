import React, { useContext } from 'react';
import Auth from '../component/Auth';
import MyAccount from '../component/MyAccount';
import { myContext } from '../Context';
import '../css/account.css';

export default function Account() {
  const { currentUser } = useContext(myContext);

  return (
    <section className='account'>
      <div className='account__header'>
        <h1 className='account__header__h1'>
          {currentUser ? 'my account' : 'welcome to cuts'}
        </h1>
      </div>
      <div className='account__body'>
        {currentUser ? <MyAccount /> : <Auth />}
      </div>
    </section>
  );
}
