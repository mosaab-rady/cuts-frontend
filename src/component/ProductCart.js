import React from 'react';
import { Link } from 'react-router-dom';
import '../css/productCart.css';

export default function ProductCart({ product }) {
  const host = 'http://localhost:5000';
  return (
    <div className='product'>
      <section className='product__img'>
        <Link
          to={{
            pathname: `/shirts/${product.name}`,
            search: `color=${product.color}`,
            state: {
              id: product.id,
            },
          }}
        >
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
        </Link>
        <h4 className='product__img__status'>{product.status}</h4>
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
        <Link
          className='link'
          to={{
            pathname: `/shirts/${product.name}`,
            search: `color=${product.color}`,
            state: {
              id: product.id,
            },
          }}
        >
          <h5 className='product__footer__name'>{product.name}</h5>
        </Link>
        <h6 className='product__footer__price'>
          <span>$</span>
          {product.price}
        </h6>
      </section>
    </div>
  );
}
