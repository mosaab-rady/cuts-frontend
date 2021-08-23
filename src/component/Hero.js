import React from 'react';
import '../css/hero.css';

export default function Hero({ img, name, btn }) {
  const host = 'http://localhost:5000';

  return (
    <div className='hero'>
      <img
        className='hero__img'
        src={`${host}/api/v1/images/${img}`}
        alt='img__hero'
      />
      <div className='hero__box'>
        <h2>{name}</h2>
        {btn ? <button className='shop-now-btn'>shop now</button> : ''}
      </div>
    </div>
  );
}
