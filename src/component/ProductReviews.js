import React, { useEffect, useState } from 'react';
import StarRatings from 'react-star-ratings';
import { request } from '../js/axios';
import Review from './Review';

export default function ProductReviews({ id, ratingAvg, ratingQnt }) {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const res = await request('GET', `/api/v1/products/${id}/reviews`);
      if (res) {
        if (res.data.status === 'success') {
          setReviews(res.data.data.reviews);
        }
      }
    };
    getData();
  }, [id]);

  return (
    <div className='product__reviews'>
      <div className='product__reviews__header'>
        <h2 className='product__reviews__header__h2'>reviews</h2>
        <div className='product__reviews__header__stars'>
          <h3 className='product__reviews__header__stars__avg'>{ratingAvg}</h3>
          <StarRatings
            rating={ratingAvg}
            starDimension='17px'
            starRatedColor='black'
            starEmptyColor='#dadada'
            starSpacing='1px'
          />
          <h3 className='product__reviews__header__stars__qnt'>
            {ratingQnt} reviews
          </h3>
        </div>
      </div>
      <div className='product__reviews__body__header'>
        <h3 className='product__reviews__body__header__h3'>
          {ratingQnt} reviews
        </h3>
        <h3 className='product__reviews__body__header__addreview'>
          <svg viewBox='0 0 9 9' fill='none' xmlns='http://www.w3.org/2000/svg'>
            <path
              d='M1 8H2L6 4L5.5 3.5M1 8V7L5 3L5.5 3.5M1 8L5.5 3.5'
              stroke='black'
            />
            <rect
              x='6.57582'
              y='0.858204'
              width='2.29474'
              height='1.325'
              transform='rotate(44.2886 6.57582 0.858204)'
              fill='black'
            />
          </svg>
          write a review
        </h3>
      </div>
      <div className='product__reviews__body'>
        {reviews.map((item, i) => {
          return <Review key={i} review={item} />;
        })}
      </div>
    </div>
  );
}
