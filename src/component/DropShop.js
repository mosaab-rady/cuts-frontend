import React from 'react';
import { Link } from 'react-router-dom';
import '../css/dropshop.css';
import Cut from '../component/Cut';

export default function DropShop() {
  return (
    <section className='drop--shop'>
      <div className='drop--shop__sidebar'>
        <div className='drop--shop__sidebar__group'>
          <Link
            className='link'
            to={{
              pathname: '/collections/all-products',
            }}
          >
            <h3 className='drop--shop__sidebar__group__h3'>shop shirts</h3>
          </Link>
          <Link
            className='link'
            to={{
              pathname: '/collections/t-shirt',
            }}
          >
            <h4 className='drop--shop__sidebar__group__h4'>t-shirts</h4>
          </Link>
          <Link
            className='link'
            to={{
              pathname: '/collections/polo',
            }}
          >
            <h4 className='drop--shop__sidebar__group__h4'>polos</h4>
          </Link>
          <Link
            className='link'
            to={{
              pathname: '/collections/long-sleeve',
            }}
          >
            <h4 className='drop--shop__sidebar__group__h4'>long sleeves</h4>
          </Link>
        </div>
        <div className='drop--shop__sidebar__group'>
          <Link
            className='link'
            to={{
              pathname: '/collections/sweat-shirt',
            }}
          >
            <h3 className='drop--shop__sidebar__group__h3'>shop layers</h3>
          </Link>
          <Link
            className='link'
            to={{
              pathname: '/collections/sweat-shirt',
            }}
          >
            <h4 className='drop--shop__sidebar__group__h4'>sweatshirts</h4>
          </Link>
          <Link
            className='link'
            to={{
              pathname: '/collections/hooded-shirt',
            }}
          >
            <h4 className='drop--shop__sidebar__group__h4'>hooded shirts</h4>
          </Link>
        </div>
      </div>
      <section className='drop--shop__overview'>
        <div className='drop--shop__shirts--imgs'>
          <Link
            className='link'
            to={{
              pathname: '/collections/crew-neck',
            }}
          >
            <Cut top={true} name='crew' img='crew.webp' />
          </Link>
          <Link
            className='link'
            to={{
              pathname: '/collections/v-neck',
            }}
          >
            <Cut top={true} name='v-neck' img='v-neck.webp' />
          </Link>
          <Link
            className='link'
            to={{
              pathname: '/collections/henley',
            }}
          >
            <Cut top={true} name='henley' img='hanly.webp' />
          </Link>
          <Link
            className='link'
            to={{
              pathname: '/collections/classic',
            }}
          >
            <Cut top={false} name='classic' img='classic.webp' />
          </Link>
          <Link
            className='link'
            to={{
              pathname: '/collections/split',
            }}
          >
            <Cut top={false} name='split' img='split.webp' />
          </Link>
          <Link
            className='link'
            to={{
              pathname: '/collections/elongated',
            }}
          >
            <Cut top={false} name='elongated' img='elongated.webp' />
          </Link>
        </div>
      </section>
    </section>
  );
}
