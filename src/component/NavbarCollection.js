import React from 'react';
import { Link } from 'react-router-dom';
import '../css/navbarcollection.css';

export default function NavbarCollection({ name, slug, img }) {
  const host = 'http://localhost:5000';

  return (
    <Link
      className='link navbar--collection'
      to={{
        pathname: `/collections/${slug}`,
      }}
    >
      <img
        src={`${host}/api/v1/images/${img}`}
        alt=''
        className='navbar--collection__img'
      />
      <h4 className='navbar--collection__h4'>{name}</h4>
    </Link>
  );
}
