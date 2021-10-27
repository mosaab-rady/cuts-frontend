import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import { request } from '../../js/axios';

export default function AdminCollectionDetail() {
  const host = 'http://localhost:5000';
  const location = useLocation();
  const [collection, setCollection] = useState('');

  const [imageHero, setImageHero] = useState('');
  const [imageCover, setImageCover] = useState('');
  const [image, setImage] = useState('');
  const [imageDetail, setImageDetail] = useState('');
  const [mode, setMode] = useState('');

  useEffect(() => {
    document.getElementById('App').scrollTo({
      top: 0,
      behavior: 'auto',
    });

    const getData = async () => {
      const res = await request('GET', `api/v1/collections/${location.state}`);
      if (res) {
        // console.log(res);
        if (res.data.status === 'success') {
          setCollection(res.data.data.collection);
          setImageHero(
            `${host}/api/v1/images/${res.data.data.collection.imageHero}`
          );
          setImageCover(
            `${host}/api/v1/images/${res.data.data.collection.imageCover}`
          );
          setImage(`${host}/api/v1/images/${res.data.data.collection.image}`);
          setImageDetail(
            `${host}/api/v1/images/${res.data.data.collection.imageDetail}`
          );
          setMode(res.data.data.collection.mode);
        }
      }
    };
    getData();
  }, [location]);

  const handlePhoto = (img) => (e) => {
    e.preventDefault();
    if (e.target.files && e.target.files[0]) {
      let reader = new FileReader();
      reader.onload = (e) => {
        if (img === 'hero') setImageHero(e.target.result);
        if (img === 'cover') setImageCover(e.target.result);
        if (img === 'image') setImage(e.target.result);
        if (img === 'detail') setImageDetail(e.target.result);
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  const displaymodes = () => {
    const options = document.getElementById(
      'account--body__collection__form__group__options'
    );
    if (options.style.display === 'block') {
      options.style.display = 'none';
    } else {
      options.style.display = 'block';
    }
  };

  const updatecollection = (e) => {
    e.preventDefault();

    console.log(e.target.name.value);
    console.log(mode);
    console.log(e.target.imageHero.files[0]);
  };

  const removecollection = (e) => {
    e.preventDefault();
    console.log('removed');
  };

  return (
    <div className='account--body'>
      <form
        className='account--body__collection__form'
        onSubmit={updatecollection}
      >
        <div className='account--body__collection__form__group account--body__collection__form__name__group'>
          <label
            htmlFor='name'
            className='account--body__collection__form__group__label'
          >
            name
          </label>
          <input type='text' name='name' defaultValue={collection.name} />
        </div>

        <div className='account--body__collection__form__group account--body__collection__form__mode__group'>
          <label
            htmlFor='mode'
            className='account--body__collection__form__group__label'
          >
            mode
          </label>

          <div className='account--body__collection__form__group__options--container'>
            <label
              className='account--body__collection__form__group__select'
              onClick={displaymodes}
            >
              {mode}
              <svg
                width='10'
                height='10'
                viewBox='0 0 5 4'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path d='M2.5 4L0.334936 0.25H4.66506L2.5 4Z' fill='#b3b0b0' />
              </svg>
            </label>
            <div
              className='account--body__collection__form__group__options'
              id='account--body__collection__form__group__options'
            >
              <h4
                className='account--body__collection__form__group__options__option'
                onClick={() => {
                  displaymodes();
                  setMode('main');
                }}
              >
                main 'overview hero & navbar'
              </h4>
              <h4
                className='account--body__collection__form__group__options__option'
                onClick={() => {
                  displaymodes();
                  setMode('first');
                }}
              >
                first 'navbar'
              </h4>
              <h4
                className='account--body__collection__form__group__options__option'
                onClick={() => {
                  displaymodes();
                  setMode('second');
                }}
              >
                second 'overview section'
              </h4>
              <h4
                className='account--body__collection__form__group__options__option'
                onClick={() => {
                  displaymodes();
                  setMode('none');
                }}
              >
                none
              </h4>
            </div>
          </div>
          {/* 
          <select name='mode' defaultvalue={collection.mode}>
            <option value='main'>main </option>
            <option value='first'>first</option>
            <option value='second'>second</option>
            <option value='none'>none</option>
          </select> */}
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
            src={imageHero}
            alt=''
            className='account--body__collection__form__group__imghero'
          />
          <label className='account--body__collection__form__group__fileinput'>
            <input
              type='file'
              accept='image/*'
              name='imageHero'
              onChange={handlePhoto('hero')}
            />
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
            src={imageCover}
            alt=''
            className='account--body__collection__form__group__imgcover'
          />
          <label className='account--body__collection__form__group__fileinput'>
            <input
              type='file'
              accept='image/*'
              name='imageCover'
              onChange={handlePhoto('cover')}
            />
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
            src={image}
            alt=''
            className='account--body__collection__form__group__img'
          />
          <label className='account--body__collection__form__group__fileinput'>
            <input
              type='file'
              accept='image/*'
              name='image'
              onChange={handlePhoto('image')}
            />
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
            src={imageDetail}
            alt=''
            className='account--body__collection__form__group__imgdetail'
          />
          <label className='account--body__collection__form__group__fileinput'>
            <input
              type='file'
              accept='image/*'
              name='imageDetail'
              onChange={handlePhoto('detail')}
            />
            choose new image detail
          </label>
        </div>
        <div className='account--body__collection__form__group__btns'>
          <button type='submit'>update</button>
          <button onClick={removecollection}>remove</button>
        </div>
      </form>
    </div>
  );
}
