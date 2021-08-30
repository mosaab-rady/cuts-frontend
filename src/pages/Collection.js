import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { request } from '../js/axios';
import Product from '../component/Product';
import Hero from '../component/Hero';
import '../css/collection.css';
import CollectionBar from '../component/CollectionBar';

export default function Collection() {
  const { state, search } = useLocation();
  const [products, setProducts] = useState('');
  const [name, setName] = useState('');
  const [imgCover, setImgCover] = useState('');

  useEffect(() => {
    const getData = async () => {
      let response;
      if (state.id) {
        response = await request(
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
      }
      if (state.sort) {
        response = await request('GET', `/api/v1/products/${search}`);
        if (response) {
          if (response.data.status === 'success') {
            setName(state.sort);
            setImgCover(`/image/${state.sort}/imageCover`);
            setProducts(response.data.data.products);
          }
        }
      }
      if (state.collection) {
        console.log(state.collection);
        response = await request('GET', `/api/v1/products/${state.collection}`);
        if (response) {
          if (response.data.status === 'success') {
            setName(state.collection);
            setImgCover(`/image/${state.collection}/imageCover`);
            setProducts(response.data.data.products);
          }
        }
      }
    };
    getData();
  }, [state, search]);
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
