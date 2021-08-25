import React from 'react';
import { Link } from 'react-router-dom';
import '../css/hero.css';

export default function Hero({ img, name, btn, id }) {
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
        {btn ? (
          <Link
            to={{
              pathname: `/collections/${name}`,
              state: { id },
            }}
          >
            <button className='shop-now-btn'>shop now</button>
          </Link>
        ) : (
          ''
        )}
      </div>
    </div>
  );
}
