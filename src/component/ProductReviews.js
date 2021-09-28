import React, { useEffect, useState } from 'react';
import StarRatings from 'react-star-ratings';
import { request } from '../js/axios';

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

  console.log(reviews);

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
          write a review
        </h3>
      </div>
    </div>
  );
}
