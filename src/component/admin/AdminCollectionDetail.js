import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import { request } from '../../js/axios';

export default function AdminCollectionDetail() {
  const host = 'http://localhost:5000';
  const location = useLocation();
  const [collection, setCollection] = useState('');

  useEffect(() => {
    document.getElementById('App').scrollTo({
      top: 0,
      behavior: 'auto',
    });

    const getData = async () => {
      const res = await request('GET', `api/v1/collections/${location.state}`);
      if (res) {
        console.log(res);
        if (res.data.status === 'success') {
          setCollection(res.data.data.collection);
        }
      }
    };
    getData();
  }, [location]);

  return (
    <div className='account--body'>
      <form className='account--body__collection__form'>
        <div className='account--body__collection__form__group account--body__collection__form__name__group'>
          <label
            htmlFor='collection__name'
            className='account--body__collection__form__group__label'
          >
            name
          </label>
          <input
            type='text'
            name='collection__name'
            defaultValue={collection.name}
          />
        </div>
        <div className='account--body__collection__form__group account--body__collection__form__imagehero__group'>
          <label
            htmlFor='imageHero'
            className='account--body__collection__form__group__label'
          >
            the hero image
          </label>
          <h4 className='account--body__collection__form__group__detail'>
            the main image that appears in the overview page "not required"
          </h4>
          <img
            src={`${host}/api/v1/images/${collection.imageHero}`}
            alt=''
            className='account--body__collection__form__group__imghero'
          />
          <label className='account--body__collection__form__group__fileinput'>
            <input type='file' accept='image/*' name='imageHero' />
            choose new hero image
          </label>
        </div>

        <div className='account--body__collection__form__group account--body__collection__form__imageCover__group'>
          <label
            htmlFor='imageCover'
            className='account--body__collection__form__group__label'
          >
            the cover image
          </label>
          <h4 className='account--body__collection__form__group__detail'>
            the image that appears in the collection page "required"
          </h4>
          <img
            src={`${host}/api/v1/images/${collection.imageCover}`}
            alt=''
            className='account--body__collection__form__group__imgcover'
          />
          <label className='account--body__collection__form__group__fileinput'>
            <input type='file' accept='image/*' name='imageCover' />
            choose new cover image
          </label>
        </div>

        <div className='account--body__collection__form__group account--body__collection__form__image__group'>
          <label
            htmlFor='image'
            className='account--body__collection__form__group__label'
          >
            the image
          </label>
          <h4 className='account--body__collection__form__group__detail'>
            the image that appears in the overview section "not required"
          </h4>
          <img
            src={`${host}/api/v1/images/${collection.image}`}
            alt=''
            className='account--body__collection__form__group__img'
          />
          <label className='account--body__collection__form__group__fileinput'>
            <input type='file' accept='image/*' name='image' />
            choose new image
          </label>
        </div>

        <div className='account--body__collection__form__group account--body__collection__form__imagedetail__group'>
          <label
            htmlFor='imageDetail'
            className='account--body__collection__form__group__label'
          >
            the image detail
          </label>
          <h4 className='account--body__collection__form__group__detail'>
            the image that appears in navbar "not required"
          </h4>
          <img
            src={`${host}/api/v1/images/${collection.imageDetail}`}
            alt=''
            className='account--body__collection__form__group__imgdetail'
          />
          <label className='account--body__collection__form__group__fileinput'>
            <input type='file' accept='image/*' name='imageDetail' />
            choose new image detail
          </label>
        </div>
      </form>
    </div>
  );
}
