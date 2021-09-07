import React from 'react';
import '../css/productDetail.css';
import StarRatings from 'react-star-ratings';
import { request } from '../js/axios';

export default function ProductDetails({ product, colors, setProduct }) {
  const changeProduct = async (id) => {
    if (id === product.id) return;
    let response = await request('GET', `api/v1/products/${id}`);
    if (response) {
      console.log(response);
      if (response.data.status === 'success') {
        setProduct(response.data.data.product);
      }
    }
  };

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
      <div className='product__detail__reviews'>
        <div className='product__detail__reviews__stars'>
          <StarRatings
            rating={product.ratingsAverage}
            starDimension='20px'
            starRatedColor='black'
            starEmptyColor='#dadada'
            starSpacing='1px'
          />
        </div>
        <h4 className='product__detail__reviews__ratings'>
          {product.ratingsQuantity} reviews
        </h4>
      </div>
      <div className='product__detail__summary'>
        <h4 className='product__detail__summary__h4'>{product.summary}</h4>
      </div>
      <div className='product__detail__colors__container'>
        <div className='product__detail__colors__name'>
          <h4 className='product__detail__colors__name__h4'>
            colors :<span>{product.color}</span>
          </h4>
        </div>
        <div className='product__detail__colors'>
          {colors.map((color, i) => {
            return (
              <div
                onClick={() => changeProduct(color.id)}
                key={i}
                className={
                  product.color === color.color
                    ? 'product__detail__colors__color--one'
                    : 'product__detail__colors__color'
                }
                style={{
                  backgroundColor: color.colorHex,
                  '--border': color.colorHex,
                }}
              ></div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
