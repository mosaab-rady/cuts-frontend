import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../../css/admincollections.css';
import { request } from '../../js/axios';
import Hero from '../Hero';

export default function AdminCollections() {
  // const host = 'http://localhost:5000';

  const [collections, setCollections] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const res = await request('GET', 'api/v1/collections');
      if (res) {
        if (res.data.status === 'success') {
          setCollections(res.data.data.collections);
        }
      }
    };
    getData();
  }, []);

  return (
    <div className='account--body'>
      <div className='account--body__collections--container'>
        {collections.map((item, i) => {
          return (
            <Link
              key={i}
              className='link account--body__collections__collection'
              to={{
                pathname: `/account/collections/${item.slug}`,
                state: item._id,
              }}
            >
              <Hero img={item.imageCover} name={item.name} btn={false} />
            </Link>
          );
        })}
      </div>
    </div>
  );
}

// <div key={i} className='account--body__collections__collection'>
//             <img
//               src={`${host}/api/v1/images/${item.imageCover}`}
//               alt=''
//               className='account--body__collections__collection__img'
//             />
//             <h3 className='account--body__collections__collection__h3'>
//               {item.name}
//             </h3>
//           </div>
