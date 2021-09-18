import React, { useEffect, useState } from 'react';
import '../css/navbardropcollections.css';
import { request } from '../js/axios';
import NavbarCollection from './NavbarCollection';

export default function NavbarDropCollections() {
  const [main, setMain] = useState('');
  const [first, setFirst] = useState('');

  useEffect(() => {
    const getData = async () => {
      let res;

      res = await request('GET', `/api/v1/collections/display?mode=main`);
      if (res) {
        if (res.data.status === 'success') {
          setMain(res.data.data.collection[0]);
        }
      }

      res = await request('GET', `/api/v1/collections/display?mode=first`);
      if (res) {
        if (res.data.status === 'success') {
          setFirst(res.data.data.collection[0]);
        }
      }
    };
    getData();
  }, []);

  return (
    <div className='navbar__drop__collections--container'>
      {main ? (
        <NavbarCollection
          name={main.name}
          slug={main.slug}
          img={main.imageDetail}
        />
      ) : (
        ''
      )}
      {first ? (
        <NavbarCollection
          name={first.name}
          slug={first.slug}
          img={first.imageDetail}
        />
      ) : (
        ''
      )}
      <NavbarCollection
        name='new releases'
        slug='new-releases'
        img='image/new-releases/imageDetail'
      />
      <NavbarCollection
        name='best sellers'
        slug='best-sellers'
        img='image/best-sellers/imageDetail'
      />
    </div>
  );
}