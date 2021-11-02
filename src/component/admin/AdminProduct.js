import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import '../../css/adminproducts.css';

// import { request } from '../../js/axios';

export default function AdminProducts() {
  useEffect(() => {
    document.getElementById('App').scrollTo({
      top: 0,
      behavior: 'auto',
    });

    // const getData = async () => {
    //   const res = await request('GET', 'api/v1/products');
    //   if (res) {
    //     console.log(res);
    //   }
    // };
    // getData();
  }, []);

  return (
    <div className='account--body'>
      <div className='account--body__products'>
        <div className='account--body__products__addproduct'>
          <Link
            className='link'
            to={{
              pathname: '/account/products/add-product',
            }}
          >
            <h3 className='account--body__products__addproduct__h3'>
              add new product
            </h3>
          </Link>
        </div>
        <div className='account--body__products--container'></div>
      </div>
    </div>
  );
}
