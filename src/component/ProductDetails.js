import React, { useState } from 'react';
import '../css/productDetail.css';
import StarRatings from 'react-star-ratings';
import { request } from '../js/axios';
import { useEffect } from 'react/cjs/react.development';
import { Link } from 'react-router-dom';

export default function ProductDetails({
  product,
  colors,
  setProduct,
  setColors,
  fabrics,
}) {
  const [size, setSize] = useState('small');
  const [available, setAvailable] = useState(true);

  useEffect(() => {
    if (product.size.small === 0) {
      setAvailable(false);
    }
  }, [product]);

  const changeProduct = async ({ id, fabric }) => {
    if (id) {
      if (id === product.id) return;
      let response = await request('GET', `api/v1/products/${id}`);
      if (response) {
        if (response.data.status === 'success') {
          setProduct(response.data.data.product);
        }
      }
    }
    // if (fabric) {
    //   if (fabric === product.fabric) return;
    //   let response = await request(
    //     'GET',
    //     `api/v1/products/product?fabric=${fabric}&model=${product.model}&cut=${product.cut}&collar=${product.collar}`
    //   );
    //   if (response) {
    //     if (response.data.status === 'success') {
    //       setProduct(response.data.data.product);
    //       setColors(response.data.data.availableColors);
    //     }
    //   }
    // }
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
                onClick={() => changeProduct({ id: color.id })}
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
        {product.fabric ? (
          <div className='product__detail__fabric--container'>
            <h4 className='product__detail__fabric--name'>
              fabric: <span>{product.fabric}</span>
            </h4>
            <div className='product__detail__fabric--box'>
              {fabrics.map((fabric, i) => {
                return (
                  <div key={i}>
                    {product.fabric === fabric._id ? (
                      <h4
                        key={i}
                        className={
                          product.fabric === fabric._id
                            ? 'product__detail__fabric--box__h4 selected'
                            : 'product__detail__fabric--box__h4'
                        }
                      >
                        {fabric._id}
                      </h4>
                    ) : (
                      <Link
                        className='link'
                        to={{
                          pathname: `/shirts/${product.name}`,
                          state: {
                            search: `?fabric=${fabric._id}&model=${product.model}&cut=${product.cut}&collar=${product.collar}`,
                          },
                        }}
                      >
                        <h4
                          key={i}
                          className={
                            product.fabric === fabric._id
                              ? 'product__detail__fabric--box__h4 selected'
                              : 'product__detail__fabric--box__h4'
                          }
                        >
                          {fabric._id}
                        </h4>
                      </Link>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        ) : (
          ''
        )}
      </div>
      <div className='product__detail__sizes--container'>
        <h4 className='product__detail__sizes__h4'>
          size: <span>{size}</span>
        </h4>
        <div className='product__detail__sizes'>
          <h4
            onClick={() => {
              setSize('small');
              product.size.small > 0 ? setAvailable(true) : setAvailable(false);
            }}
            className={
              product.size.small > 0
                ? size === 'small'
                  ? 'product__detail__sizes__size--h4 selected'
                  : 'product__detail__sizes__size--h4'
                : size === 'small'
                ? 'product__detail__sizes__size--h4--not selected'
                : 'product__detail__sizes__size--h4--not'
            }
          >
            s
          </h4>
          <h4
            onClick={() => {
              setSize('medium');
              product.size.medium > 0
                ? setAvailable(true)
                : setAvailable(false);
            }}
            className={
              product.size.medium > 0
                ? size === 'medium'
                  ? 'product__detail__sizes__size--h4 selected'
                  : 'product__detail__sizes__size--h4'
                : size === 'medium'
                ? 'product__detail__sizes__size--h4--not selected'
                : 'product__detail__sizes__size--h4--not'
            }
          >
            m
          </h4>
          <h4
            onClick={() => {
              setSize('large');
              product.size.large > 0 ? setAvailable(true) : setAvailable(false);
            }}
            className={
              product.size.large > 0
                ? size === 'large'
                  ? 'product__detail__sizes__size--h4 selected'
                  : 'product__detail__sizes__size--h4'
                : size === 'large'
                ? 'product__detail__sizes__size--h4--not selected'
                : 'product__detail__sizes__size--h4--not'
            }
          >
            l
          </h4>
          <h4
            onClick={() => {
              setSize('x-large');
              product.size.xLarge > 0
                ? setAvailable(true)
                : setAvailable(false);
            }}
            className={
              product.size.xLarge > 0
                ? size === 'x-large'
                  ? 'product__detail__sizes__size--h4 selected'
                  : 'product__detail__sizes__size--h4'
                : size === 'x-large'
                ? 'product__detail__sizes__size--h4--not selected'
                : 'product__detail__sizes__size--h4--not'
            }
          >
            xl
          </h4>
          <h4
            onClick={() => {
              setSize('XX-large');
              product.size.xxLarge > 0
                ? setAvailable(true)
                : setAvailable(false);
            }}
            className={
              product.size.xxLarge > 0
                ? size === 'XX-large'
                  ? 'product__detail__sizes__size--h4 selected'
                  : 'product__detail__sizes__size--h4'
                : size === 'XX-large'
                ? 'product__detail__sizes__size--h4--not selected'
                : 'product__detail__sizes__size--h4--not'
            }
          >
            xxl
          </h4>
        </div>
      </div>
      <div className='product__detail__btn--container'>
        {available ? (
          <button className='product__detail__btn__addToCart'>
            add to cart
          </button>
        ) : (
          <button className='product__detail__btn__notify'>
            notify me when available
          </button>
        )}
      </div>
    </section>
  );
}
