import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import '../css/productPage.css';
import { request } from '../js/axios';
import Slider from '../component/Slider';
import ProductDetails from '../component/ProductDetails';

export default function Product() {
  // const host = 'http://localhost:5000';
  const { state } = useLocation();
  const [product, setProduct] = useState('');
  const [colors, setColors] = useState('');

  useEffect(() => {
    const getData = async () => {
      let response = await request('GET', `api/v1/products/${state.id}`);
      if (response) {
        if (response.data.status === 'success') {
          setProduct(response.data.data.product);
          setColors(response.data.data.availableColors);
        }
      }
    };
    getData();
  }, [state]);

  return product ? (
    <section className='product--page'>
      <section className='product'>
        <Slider product={product} />
        {colors ? (
          <ProductDetails
            product={product}
            setProduct={setProduct}
            colors={colors}
          />
        ) : (
          ''
        )}
      </section>
    </section>
  ) : (
    ''
  );
}
