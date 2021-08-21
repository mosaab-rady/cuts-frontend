import React from 'react';
import '../css/section.css';

export default function Section({ image, name }) {
  const host = 'http://localhost:5000';

  return (
    <div className='section'>
      <img
        className='section__img'
        src={`${host}/api/v1/images/${image}`}
        alt=''
      />
      <div className='section__box'>
        <h3 className='section__box__h3'>{name}</h3>
        <button className='shop-now-btn'>shop now</button>
      </div>
    </div>
  );
}
