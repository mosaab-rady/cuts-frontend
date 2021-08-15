import React, { useEffect, useState } from 'react';
import '../css/overview.css';
import { request } from '../js/axios';

export default function Overview() {
  var isInViewport = function (elem) {
    var bounding = elem.getBoundingClientRect();
    return (
      bounding.top >= 0 &&
      bounding.left >= 0 &&
      bounding.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      bounding.right <=
        (window.innerWidth || document.documentElement.clientWidth)
    );
  };

  const host = 'http://localhost:5000';
  const [collection, setCollection] = useState('');

  useEffect(() => {
    const getData = async () => {
      const response = await request('GET', `/api/v1/collections/displayed`);
      setCollection(response.data.data.collection);
    };
    getData();
  }, []);

  const myFn = () => {
    // console.log('hello');
    const div = document.getElementById('our--mission');
    if (div) {
      if (isInViewport(div)) {
        document.getElementById('our--mission').className = 'slideUp';
      } else if (!isInViewport(div)) {
        document.getElementById('our--mission').className =
          'overview__our--mission';
      }
    }
  };

  return (
    <>
      <div className='overview__scroll' onScroll={() => myFn()}>
        <div className='overview__first--collection'>
          <img
            className='overview__first--collection__img'
            src={`${host}/api/v1/images/${collection.image}`}
            alt=''
          />
          <div className='overview__first--collection__box'>
            <h2>{collection.name}</h2>
            <button className='shop-now-btn'>shop now</button>
          </div>
        </div>
        <div className='overview__our--mission' id='our--mission'>
          <h4 className='overview__our--mission__h4'>our mission</h4>
          <h3 className='overview__our--mission__h3'>
            We're here to outfit the world’s most ambitious people.
          </h3>
        </div>
      </div>
    </>
  );
}
