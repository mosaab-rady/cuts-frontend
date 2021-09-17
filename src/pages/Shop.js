import React from 'react';
import ShopHeader from '../component/ShopHeader';
import ShopSection from '../component/ShopSection';
import '../css/shop.css';

export default function Shop() {
  return (
    <div className='shop'>
      <ShopHeader />
      <ShopSection type='t-shirt' />
      <ShopSection type='sweat-shirt' />
      <ShopSection type='long-sleeve' />
      <ShopSection type='polo' />
    </div>
  );
}
