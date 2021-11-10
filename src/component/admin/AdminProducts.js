import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router';

import '../../css/adminproducts.css';

import { request } from '../../js/axios';

export default function AdminProducts() {
  const host = 'http://localhost:5000';

  const location = useLocation();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    document.getElementById('App').scrollTo({
      top: 0,
      behavior: 'auto',
    });

    const getData = async () => {
      const res = await request('GET', `api/v1/products/${location.pathname}`);
      if (res) {
        if (res.data.status === 'success') {
          setProducts(res.data.data.products);
        }
      }
    };
    getData();
  }, [location]);

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
        <div className='account--body__products--container'>
          {products.map((item, i) => (
            <Link
              key={i}
              className='account--body__products__product link'
              to={{
                pathname: `/account/products/${item.slug}`,
                search: `fabric=${item.fabric}&color=${item.color}`,
              }}
            >
              <img
                src={`${host}/api/v1/images/${item.imageCover}`}
                className='account--body__products__product__img'
                alt=''
              />
              <div className='account--body__products__product__detail'>
                <h4 className='account--body__products__product__name'>
                  {item.name}
                  <span>${item.price}</span>
                </h4>
                <h4 className='account--body__products__product__amount'>
                  amount :{item.amount}
                </h4>
                <div className='account--body__products__product__sizes'>
                  <h4>
                    <span>s : </span>
                    {item.size.small}
                  </h4>
                  <h4>
                    <span>m : </span>
                    {item.size.medium}
                  </h4>
                  <h4>
                    <span>l : </span>
                    {item.size.large}
                  </h4>
                  <h4>
                    <span>xL : </span>
                    {item.size.xLarge}
                  </h4>
                  <h4>
                    <span>xxL : </span>
                    {item.size.xxLarge}
                  </h4>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
