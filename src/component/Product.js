import React from 'react';
import '../css/product.css';

export default function Product({ product }) {
  const host = 'http://localhost:5000';
  return (
    <div className='product'>
      <section className='product__img'>
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
      </section>
      <section className='product__btn'>
        <div className='product__btn__quickadd'>
          <h4>+ quick add</h4>
        </div>
        <div className='product__btn__sizes'>
          <div className='product__btn__sizes__size'>
            <h4>s</h4>
          </div>
          <div className='product__btn__sizes__size'>
            <h4>m</h4>
          </div>
          <div className='product__btn__sizes__size'>
            <h4>l</h4>
          </div>
          <div className='product__btn__sizes__size'>
            <h4>xl</h4>
          </div>
          <div className='product__btn__sizes__size'>
            <h4>xxl</h4>
          </div>
        </div>
      </section>
      <section className='product__footer'>
        <h6 className='product__footer__color'>{product.color}</h6>
        <h5 className='product__footer__name'>{product.name}</h5>
        <h6 className='product__footer__price'>
          <span>$</span>
          {product.price}
        </h6>
      </section>
    </div>
  );
}
