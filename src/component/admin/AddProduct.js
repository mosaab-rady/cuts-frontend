import React, { useState } from 'react';

export default function AddProduct() {
  const [type, setType] = useState('');

  const showTypes = () => {
    const types = document.getElementById(
      'account--body__product__form__types'
    );

    if (types.style.display === 'block') {
      types.style.display = 'none';
    } else {
      types.style.display = 'block';
    }
  };

  return (
    <div className='account--body'>
      <form className='account--body__product__form'>
        <div className='account--body__product__form__group'>
          <label htmlFor='name'>name</label>
          <input type='text' required placeholder='name' minLength='10' />
        </div>
        <div className='account--body__product__form__group'>
          <label htmlFor='type'>type</label>
          <input
            type='text'
            required
            placeholder='type'
            defaultValue={type}
            className='account--body__product__form__group__type__inp'
          />
          <div className='account--body__product__form__types--container'>
            <label
              className='account--body__product__form__group__types__label'
              onClick={showTypes}
            >
              {type}
              <svg
                width='10'
                height='10'
                viewBox='0 0 5 4'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path d='M2.5 4L0.334936 0.25H4.66506L2.5 4Z' fill='#b3b0b0' />
              </svg>
            </label>
            <div
              className='account--body__product__form__types'
              id='account--body__product__form__types'
            >
              <h4
                className='account--body__product__form__types__type'
                onClick={() => {
                  setType('t-shirt');
                }}
              >
                t-shirt
              </h4>
              <h4
                className='account--body__product__form__types__type'
                onClick={() => {
                  setType('polo');
                }}
              >
                polo
              </h4>
              <h4
                className='account--body__product__form__types__type'
                onClick={() => {
                  setType('long-sleeve');
                }}
              >
                long-sleeve
              </h4>
              <h4
                className='account--body__product__form__types__type'
                onClick={() => {
                  setType('sweat-shirt');
                }}
              >
                sweat-shirt
              </h4>
              <h4
                className='account--body__product__form__types__type'
                onClick={() => {
                  setType('hooded-shirt');
                }}
              >
                hooded-shirt
              </h4>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
