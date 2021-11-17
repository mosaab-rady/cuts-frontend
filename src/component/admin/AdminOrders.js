import React, { useEffect, useState } from 'react';
import { request } from '../../js/axios';

export default function AdminOrders() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    document.getElementById('App').scrollTo({
      top: 0,
      behavior: 'auto',
    });

    const getData = async () => {
      const res = await request('GET', 'api/v1/orders');
      if (res) {
        if (res.data.status === 'success') {
          setOrders(res.data.data.orders);
        }
      }
    };
    getData();
  }, []);
  console.log(orders);

  return <div className='account--body'>orders</div>;
}
