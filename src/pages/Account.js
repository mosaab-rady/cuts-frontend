import React from 'react';
import Auth from '../component/Auth';
import '../css/account.css';

export default function Account() {
  return (
    <section className='account'>
      <div className='account__header'>
        <h1 className='account__header__h1'>welcome to cuts</h1>
      </div>
      <div className='account__body'>
        <Auth />
      </div>
    </section>
  );
}
