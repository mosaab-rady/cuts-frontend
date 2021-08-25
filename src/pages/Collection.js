import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { request } from '../js/axios';
import Product from '../component/Product';
import Hero from '../component/Hero';
import '../css/collection.css';

export default function Collection() {
  const { state } = useLocation();
  const [products, setProducts] = useState('');
  const [name, setName] = useState('');
  const [imgCover, setImgCover] = useState('');

  useEffect(() => {
    const getData = async () => {
      let response = await request(
        'GET',
        `/api/v1/collections/${state.id}/products`
      );
      if (response) {
        if (response.data.status === 'success') {
          console.log(response);
          setName(response.data.data.collection.name);
          setImgCover(response.data.data.collection.imageCover);
          setProducts(response.data.data.collection.products);
        }
      }
    };
    getData();
  }, [state]);
  return (
    <section className='collection'>
      <div className='collection__hero'>
        {imgCover && name ? (
          <Hero img={imgCover} name={name} btn={false} />
        ) : (
          ''
        )}
      </div>

      <section className='collection__body'>
        <div className='collection__body__nav'>
          <div className='collection__body__nav__collections'>
            <h4 className='collection__body__nav__header'>collections</h4>
            <div className='collection__body__nav__collections__names'>
              <h4>all products</h4>
              <h4>best sellers</h4>
              <h4>new releases</h4>
            </div>
          </div>
          <div className='collection__body__nav__filters'>
            <h4 className='collection__body__nav__header'>filter</h4>
            <div className='collection__body__nav__filters__filter'>
              <h4 className='collection__body__nav__filters__filter__header'>
                cuts
              </h4>
            </div>
            <div className='collection__body__nav__filters__filter'>
              <h4 className='collection__body__nav__filters__filter__header'>
                collar
              </h4>
            </div>
            <div className='collection__body__nav__filters__filter'>
              <h4 className='collection__body__nav__filters__filter__header'>
                color
              </h4>
            </div>
            <div className='collection__body__nav__filters__filter'>
              <h4 className='collection__body__nav__filters__filter__header'>
                size
              </h4>
            </div>
          </div>
        </div>
        <div className='collection__body__products'>
          {products
            ? products.map((item, i) => {
                return <Product product={item} key={i} />;
              })
            : ''}
        </div>
      </section>
    </section>
  );
}
