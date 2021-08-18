import React, { useEffect, useState } from 'react';
import '../css/overview.css';
import { request } from '../js/axios';
import { isInViewport } from '../js/viewport';
// import Spinner from '../Spinner';

export default function Overview() {
  const host = 'http://localhost:5000';
  const [mainCollection, setMainCollection] = useState('');
  const [collections, setCollections] = useState([]);
  // const [secondCollection, setSecondCollection] = useState('');
  // const [thirdCollection, setThirdCollection] = useState('');

  useEffect(() => {
    const getData = async () => {
      let response = await request(
        'GET',
        `/api/v1/collections/display?mode=main`
      );
      if (response) {
        if (response.data.status === 'success') {
          setMainCollection(response.data.data.collection[0]);
        }
      }

      const FirstResponse = await request(
        'GET',
        '/api/v1/collections/display?mode=first&mode=second'
      );
      if (FirstResponse) {
        if (FirstResponse.data.status === 'success') {
          setCollections(FirstResponse.data.data.collection);
        }
      }
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
      {collections ? (
        <div className='overview__collections'>
          {collections.map((collection, i) => {
            return (
              <div key={i} className='overvieew__collections__collection'>
                <img
                  className='overview__collections__collection__img'
                  src={`${host}/api/v1/images/${collection.image}`}
                  alt=''
                />
                <div className='overview__collections__collection__box'>
                  <h3 className='overview__collections__collection__h3'>
                    {collection.name}
                  </h3>
                  <button className='shop-now-btn'>shop now</button>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        ''
      )}
    </>
  );
}
