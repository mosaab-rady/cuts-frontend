import React, { useEffect, useState } from 'react';
import { request } from '../js/axios';

export default function OrderHistory() {
  const [orders, setOrders] = useState('');

  useEffect(() => {
    const getData = async () => {
      const res = await request('GET', '/api/v1/shopping/myshoppings');
      if (res) {
        if (res.data.status === 'success') {
          setOrders(res.data.data.shoppings);
        }
      }
    };
    getData();
  }, []);

  return (
    <div>
      <h1>order history</h1>
      <h1>order history</h1>
      <h1>order history</h1>
      <h1>order history</h1>
      <h1>order history</h1>
      <h1>order history</h1>
      <h1>order history</h1>
    </div>
  );
}
