import React, { useEffect } from 'react';
import { useLocation } from 'react-router';
import '../css/productPage.css';
import { request } from '../js/axios';

export default function Product() {
  const { state } = useLocation();

  useEffect(() => {
    const getData = async () => {
      let response = await request('GET', `api/v1/products/${state.id}`);
      if (response) {
        console.log(response);
      }
    };
    getData();
  }, [state]);

  return (
    <div>
      <h3> hello world!!!!</h3>
    </div>
  );
}
