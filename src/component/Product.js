import React from 'react';
import '../css/product.css';

export default function Product({ product }) {
  const host = 'http://localhost:5000';

  return (
    <div className='product'>
      <div className='product__img'>
        <img
          className='product__imgCover'
          src={`${host}/api/v1/images/${product.imageCover}`}
          alt=''
        />
        <img
          className='product__imgDetail'
          src={`${host}/api/v1/images/${product.imageDetail}`}
          alt=''
        />
      </div>
      <div className='product__quick--add'></div>
    </div>
  );
}
