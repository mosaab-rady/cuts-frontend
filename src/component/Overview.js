import React, { useEffect, useState } from 'react';
import '../css/overview.css';
import { request } from '../js/axios';
// import Spinner from '../Spinner';

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
  const [mainCollection, setMainCollection] = useState('');
  const [firstCollection, setFirstCollection] = useState('');

  useEffect(() => {
    const getData = async () => {
      let response = await request(
        'GET',
        `/api/v1/collections/display?mode=main`
      );
      if (response) {
        if (response.data.status === 'success') {
          setMainCollection(response.data.data.collection);
        } else if (response.data.status === 'fail') {
          response = await request(
            'GET',
            `/api/v1/collections/display?name=all product`
          );
          if (response.data.status === 'success')
            setMainCollection(response.data.data.collection);
        }
      }

      const FirstResponse = await request(
        'GET',
        '/api/v1/collections/display?mode=first'
      );
      setFirstCollection(FirstResponse.data.data.collection);
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

  window.onscroll = function () {
    myFn();
  };

  return (
    <>
      {mainCollection ? (
        <div className='overview__main--collection'>
          <img
            className='overview__main--collection__img'
            src={`${host}/api/v1/images/${mainCollection.imageHero}`}
            alt=''
          />
          <div className='overview__main--collection__box'>
            <h2>{mainCollection.name}</h2>
            <button className='shop-now-btn'>shop now</button>
          </div>
        </div>
      ) : (
        ''
      )}
      <div className='overview__our--mission' id='our--mission'>
        <h4 className='overview__our--mission__h4'>our mission</h4>
        <h3 className='overview__our--mission__h3'>
          We're here to outfit the world’s most ambitious people.
        </h3>
      </div>
      <div className='secondCollection'>
        <img
          className='secondCollection__img'
          src={`${host}/api/v1/images/${firstCollection.image}`}
          alt=''
        />
        <div className='secondCollection__box'>
          <h3 className='secondCollection__box__h3'>{firstCollection.name}</h3>
          <button className='shop-now-btn'>shop now</button>
        </div>
      </div>
    </>
  );
}
