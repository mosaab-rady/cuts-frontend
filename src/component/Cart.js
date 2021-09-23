import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { myContext } from '../Context';
import '../css/cart.css';

export default function Cart() {
  const { shoppings } = useContext(myContext);
  const host = 'http://localhost:5000';
  let quantity = 0;
  for (let i = 0; i < shoppings.length; i++) {
    quantity += shoppings[i].quantity;
  }

  console.log(shoppings);

  return (
    <div className='cart'>
      <div className='cart--container'>
        <div className='cart__header'>
          <h4 className='cart__header__h4'>
            <svg
              onClick={() =>
                (document.getElementById('cart').style.display = 'none')
              }
              viewBox='0 0 29 24'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M0.939338 10.9393C0.353551 11.5251 0.353551 12.4749 0.939338 13.0607L10.4853 22.6066C11.0711 23.1924 12.0208 23.1924 12.6066 22.6066C13.1924 22.0208 13.1924 21.0711 12.6066 20.4853L4.12132 12L12.6066 3.51472C13.1924 2.92893 13.1924 1.97918 12.6066 1.3934C12.0208 0.807612 11.0711 0.807612 10.4853 1.3934L0.939338 10.9393ZM29 10.5L2 10.5V13.5L29 13.5V10.5Z'
                fill='black'
              />
            </svg>
            your shopping cart ({quantity})
          </h4>
        </div>
        {shoppings.length === 0 ? (
          <div className='cart__body__empty'>
            <h4 className='cart__body__empty__h4'>
              your cart is currently empty.
            </h4>
            <Link
              className='link'
              to={{
                pathname: '/collections/all-products',
              }}
            >
              <h4
                onClick={() =>
                  (document.getElementById('cart').style.display = 'none')
                }
                className='cart__body__browse'
              >
                browse all
              </h4>
            </Link>
          </div>
        ) : (
          <div className='cart__body'>
            <div className='cart__body__orders'>
              {shoppings.map((item, i) => {
                return (
                  <div key={i} className='cart__body__order'>
                    <div className='cart__body__order__img--container'>
                      <img
                        src={`${host}/api/v1/images/${item.image}`}
                        className='cart__body__order__img'
                        alt=''
                      />
                    </div>
                    <div className='cart__body__order__detail'>
                      <h5>size / {item.size} </h5>
                      <h4>
                        {item.color} {item.name}
                      </h4>
                      <h4>{item.quantity}</h4>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
