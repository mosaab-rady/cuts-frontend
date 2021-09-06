import React from 'react';
import '../css/productDetail.css';

export default function ProductDetails({ product }) {
  return (
    <section className='product__detail'>
      <div className='product__detail__heading'>
        <h4 className='product__detail__heading__status'>{product.status}</h4>
        <h4 className='product__detail__heading__fabric'>{product.fabric}</h4>
      </div>
      <div className='product__detail__name--price'>
        <h3 className='product__detail__name'>{product.name}</h3>
        <h4 className='product__detail__price'>
          <span>$</span>
          {product.price}
        </h4>
      </div>
    </section>
  );
}
