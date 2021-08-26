import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { request } from '../js/axios';
import Product from '../component/Product';
import Hero from '../component/Hero';
import '../css/collection.css';
import CollectionBar from '../component/CollectionBar';

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
          <CollectionBar />
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
