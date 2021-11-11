import React, { useEffect, useState } from 'react';
import { request } from '../../js/axios';
import { create } from '../../js/productOperations';

export default function AddProduct() {
  const [type, setType] = useState('t-shirt');
  const [cut, setCut] = useState('classic');
  const [collar, setCollar] = useState('crew');
  const [imageCover, setImageCover] = useState('');
  const [imageDetail, setImageDetail] = useState('');
  const [img_1, setImg_1] = useState('');
  const [img_2, setImg_2] = useState('');
  const [img_3, setImg_3] = useState('');
  const [collections, setCollections] = useState([]);
  const [collection, setCollection] = useState({});

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

  const showTypes = () => {
    const types = document.getElementById(
      'account--body__product__form__types'
    );

    if (types.style.display === 'block') {
      types.style.display = 'none';
    } else {
      types.style.display = 'block';
    }
  };

  const showCuts = () => {
    const cuts = document.getElementById('account--body__product__form__cuts');
    if (cuts.style.display === 'block') {
      cuts.style.display = 'none';
    } else {
      cuts.style.display = 'block';
    }
  };

  const showCollars = () => {
    const collars = document.getElementById(
      'account--body__product__form__collars'
    );
    if (collars.style.display === 'block') {
      collars.style.display = 'none';
    } else {
      collars.style.display = 'block';
    }
  };

  const handlePhoto = (img) => (e) => {
    e.preventDefault();
    if (e.target.files && e.target.files[0]) {
      let reader = new FileReader();
      reader.onload = (e) => {
        if (img === 'cover') setImageCover(e.target.result);
        if (img === 'detail') setImageDetail(e.target.result);
        if (img === 'img_1') setImg_1(e.target.result);
        if (img === 'img_2') setImg_2(e.target.result);
        if (img === 'img_3') setImg_3(e.target.result);
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  const createproduct = (e) => {
    e.preventDefault();
    e.target.type.value = type;
    e.target.cut.value = cut;
    e.target.collar.value = collar;
    if (collection) {
      e.target.collection.value = collection._id;
    }
    create(e);
  };

  const showCollections = () => {
    const collections = document.getElementById(
      'account--body__add--product__form__collections'
    );
    if (collections.style.display === 'block') {
      collections.style.display = 'none';
    } else {
      collections.style.display = 'block';
    }
  };

  return (
    <div className='account--body'>
      <form className='account--body__product__form' onSubmit={createproduct}>
        <div className='account--body__product__form__group'>
          <label htmlFor='name'>name</label>
          <input
            type='text'
            required
            placeholder='name'
            minLength='10'
            name='name'
          />
        </div>
        <div className='account--body__product__form__group'>
          <label htmlFor='collection'>collection</label>
          <input
            type='text'
            placeholder='collection'
            name='collection'
            className='account--body__product__form__group__options__inp'
          />
          <div className='account--body__product__form__options--container'>
            <label
              className='account--body__product__form__group__options__label'
              onClick={showCollections}
            >
              {collection.name}
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
              className='account--body__product__form__options'
              id='account--body__add--product__form__collections'
            >
              {collections.map((item, i) => (
                <h4
                  key={i}
                  className='account--body__product__form__options__option'
                  onClick={() => {
                    setCollection(item);
                    showCollections();
                  }}
                >
                  {item.name}
                </h4>
              ))}
            </div>
          </div>
        </div>
        <div className='account--body__product__form__group'>
          <label htmlFor='type'>type</label>
          <input
            type='text'
            required
            name='type'
            placeholder='type'
            defaultValue={type}
            className='account--body__product__form__group__options__inp'
          />
          <div className='account--body__product__form__options--container'>
            <label
              className='account--body__product__form__group__options__label'
              onClick={showTypes}
            >
              {type}
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
              className='account--body__product__form__options'
              id='account--body__product__form__types'
            >
              <h4
                className='account--body__product__form__options__option'
                onClick={() => {
                  setType('t-shirt');
                  showTypes();
                }}
              >
                t-shirt
              </h4>
              <h4
                className='account--body__product__form__options__option'
                onClick={() => {
                  showTypes();
                  setType('polo');
                }}
              >
                polo
              </h4>
              <h4
                className='account--body__product__form__options__option'
                onClick={() => {
                  showTypes();
                  setType('long-sleeve');
                }}
              >
                long-sleeve
              </h4>
              <h4
                className='account--body__product__form__options__option'
                onClick={() => {
                  showTypes();
                  setType('sweat-shirt');
                }}
              >
                sweat-shirt
              </h4>
              <h4
                className='account--body__product__form__options__option'
                onClick={() => {
                  showTypes();
                  setType('hooded-shirt');
                }}
              >
                hooded-shirt
              </h4>
            </div>
          </div>
        </div>
        <div className='account--body__product__form__cutcollar'>
          <div className='account--body__product__form__group'>
            <label htmlFor='cut'>cut</label>
            <input
              type='text'
              required
              name='cut'
              defaultValue={cut}
              className='account--body__product__form__group__options__inp'
            />
            <div className='account--body__product__form__options--container'>
              <label
                className='account--body__product__form__group__options__label'
                onClick={showCuts}
              >
                {cut}
                <svg
                  width='10'
                  height='10'
                  viewBox='0 0 5 4'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M2.5 4L0.334936 0.25H4.66506L2.5 4Z'
                    fill='#b3b0b0'
                  />
                </svg>
              </label>

              <div
                className='account--body__product__form__options'
                id='account--body__product__form__cuts'
              >
                <h4
                  className='account--body__product__form__options__option'
                  onClick={() => {
                    showCuts();
                    setCut('classic');
                  }}
                >
                  <svg
                    width='100%'
                    viewBox='0 0 26 26'
                    aria-hidden='true'
                    data-acsb-hidden='true'
                    data-acsb-force-hidden='true'
                  >
                    <g
                      fill='none'
                      fillRule='evenodd'
                      stroke='#000'
                      strokeWidth='.5'
                      transform='translate(1 1)'
                    >
                      <circle cx='12' cy='12' r='12'></circle>
                      <path
                        className='icon__path'
                        d='M0,0.0373842556 C0,2.16467761 0,4.28614881 0,6.40179785 C0,9.74301911 0.487935612,12.0843997 0.487935612,14.0973645 C1.40759127,14.584506 4.32583303,14.7711529 9.2426609,14.6573053 C10.1591136,14.6360851 12.8145498,14.1076323 17.2089695,13.0719469 C17.2089695,13.4992223 17.2089695,12.5580054 17.2089695,10.248296 C17.2089695,7.93858663 17.3104842,4.69836878 17.5135135,0.527642449'
                        transform='translate(3.46 3.517)'
                      ></path>
                    </g>
                  </svg>
                  classic
                </h4>
                <h4
                  className='account--body__product__form__options__option'
                  onClick={() => {
                    showCuts();
                    setCut('elongated');
                  }}
                >
                  <svg
                    width='100%'
                    viewBox='0 0 26 26'
                    aria-hidden='true'
                    data-acsb-hidden='true'
                    data-acsb-force-hidden='true'
                  >
                    <g
                      fill='none'
                      fillRule='evenodd'
                      stroke='#201E20'
                      strokeWidth='.5'
                      transform='translate(1 1)'
                    >
                      <circle cx='12' cy='12' r='12'></circle>
                      <path
                        className='icon__path'
                        d='M3.22375388,3.69525727 C3.55592736,7.77021913 3.72201409,10.8919512 3.72201409,13.0604534 C3.72201409,16.4851451 3.10344828,16.4851451 3.10344828,18.5483979 C4.74673082,18.6665001 6.07797526,18.5309925 7.09718159,18.141875 C8.6259911,17.5581987 10.6111024,13.0604534 13.1169431,13.0604534 C15.6984878,13.0604534 18.319456,17.9566347 19.3168873,18.5483979 C19.4793533,18.6447869 19.730046,18.6447869 20.0689655,18.5483979 C19.8722889,17.9016775 19.7739506,16.2209283 19.7739506,13.5061504 C19.7739506,10.7913724 19.826751,7.26088582 19.9323518,2.91469053'
                      ></path>
                    </g>
                  </svg>
                  elongated
                </h4>
                <h4
                  className='account--body__product__form__options__option'
                  onClick={() => {
                    showCuts();
                    setCut('split');
                  }}
                >
                  <svg
                    width='100%'
                    viewBox='0 0 26 26'
                    aria-hidden='true'
                    data-acsb-hidden='true'
                    data-acsb-force-hidden='true'
                  >
                    <g
                      fill='none'
                      fillRule='evenodd'
                      stroke='#000'
                      strokeWidth='.5'
                      transform='translate(1 1)'
                    >
                      <circle cx='12' cy='12' r='12'></circle>
                      <path
                        className='icon__path'
                        d='M0.713125297,0.0188760669 C0.713125297,1.41392861 0.713125297,3.16894786 0.713125297,5.28393384 C0.713125297,8.62410794 0,12.5795015 0,14.5918355 C6.24618349,15.878754 9.39204832,16.3622814 9.43759449,16.0424176 C9.68548318,14.301533 9.99502509,12.5368443 10.5669387,10.2827993 C10.7863941,9.41787409 11.9943945,14.301533 11.9943945,14.301533 C13.0148097,14.301533 14.9695913,13.9019414 17.8587393,13.1027582 C17.6642188,11.3438678 17.5669586,9.14053244 17.5669586,6.49275224 C17.5669586,3.84497204 17.7333464,1.82348518 18.066122,0.428291666'
                        transform='translate(2.81 3.517)'
                      ></path>
                    </g>
                  </svg>
                  split
                </h4>
              </div>
            </div>
          </div>
          <div className='account--body__product__form__group'>
            <label htmlFor='cut'>collar</label>
            <input
              type='text'
              required
              name='collar'
              defaultValue={collar}
              className='account--body__product__form__group__options__inp'
            />
            <div className='account--body__product__form__options--container'>
              <label
                className='account--body__product__form__group__options__label'
                onClick={showCollars}
              >
                {collar}
                <svg
                  width='10'
                  height='10'
                  viewBox='0 0 5 4'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M2.5 4L0.334936 0.25H4.66506L2.5 4Z'
                    fill='#b3b0b0'
                  />
                </svg>
              </label>

              <div
                className='account--body__product__form__options'
                id='account--body__product__form__collars'
              >
                <h4
                  className='account--body__product__form__options__option'
                  onClick={() => {
                    showCollars();
                    setCollar('crew');
                  }}
                >
                  <svg
                    width='100%'
                    viewBox='0 0 26 26'
                    aria-hidden='true'
                    data-acsb-hidden='true'
                    data-acsb-force-hidden='true'
                  >
                    <defs>
                      <circle id='crew-icon-a' cx='12' cy='12' r='12'></circle>
                      <circle id='crew-icon-c' cx='12' cy='12' r='12'></circle>
                      <circle id='crew-icon-e' cx='12' cy='12' r='12'></circle>
                      <circle id='crew-icon-g' cx='12' cy='12' r='12'></circle>
                    </defs>
                    <g
                      fill='none'
                      fillRule='evenodd'
                      transform='translate(1 1)'
                    >
                      <circle
                        cx='12'
                        cy='12'
                        r='12'
                        stroke='#201E20'
                        strokeWidth='.5'
                      ></circle>
                      <mask id='crew-icon-b' fill='#fff'>
                        <use xlinkHref='#crew-icon-a'></use>
                      </mask>
                      <path
                        className='icon__path'
                        stroke='#201E20'
                        strokeWidth='.5'
                        d='M12.1679082,10.4366504 C13.2665468,10.4366504 14.8131378,9.98479398 16.8076812,9.08108108 L26.0151101,12.4240859 L37.2324324,19.0035543 L31.6983898,28.4143373 L28.4789273,26.2630835 L27.8864804,39.7606473 L-3.27324722,39.7606473 L-4.61974515,25.9695776 L-7.83207961,28.6004868 L-12.7567568,20.2585949 L-2.52546931,13.3119476 L6.91469802,9.26314909 C8.00579656,9.75287007 8.79413614,10.0593222 9.27971675,10.1825053 C10.4557919,10.4808547 11.4894528,10.4366504 12.1679082,10.4366504 Z'
                        mask='url(#crew-icon-b)'
                      ></path>
                      <mask id='crew-icon-d' fill='#fff'>
                        <use xlinkHref='#crew-icon-c'></use>
                      </mask>
                      <path
                        className='icon__path'
                        stroke='#201E20'
                        strokeWidth='.5'
                        d='M16.8076812,9.08108108 C16.8746235,10.4962315 16.4823588,11.9561331 15.6308873,13.4607859 C14.3536799,15.7177651 9.93963555,15.3950468 8.56850444,13.4607859 C7.65441703,12.1712786 7.10158489,10.7782809 6.91000801,9.28179279'
                        mask='url(#crew-icon-d)'
                      ></path>
                      <g>
                        <mask id='crew-icon-f' fill='#fff'>
                          <use xlinkHref='#crew-icon-e'></use>
                        </mask>
                        <path
                          className='icon__path'
                          stroke='#201E20'
                          strokeWidth='.5'
                          d='M17.4092577,9.33055449 C17.4092577,11.1488197 16.950638,12.7398711 16.0333986,14.1037085 C14.6575394,16.1494646 9.87211557,16.1494646 8.26773855,14.1037085 C7.19815386,12.7398711 6.53359102,11.2118469 6.27405003,9.51963593'
                          mask='url(#crew-icon-f)'
                        ></path>
                      </g>
                      <g>
                        <mask id='crew-icon-h' fill='#fff'>
                          <use xlinkHref='#crew-icon-g'></use>
                        </mask>
                        <path
                          stroke='#201E20'
                          strokeWidth='.5'
                          d='M7.02463069,9.93144903 C8.48491714,10.7084938 10.1288952,11.0574658 11.9565648,10.9783649 C13.7842345,10.8992639 15.4037129,10.4692132 16.8150003,9.68821267'
                          mask='url(#crew-icon-h)'
                        ></path>
                      </g>
                    </g>
                  </svg>
                  crew
                </h4>
                <h4
                  className='account--body__product__form__options__option'
                  onClick={() => {
                    showCollars();
                    setCollar('v-neck');
                  }}
                >
                  <svg
                    viewBox='0 0 26 26'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M13 25C19.6274 25 25 19.6274 25 13C25 6.37258 19.6274 1 13 1C6.37258 1 1 6.37258 1 13C1 19.6274 6.37258 25 13 25Z'
                      stroke='black'
                      strokeWidth='0.5'
                    />
                    <mask
                      id='mask0'
                      mask-type='alpha'
                      maskUnits='userSpaceOnUse'
                      x='1'
                      y='1'
                      width='24'
                      height='24'
                    >
                      <path
                        d='M13 25C19.6274 25 25 19.6274 25 13C25 6.37258 19.6274 1 13 1C6.37258 1 1 6.37258 1 13C1 19.6274 6.37258 25 13 25Z'
                        fill='white'
                        className='icon__path'
                      />
                    </mask>
                    <g mask='url(#mask0)'></g>
                    <mask
                      id='mask1'
                      mask-type='alpha'
                      maskUnits='userSpaceOnUse'
                      x='1'
                      y='1'
                      width='24'
                      height='24'
                    >
                      <path
                        d='M13 25C19.6274 25 25 19.6274 25 13C25 6.37258 19.6274 1 13 1C6.37258 1 1 6.37258 1 13C1 19.6274 6.37258 25 13 25Z'
                        fill='white'
                        className='icon__path'
                      />
                    </mask>
                    <g mask='url(#mask1)'>
                      <path
                        d='M17.8077 9.43243C18.2257 10.6502 18.009 12.0114 17.1575 13.5161C16.306 15.0207 14.9762 16.4801 13.1679 17.8942C11.4959 16.682 10.2029 15.4311 9.28879 14.1416C8.37471 12.8521 7.91766 11.357 7.91766 9.65619'
                        stroke='black'
                        strokeWidth='0.5'
                        className='icon__path'
                      />
                      <mask
                        id='mask2'
                        mask-type='alpha'
                        maskUnits='userSpaceOnUse'
                        x='1'
                        y='1'
                        width='24'
                        height='24'
                      >
                        <path
                          d='M13 25C19.6274 25 25 19.6274 25 13C25 6.37258 19.6274 1 13 1C6.37258 1 1 6.37258 1 13C1 19.6274 6.37258 25 13 25Z'
                          fill='white'
                        />
                      </mask>
                      <g mask='url(#mask2)'>
                        <path
                          d='M18.8466 9.82129C18.9785 11.6016 18.5139 13.2423 17.4529 14.7435C16.3919 16.2448 14.964 17.6554 13.1692 18.9753C11.1221 17.3165 9.58964 15.9059 8.57164 14.7435C7.55364 13.5812 7.04465 11.988 7.04465 9.96383'
                          stroke='black'
                          strokeWidth='0.5'
                          className='icon__path'
                        />
                      </g>
                      <mask
                        id='mask3'
                        mask-type='alpha'
                        maskUnits='userSpaceOnUse'
                        x='1'
                        y='1'
                        width='24'
                        height='24'
                      >
                        <path
                          d='M13 25C19.6274 25 25 19.6274 25 13C25 6.37258 19.6274 1 13 1C6.37258 1 1 6.37258 1 13C1 19.6274 6.37258 25 13 25Z'
                          fill='white'
                          className='icon__path'
                        />
                      </mask>
                      <g mask='url(#mask3)'>
                        <path
                          d='M7.91766 10.243C9.44926 11.0466 11.1289 11.4088 12.9566 11.3297C14.7842 11.2506 16.4432 10.806 17.9335 9.99573'
                          stroke='black'
                          strokeWidth='0.5'
                          className='icon__path'
                        />
                      </g>
                    </g>
                    <path
                      d='M25 12L18 9.5C16.1667 10.3333 11.6 11.5 8 9.5C7.6 9.5 3.16667 11.5 1 12.5'
                      stroke='black'
                      strokeWidth='0.5'
                      className='icon__path'
                    />
                  </svg>
                  v-neck
                </h4>
                <h4
                  className='account--body__product__form__options__option'
                  onClick={() => {
                    showCollars();
                    setCollar('henley');
                  }}
                >
                  <svg
                    width='100%'
                    viewBox='0 0 26 26'
                    aria-hidden='true'
                    data-acsb-hidden='true'
                    data-acsb-force-hidden='true'
                  >
                    <defs>
                      <circle
                        id='henley-icon-a'
                        cx='12'
                        cy='12'
                        r='12'
                      ></circle>
                    </defs>
                    <g
                      fill='none'
                      fillRule='evenodd'
                      transform='translate(1 1)'
                    >
                      <mask id='henley-icon-b' fill='#fff'>
                        <use xlinkHref='#henley-icon-a'></use>
                      </mask>
                      <use
                        stroke='#201E20'
                        strokeWidth='.5'
                        xlinkHref='#henley-icon-a'
                      ></use>
                      <path
                        className='icon__path'
                        stroke='#201E20'
                        strokeWidth='.5'
                        d='M12.1679082,10.4366504 C13.2665468,10.4366504 14.8131378,9.98479398 16.8076812,9.08108108 L26.0151101,12.4240859 L37.2324324,19.0035543 L31.6983898,28.4143373 L28.4789273,26.2630835 L27.8864804,39.7606473 L-3.27324722,39.7606473 L-4.61974515,25.9695776 L-7.83207961,28.6004868 L-12.7567568,20.2585949 L-2.52546931,13.3119476 L6.91469802,9.26314909 C8.00579656,9.75287007 8.79413614,10.0593222 9.27971675,10.1825053 C10.4557919,10.4808547 11.4894528,10.4366504 12.1679082,10.4366504 Z'
                        mask='url(#henley-icon-b)'
                      ></path>
                      <path
                        className='icon__path'
                        stroke='#201E20'
                        strokeWidth='.5'
                        d='M16.8076812,9.08108108 C16.8430683,10.1341416 16.6127673,11.1988174 16.1167783,12.2751085 C15.4627121,13.6944254 14.1985608,14.5756955 12.3243243,14.9189189'
                        mask='url(#henley-icon-b)'
                      ></path>
                      <path
                        className='icon__path'
                        stroke='#201E20'
                        strokeWidth='.5'
                        d='M17.6948571,9.38917317 C17.532996,10.9039795 17.1690502,12.1536485 16.6030198,13.1381804 C15.5316982,15.0015966 12.7932892,15.7837838 12.3243243,15.7837838'
                        mask='url(#henley-icon-b)'
                      ></path>
                      <path
                        className='icon__path'
                        stroke='#201E20'
                        strokeWidth='.5'
                        d='M11.1838921,9.26314909 C11.3724713,10.402411 11.1116643,11.5101874 10.4014712,12.5864785 C9.46493176,14.0057953 8.28289031,14.7832755 6.85534688,14.9189189'
                        mask='url(#henley-icon-b)'
                        transform='matrix(-1 0 0 1 18.099 0)'
                      ></path>
                      <path
                        className='icon__path'
                        stroke='#201E20'
                        strokeWidth='.5'
                        d='M11.2417308,9.57441206 C11.2708949,11.1401649 10.878289,12.4153073 10.0639132,13.3998392 C8.52255003,15.2632553 6.94646352,15.7837838 6.13588714,15.7837838'
                        mask='url(#henley-icon-b)'
                        transform='matrix(-1 0 0 1 17.38 0)'
                      ></path>
                      <path
                        className='icon__path'
                        stroke='#201E20'
                        strokeWidth='.5'
                        d='M6.85534688,9.83997945 C8.4284892,10.678004 10.1288952,11.0574658 11.9565648,10.9783649 C13.7842345,10.8992639 15.4037129,10.4692132 16.8150003,9.68821267'
                        mask='url(#henley-icon-b)'
                      ></path>
                      <circle
                        className='icon__path'
                        cx='11.784'
                        cy='22.378'
                        r='1'
                        stroke='#201E20'
                        strokeWidth='.5'
                        mask='url(#henley-icon-b)'
                      ></circle>
                      <circle
                        className='icon__path'
                        cx='11.784'
                        cy='19.135'
                        r='1'
                        stroke='#201E20'
                        strokeWidth='.5'
                        mask='url(#henley-icon-b)'
                      ></circle>
                      <circle
                        className='icon__path'
                        cx='11.784'
                        cy='15.676'
                        r='1'
                        stroke='#201E20'
                        strokeWidth='.5'
                        mask='url(#henley-icon-b)'
                      ></circle>
                      <polygon
                        className='icon__path'
                        stroke='#201E20'
                        strokeWidth='.5'
                        points='11.243 24 12.324 24 12.324 14.919 11.243 14.919'
                        mask='url(#henley-icon-b)'
                      ></polygon>
                    </g>
                  </svg>
                  henley
                </h4>
                <h4
                  className='account--body__product__form__options__option'
                  onClick={() => {
                    showCollars();
                    setCollar('hoodie');
                  }}
                >
                  <svg
                    viewBox='0 0 200 200'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      className='icon__path'
                      d='M114.289 126C107.015 159.341 104.103 145.083 116.382 169.605'
                      stroke='black'
                      strokeWidth='4'
                    />
                    <path
                      className='icon__path'
                      d='M90.2892 126C83.0151 159.341 80.1032 145.083 92.3816 169.605'
                      stroke='black'
                      strokeWidth='4'
                    />
                    <path
                      className='icon__path'
                      d='M135.802 72.9623C138.365 97.3449 130.598 114.857 112.5 125.5'
                      stroke='black'
                      strokeWidth='4'
                    />
                    <path
                      className='icon__path'
                      d='M60.547 72C57.7892 95.1021 65.4593 111.974 83.5571 122.617'
                      stroke='black'
                      strokeWidth='4'
                    />
                    <path
                      className='icon__path'
                      d='M42.395 84C38.9091 100.57 58.4976 115.76 101.16 129.571'
                      stroke='black'
                      strokeWidth='4'
                    />
                    <path
                      className='icon__path'
                      d='M157.961 84C161.393 101.428 143.072 116.618 103 129.571'
                      stroke='black'
                      strokeWidth='4'
                    />
                    <path
                      className='icon__path'
                      d='M42 88.6667C57.9211 71.4845 71.5732 62 97.8692 62C124.165 62 145.117 71.4845 157.556 88.6667'
                      stroke='black'
                      strokeWidth='4'
                    />
                    <path
                      className='icon__path'
                      d='M42 89C42 65.0141 57.7278 23 100 23C142.272 23 158 65.0141 158 89'
                      stroke='black'
                      strokeWidth='4'
                    />
                    <circle
                      cx='100'
                      cy='100'
                      r='99.5'
                      stroke='black'
                      strokeWidth='4'
                    />
                    <path
                      d='M68 117.5L13.5 149'
                      stroke='black'
                      strokeWidth='4'
                      className='icon__path'
                    />
                    <path
                      d='M137 116.5L187 148'
                      stroke='black'
                      strokeWidth='4'
                      className='icon__path'
                    />
                  </svg>
                  hoodie
                </h4>
                <h4
                  className='account--body__product__form__options__option'
                  onClick={() => {
                    showCollars();
                    setCollar('hooded');
                  }}
                >
                  <svg
                    viewBox='0 0 47 47'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M23.5 46C35.9264 46 46 35.9264 46 23.5C46 11.0736 35.9264 1 23.5 1C11.0736 1 1 11.0736 1 23.5C1 35.9264 11.0736 46 23.5 46Z'
                      stroke='#333333'
                    />
                    <path
                      d='M36.5 21C36.5 15.5948 32.9748 6.12695 23.5 6.12695C14.0252 6.12695 10.5 15.5948 10.5 21'
                      stroke='#333333'
                      className='icon__path'
                    />
                    <path
                      d='M36.5 21C32.9178 17.134 29.846 15 23.9294 15C18.0128 15 13.2988 17.134 10.5 21'
                      className='icon__path'
                      stroke='#333333'
                    />
                    <path
                      d='M15 17.5C14.4233 22.9861 16.171 26.9264 20.2431 29.321'
                      className='icon__path'
                      stroke='#333333'
                    />
                    <path
                      d='M10.6046 20C9.83242 23.9212 13.9545 27.3391 22.9708 30.2535'
                      className='icon__path'
                      stroke='#333333'
                    />
                    <path
                      d='M36.4017 20C37.1861 23.7282 32.7786 27.1461 23.1795 30.2535'
                      className='icon__path'
                      stroke='#333333'
                    />
                    <path
                      d='M32.2546 17.5C32.8751 22.698 31.1493 26.4942 27.0773 28.8888'
                      className='icon__path'
                      stroke='#333333'
                    />
                    <path
                      d='M33 26L43.5 34'
                      stroke='black'
                      className='icon__path'
                    />
                    <path
                      d='M14.5 26.5L4 35'
                      stroke='black'
                      className='icon__path'
                    />
                  </svg>
                  hooded
                </h4>
                <h4
                  className='account--body__product__form__options__option'
                  onClick={() => {
                    showCollars();
                    setCollar('polo');
                  }}
                >
                  <svg
                    viewBox='0 0 35 35'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M17.5 34.2553C26.7537 34.2553 34.2553 26.7537 34.2553 17.4999C34.2553 8.24624 26.7537 0.744629 17.5 0.744629C8.2463 0.744629 0.74469 8.24624 0.74469 17.4999C0.74469 26.7537 8.2463 34.2553 17.5 34.2553Z'
                      stroke='#333333'
                      strokeWidth='0.893617'
                    />
                    <path
                      d='M24.2129 12.5186C24.7965 14.219 24.4939 16.1196 23.305 18.2205C22.1161 20.3214 20.2593 22.3591 17.7344 24.3336C15.3999 22.641 13.5945 20.8945 12.3181 19.094C11.0418 17.2934 10.4037 15.2058 10.4037 12.8311'
                      stroke='#333333'
                      strokeWidth='0.893617'
                      className='icon__path'
                    />
                    <path
                      d='M21.0294 23.0639C20.6863 23.3999 19.7542 24.1788 18.233 25.4005L18.233 25.4005C17.9607 25.6191 17.5731 25.6192 17.3007 25.4007C15.8697 24.2525 14.9989 23.5401 14.6884 23.2633'
                      stroke='#333333'
                      strokeWidth='0.893617'
                      className='icon__path'
                    />
                    <path
                      d='M17.7667 25.7719C18.178 25.7719 18.5114 25.4385 18.5114 25.0272C18.5114 24.616 18.178 24.2826 17.7667 24.2826C17.3554 24.2826 17.022 24.616 17.022 25.0272C17.022 25.4385 17.3554 25.7719 17.7667 25.7719Z'
                      fill='white'
                      stroke='#333333'
                      strokeWidth='0.893617'
                      className='icon__path'
                    />
                    <path
                      d='M14.9741 23.5379C15.3854 23.5379 15.7188 23.2045 15.7188 22.7932C15.7188 22.3819 15.3854 22.0485 14.9741 22.0485C14.5629 22.0485 14.2295 22.3819 14.2295 22.7932C14.2295 23.2045 14.5629 23.5379 14.9741 23.5379Z'
                      fill='white'
                      stroke='#333333'
                      strokeWidth='0.893617'
                      className='icon__path'
                    />
                    <path
                      d='M16.9787 25.1329V28.8563H18.4681V25.1329'
                      stroke='#333333'
                      strokeWidth='0.893617'
                      className='icon__path'
                    />
                    <path
                      d='M10.4037 13.6504C12.5422 14.7724 14.8874 15.2782 17.4393 15.1678C19.9913 15.0573 22.3077 14.4364 24.3886 13.3051'
                      stroke='#333333'
                      strokeWidth='0.893617'
                      className='icon__path'
                    />
                    <path
                      d='M20.8163 23.1128L24.5012 24.9468C27.7089 19.9804 29.1584 16.4128 28.8497 14.2439'
                      stroke='#333333'
                      strokeWidth='0.893617'
                      className='icon__path'
                    />
                    <path
                      d='M14.5359 23.1913L11.0914 24.9468C7.88365 19.9804 6.43412 16.4128 6.74276 14.2439'
                      stroke='#333333'
                      strokeWidth='0.893617'
                      className='icon__path'
                    />
                    <path
                      d='M34.5 16.5L24.5 12.5'
                      stroke='#333333'
                      className='icon__path'
                    />
                    <path
                      d='M0.5 17L10.5 13'
                      stroke='#333333'
                      className='icon__path'
                    />
                    <path
                      d='M10.5 13C12.8333 14.1667 18.9 15.7 24.5 12.5'
                      stroke='#333333'
                      className='icon__path'
                    />
                  </svg>
                  polo
                </h4>
              </div>
            </div>
          </div>
        </div>
        <div className='account--body__product__form__fabric'>
          <div className='account--body__product__form__group'>
            <label htmlFor='fabric'>fabric</label>
            <input type='text' required placeholder='fabric' name='fabric' />
          </div>
          <div className='account--body__product__form__group'>
            <label htmlFor='fabricFeatures'>fabric features </label>
            <div className='account--body__product__form__fabricfeatures'>
              <div className='account--body__product__form__fabricfeatures__feature'>
                <input type='checkbox' name='stretch' />
                <label
                  htmlFor='stretch'
                  className='account--body__product__form__fabricfeatures__feature__label'
                >
                  <svg
                    viewBox='0 0 168 168'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M162.32 88.79C146.19 88.79 138.39 80.72 129.37 71.39C121.78 63.54 113.37 54.84 99.44 51.84C108.11 43.22 116.68 32.84 116.68 14.6C116.68 13.1997 116.124 11.8567 115.134 10.8665C114.143 9.87629 112.8 9.32001 111.4 9.32001C110 9.32001 108.657 9.87629 107.666 10.8665C106.676 11.8567 106.12 13.1997 106.12 14.6C106.12 30.73 98.06 38.53 88.72 47.6C79.8 56.22 69.79 65.93 68.31 83.6C65.8198 81.9346 63.4778 80.0576 61.31 77.99C61.7 62.66 69.57 54.99 78.68 46.21C88.34 36.86 99.3 26.28 99.3 5.66001C99.3 4.25967 98.7437 2.91668 97.7535 1.92648C96.7633 0.936291 95.4203 0.380005 94.02 0.380005C92.6197 0.380005 91.2767 0.936291 90.2865 1.92648C89.2963 2.91668 88.74 4.25967 88.74 5.66001C88.74 21.8 80.67 29.59 71.34 38.66C63.51 46.23 54.84 54.61 51.82 68.47C43.22 59.83 32.82 51.31 14.66 51.31C13.2597 51.31 11.9167 51.8663 10.9265 52.8565C9.93628 53.8467 9.37999 55.1897 9.37999 56.59C9.37999 57.9903 9.93628 59.3333 10.9265 60.3235C11.9167 61.3137 13.2597 61.87 14.66 61.87C30.79 61.87 38.58 69.93 47.61 79.27C56.24 88.2 65.95 98.2 83.61 99.68C81.9671 102.173 80.1065 104.516 78.05 106.68C62.67 106.32 55.05 98.43 46.19 89.31C36.85 79.65 26.26 68.69 5.64999 68.69C4.24965 68.69 2.90666 69.2463 1.91647 70.2365C0.926274 71.2267 0.369995 72.5697 0.369995 73.97C0.369995 75.3704 0.926274 76.7133 1.91647 77.7035C2.90666 78.6937 4.24965 79.25 5.64999 79.25C21.78 79.25 29.58 87.32 38.6 96.65C46.18 104.49 54.6 113.18 68.48 116.18C59.78 124.83 51.14 135.18 51.14 153.53C51.14 154.93 51.6963 156.273 52.6865 157.264C53.6767 158.254 55.0196 158.81 56.42 158.81C57.8203 158.81 59.1633 158.254 60.1535 157.264C61.1437 156.273 61.7 154.93 61.7 153.53C61.7 137.4 69.76 129.6 79.1 120.53C88.1 111.87 98.1 102.14 99.53 84.36C102.018 86.0104 104.359 87.8705 106.53 89.92C106.22 105.41 98.31 113.09 89.16 121.92C79.5 131.26 68.54 141.85 68.54 162.47C68.54 163.87 69.0963 165.213 70.0865 166.204C71.0767 167.194 72.4197 167.75 73.82 167.75C75.2203 167.75 76.5633 167.194 77.5535 166.204C78.5437 165.213 79.1 163.87 79.1 162.47C79.1 146.33 87.17 138.54 96.5 129.52C104.37 121.92 113.08 113.52 116.06 99.52C124.69 108.2 135.06 116.79 153.33 116.79C154.73 116.79 156.073 116.234 157.064 115.244C158.054 114.253 158.61 112.91 158.61 111.51C158.61 110.11 158.054 108.767 157.064 107.776C156.073 106.786 154.73 106.23 153.33 106.23C137.2 106.23 129.41 98.17 120.38 88.83C111.74 79.89 102.01 69.83 84.29 68.41C85.9353 65.9161 87.7994 63.5735 89.86 61.41C105.29 61.75 112.96 69.64 121.79 78.78C131.13 88.44 141.72 99.4 162.33 99.4C163.73 99.4 165.073 98.8437 166.064 97.8535C167.054 96.8633 167.61 95.5203 167.61 94.12C167.61 92.7197 167.054 91.3767 166.064 90.3865C165.073 89.3963 163.73 88.84 162.33 88.84L162.32 88.79ZM79.83 78.69C82.9853 78.6736 86.1312 79.0362 89.2 79.77C89.2 79.77 89.2 79.86 89.2 79.9C89.2196 83.0384 88.8604 86.1677 88.13 89.22C84.9427 89.2346 81.7657 88.8585 78.67 88.1V88.1C78.6513 84.9275 79.0173 81.7644 79.76 78.68L79.83 78.69Z'
                      fill='black'
                    />
                  </svg>
                  <span> 4-way stretch</span>
                </label>
              </div>
              <div className='account--body__product__form__fabricfeatures__feature'>
                <input type='checkbox' name='breathable' />
                <label
                  htmlFor='breathable'
                  className='account--body__product__form__fabricfeatures__feature__label'
                >
                  <svg
                    viewBox='0 0 200 182'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M5.08 65.2C16.7544 65.1867 28.4179 65.9148 40 67.38V67.38L39.93 81.29C43.53 81.71 46.93 82.21 50.2 82.75L50.28 68.96C67.98 72.2 81.28 77.16 94.67 82.41V95.21C97.67 96.36 100.61 97.54 103.52 98.69C103.98 98.89 104.52 99.08 104.94 99.27V86.45C117.81 91.45 131.55 96.24 149.68 99.38L149.6 113.15C152.86 113.76 156.31 114.33 159.91 114.83V100.92C171.401 102.311 182.965 103.005 194.54 103V103C195.903 103 197.211 102.458 198.175 101.495C199.138 100.531 199.68 99.2232 199.68 97.86C199.68 96.4968 199.138 95.1894 198.175 94.2255C197.211 93.2615 195.903 92.72 194.54 92.72C182.96 92.7364 171.39 92.0216 159.9 90.58L160.09 49L165.96 54.92C166.92 55.8881 168.225 56.4351 169.589 56.4407C170.952 56.4463 172.262 55.9101 173.23 54.95C174.198 53.9899 174.745 52.6846 174.751 51.3212C174.756 49.9578 174.22 48.648 173.26 47.68L158.7 33C157.735 32.0382 156.428 31.4982 155.065 31.4982C153.702 31.4982 152.395 32.0382 151.43 33L136.71 47.6C135.794 48.5694 135.29 49.857 135.306 51.1907C135.322 52.5244 135.855 53.7998 136.794 54.7474C137.732 55.6951 139.003 56.2408 140.336 56.2693C141.669 56.2977 142.962 55.8067 143.94 54.9L149.86 49.03L149.67 89.03C131.81 85.78 118.4 80.79 104.97 75.5L105.16 30.26L111 36.1C111.96 37.0681 113.265 37.6151 114.629 37.6207C115.992 37.6263 117.302 37.0901 118.27 36.13C119.238 35.1699 119.785 33.8646 119.791 32.5012C119.796 31.1378 119.26 29.8281 118.3 28.86L103.7 14.14C103.225 13.6597 102.66 13.2782 102.037 13.0173C101.414 12.7564 100.745 12.6214 100.07 12.62V12.62C99.3983 12.6183 98.7328 12.749 98.1117 13.0046C97.4905 13.2603 96.9258 13.6359 96.45 14.11L81.72 28.71C80.752 29.6701 80.205 30.9754 80.1993 32.3388C80.1937 33.7022 80.7299 35.012 81.69 35.98C82.6501 36.9481 83.9554 37.4951 85.3188 37.5007C86.6822 37.5063 87.992 36.9701 88.96 36.01L94.87 30.15L94.68 71.4C81.89 66.4 68.24 61.67 50.29 58.55L50.48 17.7L56.33 23.6C56.8054 24.0793 57.3705 24.4603 57.9931 24.7213C58.6158 24.9822 59.2837 25.1179 59.9588 25.1207C60.6339 25.1235 61.3029 24.9933 61.9276 24.7375C62.5524 24.4817 63.1207 24.1054 63.6 23.63C64.0793 23.1546 64.4603 22.5895 64.7212 21.9669C64.9822 21.3442 65.1179 20.6763 65.1207 20.0012C65.1235 19.3261 64.9932 18.6571 64.7375 18.0324C64.4817 17.4076 64.1054 16.8393 63.63 16.36L49 1.66002C48.0347 0.698238 46.7276 0.158203 45.365 0.158203C44.0024 0.158203 42.6953 0.698238 41.73 1.66002L27 16.23C26.0839 17.1994 25.5805 18.487 25.5961 19.8207C25.6117 21.1544 26.1452 22.4298 27.0837 23.3774C28.0223 24.3251 29.2925 24.8708 30.626 24.8993C31.9595 24.9277 33.2518 24.4367 34.23 23.53L40.16 17.65L39.97 57.05C28.4007 55.6338 16.7557 54.9258 5.1 54.93V54.93C3.77732 54.9884 2.52818 55.5549 1.61286 56.5115C0.697547 57.4681 0.186661 58.741 0.186661 60.065C0.186661 61.389 0.697547 62.6619 1.61286 63.6185C2.52818 64.5751 3.77732 65.1416 5.1 65.2H5.08Z'
                      fill='black'
                    />
                    <path
                      d='M198.46 129C197.519 128.082 196.254 127.572 194.94 127.58C183.198 127.581 171.468 126.839 159.82 125.36C156.22 124.9 152.82 124.36 149.51 123.75C131.69 120.45 118.31 115.43 104.81 110.1C103.89 109.76 102.97 109.41 102.05 109.03C99.56 108.03 97.05 107.03 94.54 106.03C84.2735 101.934 73.7348 98.5554 63 95.92C58.94 94.92 54.68 94.08 50.12 93.31C46.86 92.73 43.45 92.24 39.85 91.78C28.435 90.4485 16.9524 89.7807 5.45999 89.78C4.51086 89.7711 3.57966 90.0387 2.77999 90.55C2.03326 90.9996 1.41532 91.6345 0.986078 92.3931C0.556835 93.1517 0.330843 94.0084 0.329996 94.88C0.324627 96.2416 0.857684 97.5502 1.813 98.5205C2.76831 99.4908 4.06843 100.044 5.42999 100.06C16.9223 100.061 28.4038 100.766 39.81 102.17L39.62 145.44C39.6146 146.802 40.1477 148.11 41.103 149.081C42.0583 150.051 43.3584 150.604 44.72 150.62V150.62C46.0815 150.617 47.3863 150.075 48.3481 149.111C49.3098 148.147 49.85 146.841 49.85 145.48L50.04 103.7C67.79 106.92 81.09 111.83 94.43 117.08L94.28 157.94C94.272 158.614 94.3982 159.283 94.6512 159.907C94.9042 160.532 95.2789 161.1 95.7535 161.578C96.2282 162.056 96.7932 162.436 97.4158 162.693C98.0384 162.951 98.7061 163.083 99.38 163.08V163.08C100.732 163.07 102.026 162.53 102.985 161.577C103.944 160.623 104.492 159.332 104.51 157.98L104.67 121.1C117.55 126.1 131.27 130.99 149.4 134.17L149.21 176.72C149.257 178.049 149.816 179.308 150.769 180.236C151.722 181.163 152.997 181.686 154.327 181.696C155.656 181.707 156.939 181.203 157.906 180.291C158.874 179.379 159.452 178.128 159.52 176.8L159.68 135.71C171.343 137.134 183.081 137.849 194.83 137.85C196.191 137.85 197.495 137.31 198.457 136.347C199.42 135.385 199.96 134.081 199.96 132.72C199.988 132.029 199.869 131.34 199.611 130.698C199.352 130.057 198.96 129.478 198.46 129V129Z'
                      fill='black'
                    />
                  </svg>
                  <span> breathable</span>
                </label>
              </div>
              <div className='account--body__product__form__fabricfeatures__feature'>
                <input type='checkbox' name='durable' />
                <label
                  htmlFor='durable'
                  className='account--body__product__form__fabricfeatures__feature__label'
                >
                  <svg
                    viewBox='0 0 218 207'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M55.0289 206.211C27.5289 206.511 4.96889 185.731 0.878891 160.911C-2.41111 140.941 3.5689 123.981 18.2589 110.231C30.8189 98.4712 43.5389 86.8812 56.5789 75.6512C67.9489 65.8612 81.2389 60.9312 96.1989 61.8612C116.649 63.1312 132.119 72.8312 142.029 90.9612C144.249 95.0212 143.759 96.7312 140.369 99.8112C131.549 107.811 118.239 106.931 110.409 99.2112C100.429 89.3912 86.8489 89.3112 76.1289 98.7912C63.5089 109.951 51.0589 121.291 38.6489 132.691C23.8289 146.301 29.8689 168.941 47.2889 174.661C56.7089 177.751 65.2189 175.511 72.5689 168.971C79.2689 163.011 85.9489 157.031 92.4689 150.881C94.9489 148.541 97.3689 147.761 100.649 148.931C109.779 152.181 119.209 153.551 128.909 152.881C130.349 152.781 131.799 152.861 133.249 152.841C133.949 152.831 134.249 153.321 134.549 153.821C134.949 154.491 134.339 154.701 133.979 155.001C121.359 165.171 109.849 176.581 97.6789 187.251C92.9589 191.391 88.3989 195.701 82.8889 198.871C75.8389 202.931 65.2789 206.561 55.0289 206.211Z'
                      fill='black'
                    />
                    <path
                      d='M217.939 55.3212C217.929 70.9212 212.829 83.0712 202.769 93.0212C190.389 105.261 177.549 117.011 164.249 128.251C159.329 132.401 154.479 136.591 148.599 139.391C142.279 142.401 135.709 144.211 128.689 144.681C114.539 145.621 101.899 141.691 90.6389 133.241C84.3089 128.491 79.3589 122.501 75.7289 115.461C73.8389 111.801 74.1689 110.071 77.1089 107.181C85.5889 98.8412 98.7889 98.8812 107.289 107.161C113.079 112.801 119.899 115.531 128.139 114.291C133.949 113.411 138.739 110.611 142.969 106.781C155.079 95.8412 167.109 84.8112 179.169 73.8112C183.099 70.2212 186.079 66.0412 187.079 60.7112C189.379 48.5212 183.199 34.8512 169.079 31.3512C159.709 29.0312 151.739 31.4712 144.749 37.8712C138.199 43.8712 131.589 49.8012 125.029 55.7912C122.789 57.8312 120.569 58.6412 117.419 57.3512C109.729 54.2012 101.559 53.2712 93.2989 53.1312C90.7089 53.0912 88.1189 53.4012 85.5189 53.5212C84.7389 53.5612 83.8189 53.6912 83.4389 52.7712C83.0389 51.7912 84.0689 51.5912 84.5689 51.1912C91.7589 45.3612 98.2989 38.8312 105.229 32.7112C113.779 25.1712 121.829 17.0512 131.039 10.2812C141.509 2.57121 153.339 -0.998795 166.249 0.241205C180.209 1.59121 192.659 6.83121 202.689 16.9212C210.689 24.9712 214.999 34.9212 216.969 45.9712C217.619 49.4912 218.099 53.0712 217.939 55.3212Z'
                      fill='black'
                    />
                  </svg>
                  <span> durable</span>
                </label>
              </div>
              <div className='account--body__product__form__fabricfeatures__feature'>
                <input type='checkbox' name='lightweight' />
                <label
                  htmlFor='lightweight'
                  className='account--body__product__form__fabricfeatures__feature__label'
                >
                  <svg
                    viewBox='0 0 263 157'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M53 98.59C60.21 94.93 67.21 91.2 74.37 87.79C93.48 78.68 113.38 71.51 133.3 64.44C153.9 57.12 174.63 50.14 194.74 41.5C209.2 35.28 223.34 28.42 235.97 18.93C241.38 14.86 246.31 10.14 251.34 5.58001C253.83 3.32001 256.39 2.58001 259.11 3.83001C261.76 5.05001 263.28 7.64001 262.69 10.9C259.44 29 254.75 46.61 244.6 62.31C237.1 73.91 227.84 83.99 218.04 93.63C216.45 95.2 214.46 95.51 212.33 95.5C204.49 95.48 196.66 95.5 188.82 95.49C185.36 95.48 181.89 95.5 178.44 95.39C176.03 95.32 174.33 94.02 173.38 91.83C172.4 89.58 172.71 87.42 174.25 85.51C175.46 84.01 177.07 83.35 179.04 83.36C189.06 83.4 199.09 83.35 209.11 83.41C210.51 83.42 211.46 82.97 212.43 82C222.24 72.09 231.43 61.7 238.06 49.31C241.91 42.12 244.67 34.53 246.82 26.42C246.43 26.57 246.22 26.6 246.07 26.72C232.36 37.26 217.11 45.08 201.34 51.94C181.33 60.65 160.68 67.69 140.13 74.97C119.8 82.17 99.43 89.29 79.98 98.69C71.15 102.96 62.66 107.92 54.02 112.57C53.5 112.85 53.02 113.23 52.21 113.77C54.67 114.9 56.86 115.94 59.09 116.91C73.15 123.04 87.7 127.54 102.87 129.88C123.79 133.1 144.35 132.11 164.26 124.22C172.95 120.78 180.94 116.13 188.35 110.45C190.83 108.55 193.5 108.38 195.78 109.88C199.39 112.25 199.66 117.35 195.98 119.88C190.3 123.8 184.59 127.77 178.52 131.01C163.64 138.97 147.56 142.78 130.74 143.58C111.36 144.5 92.57 141.32 74.14 135.55C63.01 132.07 52.27 127.63 41.96 122.17C41.14 121.74 40.61 121.76 39.88 122.33C28.89 130.93 19.31 140.82 11.96 152.77C9.89 156.14 6.25 157.14 3.24 155.22C0.21 153.29 -0.450001 149.68 1.63 146.3C10.3 132.19 21.74 120.67 34.9 110.75C35.77 110.09 36.52 108.96 36.82 107.91C43.27 85.79 54.33 66.29 70.06 49.49C90.8 27.35 116.5 13.82 145.7 6.53001C160.53 2.83001 175.6 0.810009 190.87 0.610009C200.14 0.490009 209.43 0.840012 218.7 1.05001C222.1 1.13001 224.52 3.84001 224.47 7.27001C224.43 10.57 221.93 13.15 218.55 13.1C212.91 13.02 207.27 12.75 201.62 12.64C190.19 12.43 178.82 13.17 167.5 14.75C154.18 16.61 141.19 19.74 128.67 24.65C96.85 37.14 72.89 58.39 57.3 88.9C55.84 91.76 54.62 94.74 53.3 97.66C53.19 97.94 53.12 98.24 53 98.59Z'
                      fill='black'
                    />
                  </svg>
                  <span> lightweight</span>
                </label>
              </div>
              <div className='account--body__product__form__fabricfeatures__feature'>
                <input type='checkbox' name='naturalSoftness' />
                <label
                  htmlFor='naturalSoftness'
                  className='account--body__product__form__fabricfeatures__feature__label'
                >
                  <svg
                    viewBox='0 0 260 239'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M251.9 127.87C243.93 111.23 231.53 98.87 215.16 90.48C213.55 89.65 213.01 88.8 213.19 87C214.8 70.82 211.77 55.5 203.61 41.47C190.8 19.43 171.37 6.42002 146.49 1.77002C131.43 -1.03998 116.52 0.340016 102.06 5.68002C87.18 11.17 74.84 20.14 65.18 32.71C58.59 41.28 53.99 50.84 51.52 61.41C49.65 69.42 48.71 77.48 49.77 85.67C49.97 87.26 49.12 87.78 47.95 88.31C35.78 93.88 25.41 101.78 17.15 112.37C7.29 125.02 1.72 139.35 0.839995 155.36C0.119995 168.38 2.56 180.83 8.31 192.61C12.74 201.68 18.61 209.67 26.05 216.42C36.32 225.74 48.16 232.23 61.69 235.61C75.32 239.02 88.95 239.1 102.63 236.06C104.26 235.7 105.85 235.18 107.74 234.66C108.66 234.34 121.99 230.56 128.6 226.57C130.75 225.27 132.36 226.49 132.55 226.6C133.71 227.24 132.83 226.69 133.97 227.37C142.7 232.51 152.07 235.99 162.02 237.7C170.8 239.21 179.66 239.41 188.55 238.17C200.14 236.55 211.01 232.94 220.92 226.76C243.03 212.96 256.07 193.19 258.88 167.17C260.36 153.5 257.86 140.31 251.9 127.87ZM119.91 212.62C104.78 220.79 86.05 215.4 77.69 200.47C75.86 197.21 75.95 197.03 79.31 195.44C83.76 193.33 88.46 192.42 94.25 192.23C105.7 192.84 115.19 198.07 121.01 209.27C122.03 211.25 121.92 211.53 119.91 212.62ZM131.17 187.23C130.35 187.87 129.69 188.14 128.79 187.38C121.91 181.61 117.91 174.43 117.87 164.51C117.97 156.17 121.78 148.9 128.74 143.16C129.63 142.43 130.26 142.55 131.11 143.2C145.39 154.11 145.42 176.13 131.17 187.23ZM161.83 215.79C154.51 218.23 147.22 217.94 140.08 214.93C138.13 214.11 137.88 213.57 138.63 211.58C142.33 201.8 149.3 195.56 159.36 192.87C162.13 192.13 165.04 191.92 167.89 191.46C172.23 191.72 176.3 192.69 180.24 194.36C181.37 194.84 181.59 195.43 181.21 196.61C178.05 206.36 171.41 212.6 161.83 215.79ZM243.32 176.6C238.33 194.4 227.41 207.54 211.43 216.51C200.91 222.41 189.53 225.32 177.43 225.27C176.8 225.27 176.17 225.18 175 225.1C175.85 224.42 176.26 224.03 176.72 223.73C189.07 215.58 195.22 203.89 196.25 189.34C196.3 188.67 195.79 187.69 195.23 187.29C183.57 178.98 170.72 176.32 156.72 179.36C155.56 179.61 154.43 180.02 152.84 180.48C153.29 178.87 153.65 177.65 153.97 176.43C157.98 160.91 154.25 147.42 143.28 135.87C139.71 132.11 135.4 129.33 130.82 126.97C130.36 126.73 129.59 126.66 129.15 126.88C119.52 131.84 112 138.89 107.62 148.97C103.71 157.97 103.2 167.19 105.88 176.61C106.23 177.85 106.57 179.1 107.01 180.66C99.65 178.74 92.68 178.03 85.57 179.26C76.37 180.86 68.5 185.07 61.68 191.33C61.23 191.74 61.04 192.77 61.16 193.42C63.58 206.47 70.29 216.62 81.71 223.55C81.86 223.64 82 223.76 82.13 223.87C82.17 223.9 82.17 223.98 82.29 224.33C81.8 224.42 81.34 224.6 80.89 224.58C56.79 223.47 37.56 213.43 24.23 193.08C15.29 179.43 12.55 164.33 15.39 148.33C17.89 134.24 24.81 122.49 35.28 112.8C42.98 105.67 51.93 100.69 61.91 97.52C64.94 96.56 64.89 96.54 64.54 93.35C63.98 88.13 62.93 82.89 63.07 77.68C63.52 60.12 70.46 45.29 83.08 33.11C89.47 26.95 96.89 22.38 105.09 19.1C117.15 14.27 129.65 13.04 142.46 14.93C155.38 16.84 166.89 21.99 176.86 30.39C187.59 39.44 194.84 50.73 198.2 64.47C200.56 74.12 200.39 83.71 198.32 93.38C197.21 98.55 196.64 97.39 201.6 99.31C218.48 105.83 231.43 116.8 239.33 133.17C246.01 147.07 247.52 161.63 243.32 176.6Z'
                      fill='black'
                    />
                  </svg>
                  <span> Natural Softness</span>
                </label>
              </div>
              <div className='account--body__product__form__fabricfeatures__feature'>
                <input type='checkbox' name='colorAndFitRetention' />
                <label
                  htmlFor='colorAndFitRetention'
                  className='account--body__product__form__fabricfeatures__feature__label'
                >
                  <svg
                    viewBox='0 0 188 172'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M140.79 117.04C141.834 117.04 142.68 116.194 142.68 115.15C142.68 114.106 141.834 113.26 140.79 113.26C139.746 113.26 138.9 114.106 138.9 115.15C138.9 116.194 139.746 117.04 140.79 117.04Z'
                      fill='black'
                    />
                    <path
                      d='M134.04 117.04C135.084 117.04 135.93 116.194 135.93 115.15C135.93 114.106 135.084 113.26 134.04 113.26C132.996 113.26 132.15 114.106 132.15 115.15C132.15 116.194 132.996 117.04 134.04 117.04Z'
                      fill='black'
                    />
                    <path
                      d='M140.79 130.55C141.834 130.55 142.68 129.704 142.68 128.66C142.68 127.616 141.834 126.77 140.79 126.77C139.746 126.77 138.9 127.616 138.9 128.66C138.9 129.704 139.746 130.55 140.79 130.55Z'
                      fill='black'
                    />
                    <path
                      d='M134.04 130.55C135.084 130.55 135.93 129.704 135.93 128.66C135.93 127.616 135.084 126.77 134.04 126.77C132.996 126.77 132.15 127.616 132.15 128.66C132.15 129.704 132.996 130.55 134.04 130.55Z'
                      fill='black'
                    />
                    <path
                      d='M144.17 123.79C145.214 123.79 146.06 122.944 146.06 121.9C146.06 120.856 145.214 120.01 144.17 120.01C143.126 120.01 142.28 120.856 142.28 121.9C142.28 122.944 143.126 123.79 144.17 123.79Z'
                      fill='black'
                    />
                    <path
                      d='M137.42 123.79C138.464 123.79 139.31 122.944 139.31 121.9C139.31 120.856 138.464 120.01 137.42 120.01C136.376 120.01 135.53 120.856 135.53 121.9C135.53 122.944 136.376 123.79 137.42 123.79Z'
                      fill='black'
                    />
                    <path
                      d='M130.66 123.79C131.704 123.79 132.55 122.944 132.55 121.9C132.55 120.856 131.704 120.01 130.66 120.01C129.616 120.01 128.77 120.856 128.77 121.9C128.77 122.944 129.616 123.79 130.66 123.79Z'
                      fill='black'
                    />
                    <path
                      d='M140.79 117.04C141.834 117.04 142.68 116.194 142.68 115.15C142.68 114.106 141.834 113.26 140.79 113.26C139.746 113.26 138.9 114.106 138.9 115.15C138.9 116.194 139.746 117.04 140.79 117.04Z'
                      fill='black'
                    />
                    <path
                      d='M134.04 117.04C135.084 117.04 135.93 116.194 135.93 115.15C135.93 114.106 135.084 113.26 134.04 113.26C132.996 113.26 132.15 114.106 132.15 115.15C132.15 116.194 132.996 117.04 134.04 117.04Z'
                      fill='black'
                    />
                    <path
                      d='M140.79 144.05C141.834 144.05 142.68 143.204 142.68 142.16C142.68 141.116 141.834 140.27 140.79 140.27C139.746 140.27 138.9 141.116 138.9 142.16C138.9 143.204 139.746 144.05 140.79 144.05Z'
                      fill='black'
                    />
                    <path
                      d='M134.04 144.05C135.084 144.05 135.93 143.204 135.93 142.16C135.93 141.116 135.084 140.27 134.04 140.27C132.996 140.27 132.15 141.116 132.15 142.16C132.15 143.204 132.996 144.05 134.04 144.05Z'
                      fill='black'
                    />
                    <path
                      d='M144.17 137.3C145.214 137.3 146.06 136.454 146.06 135.41C146.06 134.366 145.214 133.52 144.17 133.52C143.126 133.52 142.28 134.366 142.28 135.41C142.28 136.454 143.126 137.3 144.17 137.3Z'
                      fill='black'
                    />
                    <path
                      d='M137.42 137.3C138.464 137.3 139.31 136.454 139.31 135.41C139.31 134.366 138.464 133.52 137.42 133.52C136.376 133.52 135.53 134.366 135.53 135.41C135.53 136.454 136.376 137.3 137.42 137.3Z'
                      fill='black'
                    />
                    <path
                      d='M130.66 137.3C131.704 137.3 132.55 136.454 132.55 135.41C132.55 134.366 131.704 133.52 130.66 133.52C129.616 133.52 128.77 134.366 128.77 135.41C128.77 136.454 129.616 137.3 130.66 137.3Z'
                      fill='black'
                    />
                    <path
                      d='M140.79 130.55C141.834 130.55 142.68 129.704 142.68 128.66C142.68 127.616 141.834 126.77 140.79 126.77C139.746 126.77 138.9 127.616 138.9 128.66C138.9 129.704 139.746 130.55 140.79 130.55Z'
                      fill='black'
                    />
                    <path
                      d='M134.04 130.55C135.084 130.55 135.93 129.704 135.93 128.66C135.93 127.616 135.084 126.77 134.04 126.77C132.996 126.77 132.15 127.616 132.15 128.66C132.15 129.704 132.996 130.55 134.04 130.55Z'
                      fill='black'
                    />
                    <path
                      d='M140.79 157.56C141.834 157.56 142.68 156.714 142.68 155.67C142.68 154.626 141.834 153.78 140.79 153.78C139.746 153.78 138.9 154.626 138.9 155.67C138.9 156.714 139.746 157.56 140.79 157.56Z'
                      fill='black'
                    />
                    <path
                      d='M134.04 157.56C135.084 157.56 135.93 156.714 135.93 155.67C135.93 154.626 135.084 153.78 134.04 153.78C132.996 153.78 132.15 154.626 132.15 155.67C132.15 156.714 132.996 157.56 134.04 157.56Z'
                      fill='black'
                    />
                    <path
                      d='M144.17 150.81C145.214 150.81 146.06 149.964 146.06 148.92C146.06 147.876 145.214 147.03 144.17 147.03C143.126 147.03 142.28 147.876 142.28 148.92C142.28 149.964 143.126 150.81 144.17 150.81Z'
                      fill='black'
                    />
                    <path
                      d='M137.42 150.81C138.464 150.81 139.31 149.964 139.31 148.92C139.31 147.876 138.464 147.03 137.42 147.03C136.376 147.03 135.53 147.876 135.53 148.92C135.53 149.964 136.376 150.81 137.42 150.81Z'
                      fill='black'
                    />
                    <path
                      d='M130.66 150.81C131.704 150.81 132.55 149.964 132.55 148.92C132.55 147.876 131.704 147.03 130.66 147.03C129.616 147.03 128.77 147.876 128.77 148.92C128.77 149.964 129.616 150.81 130.66 150.81Z'
                      fill='black'
                    />
                    <path
                      d='M140.79 144.05C141.834 144.05 142.68 143.204 142.68 142.16C142.68 141.116 141.834 140.27 140.79 140.27C139.746 140.27 138.9 141.116 138.9 142.16C138.9 143.204 139.746 144.05 140.79 144.05Z'
                      fill='black'
                    />
                    <path
                      d='M134.04 144.05C135.084 144.05 135.93 143.204 135.93 142.16C135.93 141.116 135.084 140.27 134.04 140.27C132.996 140.27 132.15 141.116 132.15 142.16C132.15 143.204 132.996 144.05 134.04 144.05Z'
                      fill='black'
                    />
                    <path
                      d='M140.79 171.06C141.834 171.06 142.68 170.214 142.68 169.17C142.68 168.126 141.834 167.28 140.79 167.28C139.746 167.28 138.9 168.126 138.9 169.17C138.9 170.214 139.746 171.06 140.79 171.06Z'
                      fill='black'
                    />
                    <path
                      d='M134.04 171.06C135.084 171.06 135.93 170.214 135.93 169.17C135.93 168.126 135.084 167.28 134.04 167.28C132.996 167.28 132.15 168.126 132.15 169.17C132.15 170.214 132.996 171.06 134.04 171.06Z'
                      fill='black'
                    />
                    <path
                      d='M144.17 164.31C145.214 164.31 146.06 163.464 146.06 162.42C146.06 161.376 145.214 160.53 144.17 160.53C143.126 160.53 142.28 161.376 142.28 162.42C142.28 163.464 143.126 164.31 144.17 164.31Z'
                      fill='black'
                    />
                    <path
                      d='M137.42 164.31C138.464 164.31 139.31 163.464 139.31 162.42C139.31 161.376 138.464 160.53 137.42 160.53C136.376 160.53 135.53 161.376 135.53 162.42C135.53 163.464 136.376 164.31 137.42 164.31Z'
                      fill='black'
                    />
                    <path
                      d='M130.66 164.31C131.704 164.31 132.55 163.464 132.55 162.42C132.55 161.376 131.704 160.53 130.66 160.53C129.616 160.53 128.77 161.376 128.77 162.42C128.77 163.464 129.616 164.31 130.66 164.31Z'
                      fill='black'
                    />
                    <path
                      d='M140.79 157.56C141.834 157.56 142.68 156.714 142.68 155.67C142.68 154.626 141.834 153.78 140.79 153.78C139.746 153.78 138.9 154.626 138.9 155.67C138.9 156.714 139.746 157.56 140.79 157.56Z'
                      fill='black'
                    />
                    <path
                      d='M134.04 157.56C135.084 157.56 135.93 156.714 135.93 155.67C135.93 154.626 135.084 153.78 134.04 153.78C132.996 153.78 132.15 154.626 132.15 155.67C132.15 156.714 132.996 157.56 134.04 157.56Z'
                      fill='black'
                    />
                    <path
                      d='M127.29 117.04C128.334 117.04 129.18 116.194 129.18 115.15C129.18 114.106 128.334 113.26 127.29 113.26C126.246 113.26 125.4 114.106 125.4 115.15C125.4 116.194 126.246 117.04 127.29 117.04Z'
                      fill='black'
                    />
                    <path
                      d='M120.53 117.04C121.574 117.04 122.42 116.194 122.42 115.15C122.42 114.106 121.574 113.26 120.53 113.26C119.486 113.26 118.64 114.106 118.64 115.15C118.64 116.194 119.486 117.04 120.53 117.04Z'
                      fill='black'
                    />
                    <path
                      d='M123.91 110.29C124.954 110.29 125.8 109.444 125.8 108.4C125.8 107.356 124.954 106.51 123.91 106.51C122.866 106.51 122.02 107.356 122.02 108.4C122.02 109.444 122.866 110.29 123.91 110.29Z'
                      fill='black'
                    />
                    <path
                      d='M117.16 110.29C118.204 110.29 119.05 109.444 119.05 108.4C119.05 107.356 118.204 106.51 117.16 106.51C116.116 106.51 115.27 107.356 115.27 108.4C115.27 109.444 116.116 110.29 117.16 110.29Z'
                      fill='black'
                    />
                    <path
                      d='M127.29 130.55C128.334 130.55 129.18 129.704 129.18 128.66C129.18 127.616 128.334 126.77 127.29 126.77C126.246 126.77 125.4 127.616 125.4 128.66C125.4 129.704 126.246 130.55 127.29 130.55Z'
                      fill='black'
                    />
                    <path
                      d='M120.53 130.55C121.574 130.55 122.42 129.704 122.42 128.66C122.42 127.616 121.574 126.77 120.53 126.77C119.486 126.77 118.64 127.616 118.64 128.66C118.64 129.704 119.486 130.55 120.53 130.55Z'
                      fill='black'
                    />
                    <path
                      d='M130.66 123.79C131.704 123.79 132.55 122.944 132.55 121.9C132.55 120.856 131.704 120.01 130.66 120.01C129.616 120.01 128.77 120.856 128.77 121.9C128.77 122.944 129.616 123.79 130.66 123.79Z'
                      fill='black'
                    />
                    <path
                      d='M123.91 123.79C124.954 123.79 125.8 122.944 125.8 121.9C125.8 120.856 124.954 120.01 123.91 120.01C122.866 120.01 122.02 120.856 122.02 121.9C122.02 122.944 122.866 123.79 123.91 123.79Z'
                      fill='black'
                    />
                    <path
                      d='M117.16 123.79C118.204 123.79 119.05 122.944 119.05 121.9C119.05 120.856 118.204 120.01 117.16 120.01C116.116 120.01 115.27 120.856 115.27 121.9C115.27 122.944 116.116 123.79 117.16 123.79Z'
                      fill='black'
                    />
                    <path
                      d='M127.29 117.04C128.334 117.04 129.18 116.194 129.18 115.15C129.18 114.106 128.334 113.26 127.29 113.26C126.246 113.26 125.4 114.106 125.4 115.15C125.4 116.194 126.246 117.04 127.29 117.04Z'
                      fill='black'
                    />
                    <path
                      d='M120.53 117.04C121.574 117.04 122.42 116.194 122.42 115.15C122.42 114.106 121.574 113.26 120.53 113.26C119.486 113.26 118.64 114.106 118.64 115.15C118.64 116.194 119.486 117.04 120.53 117.04Z'
                      fill='black'
                    />
                    <path
                      d='M127.29 144.05C128.334 144.05 129.18 143.204 129.18 142.16C129.18 141.116 128.334 140.27 127.29 140.27C126.246 140.27 125.4 141.116 125.4 142.16C125.4 143.204 126.246 144.05 127.29 144.05Z'
                      fill='black'
                    />
                    <path
                      d='M120.53 144.05C121.574 144.05 122.42 143.204 122.42 142.16C122.42 141.116 121.574 140.27 120.53 140.27C119.486 140.27 118.64 141.116 118.64 142.16C118.64 143.204 119.486 144.05 120.53 144.05Z'
                      fill='black'
                    />
                    <path
                      d='M130.66 137.3C131.704 137.3 132.55 136.454 132.55 135.41C132.55 134.366 131.704 133.52 130.66 133.52C129.616 133.52 128.77 134.366 128.77 135.41C128.77 136.454 129.616 137.3 130.66 137.3Z'
                      fill='black'
                    />
                    <path
                      d='M123.91 137.3C124.954 137.3 125.8 136.454 125.8 135.41C125.8 134.366 124.954 133.52 123.91 133.52C122.866 133.52 122.02 134.366 122.02 135.41C122.02 136.454 122.866 137.3 123.91 137.3Z'
                      fill='black'
                    />
                    <path
                      d='M117.16 137.3C118.204 137.3 119.05 136.454 119.05 135.41C119.05 134.366 118.204 133.52 117.16 133.52C116.116 133.52 115.27 134.366 115.27 135.41C115.27 136.454 116.116 137.3 117.16 137.3Z'
                      fill='black'
                    />
                    <path
                      d='M127.29 130.55C128.334 130.55 129.18 129.704 129.18 128.66C129.18 127.616 128.334 126.77 127.29 126.77C126.246 126.77 125.4 127.616 125.4 128.66C125.4 129.704 126.246 130.55 127.29 130.55Z'
                      fill='black'
                    />
                    <path
                      d='M120.53 130.55C121.574 130.55 122.42 129.704 122.42 128.66C122.42 127.616 121.574 126.77 120.53 126.77C119.486 126.77 118.64 127.616 118.64 128.66C118.64 129.704 119.486 130.55 120.53 130.55Z'
                      fill='black'
                    />
                    <path
                      d='M127.29 157.56C128.334 157.56 129.18 156.714 129.18 155.67C129.18 154.626 128.334 153.78 127.29 153.78C126.246 153.78 125.4 154.626 125.4 155.67C125.4 156.714 126.246 157.56 127.29 157.56Z'
                      fill='black'
                    />
                    <path
                      d='M120.53 157.56C121.574 157.56 122.42 156.714 122.42 155.67C122.42 154.626 121.574 153.78 120.53 153.78C119.486 153.78 118.64 154.626 118.64 155.67C118.64 156.714 119.486 157.56 120.53 157.56Z'
                      fill='black'
                    />
                    <path
                      d='M130.66 150.81C131.704 150.81 132.55 149.964 132.55 148.92C132.55 147.876 131.704 147.03 130.66 147.03C129.616 147.03 128.77 147.876 128.77 148.92C128.77 149.964 129.616 150.81 130.66 150.81Z'
                      fill='black'
                    />
                    <path
                      d='M123.91 150.81C124.954 150.81 125.8 149.964 125.8 148.92C125.8 147.876 124.954 147.03 123.91 147.03C122.866 147.03 122.02 147.876 122.02 148.92C122.02 149.964 122.866 150.81 123.91 150.81Z'
                      fill='black'
                    />
                    <path
                      d='M117.16 150.81C118.204 150.81 119.05 149.964 119.05 148.92C119.05 147.876 118.204 147.03 117.16 147.03C116.116 147.03 115.27 147.876 115.27 148.92C115.27 149.964 116.116 150.81 117.16 150.81Z'
                      fill='black'
                    />
                    <path
                      d='M127.29 144.05C128.334 144.05 129.18 143.204 129.18 142.16C129.18 141.116 128.334 140.27 127.29 140.27C126.246 140.27 125.4 141.116 125.4 142.16C125.4 143.204 126.246 144.05 127.29 144.05Z'
                      fill='black'
                    />
                    <path
                      d='M120.53 144.05C121.574 144.05 122.42 143.204 122.42 142.16C122.42 141.116 121.574 140.27 120.53 140.27C119.486 140.27 118.64 141.116 118.64 142.16C118.64 143.204 119.486 144.05 120.53 144.05Z'
                      fill='black'
                    />
                    <path
                      d='M127.29 171.06C128.334 171.06 129.18 170.214 129.18 169.17C129.18 168.126 128.334 167.28 127.29 167.28C126.246 167.28 125.4 168.126 125.4 169.17C125.4 170.214 126.246 171.06 127.29 171.06Z'
                      fill='black'
                    />
                    <path
                      d='M120.53 171.06C121.574 171.06 122.42 170.214 122.42 169.17C122.42 168.126 121.574 167.28 120.53 167.28C119.486 167.28 118.64 168.126 118.64 169.17C118.64 170.214 119.486 171.06 120.53 171.06Z'
                      fill='black'
                    />
                    <path
                      d='M130.66 164.31C131.704 164.31 132.55 163.464 132.55 162.42C132.55 161.376 131.704 160.53 130.66 160.53C129.616 160.53 128.77 161.376 128.77 162.42C128.77 163.464 129.616 164.31 130.66 164.31Z'
                      fill='black'
                    />
                    <path
                      d='M123.91 164.31C124.954 164.31 125.8 163.464 125.8 162.42C125.8 161.376 124.954 160.53 123.91 160.53C122.866 160.53 122.02 161.376 122.02 162.42C122.02 163.464 122.866 164.31 123.91 164.31Z'
                      fill='black'
                    />
                    <path
                      d='M117.16 164.31C118.204 164.31 119.05 163.464 119.05 162.42C119.05 161.376 118.204 160.53 117.16 160.53C116.116 160.53 115.27 161.376 115.27 162.42C115.27 163.464 116.116 164.31 117.16 164.31Z'
                      fill='black'
                    />
                    <path
                      d='M127.29 157.56C128.334 157.56 129.18 156.714 129.18 155.67C129.18 154.626 128.334 153.78 127.29 153.78C126.246 153.78 125.4 154.626 125.4 155.67C125.4 156.714 126.246 157.56 127.29 157.56Z'
                      fill='black'
                    />
                    <path
                      d='M120.53 157.56C121.574 157.56 122.42 156.714 122.42 155.67C122.42 154.626 121.574 153.78 120.53 153.78C119.486 153.78 118.64 154.626 118.64 155.67C118.64 156.714 119.486 157.56 120.53 157.56Z'
                      fill='black'
                    />
                    <path
                      d='M107.03 103.53C108.074 103.53 108.92 102.684 108.92 101.64C108.92 100.596 108.074 99.75 107.03 99.75C105.986 99.75 105.14 100.596 105.14 101.64C105.14 102.684 105.986 103.53 107.03 103.53Z'
                      fill='black'
                    />
                    <path
                      d='M113.78 117.04C114.824 117.04 115.67 116.194 115.67 115.15C115.67 114.106 114.824 113.26 113.78 113.26C112.736 113.26 111.89 114.106 111.89 115.15C111.89 116.194 112.736 117.04 113.78 117.04Z'
                      fill='black'
                    />
                    <path
                      d='M107.03 117.04C108.074 117.04 108.92 116.194 108.92 115.15C108.92 114.106 108.074 113.26 107.03 113.26C105.986 113.26 105.14 114.106 105.14 115.15C105.14 116.194 105.986 117.04 107.03 117.04Z'
                      fill='black'
                    />
                    <path
                      d='M117.16 110.29C118.204 110.29 119.05 109.444 119.05 108.4C119.05 107.356 118.204 106.51 117.16 106.51C116.116 106.51 115.27 107.356 115.27 108.4C115.27 109.444 116.116 110.29 117.16 110.29Z'
                      fill='black'
                    />
                    <path
                      d='M110.4 110.29C111.444 110.29 112.29 109.444 112.29 108.4C112.29 107.356 111.444 106.51 110.4 106.51C109.356 106.51 108.51 107.356 108.51 108.4C108.51 109.444 109.356 110.29 110.4 110.29Z'
                      fill='black'
                    />
                    <path
                      d='M103.65 110.29C104.694 110.29 105.54 109.444 105.54 108.4C105.54 107.356 104.694 106.51 103.65 106.51C102.606 106.51 101.76 107.356 101.76 108.4C101.76 109.444 102.606 110.29 103.65 110.29Z'
                      fill='black'
                    />
                    <path
                      d='M107.03 103.53C108.074 103.53 108.92 102.684 108.92 101.64C108.92 100.596 108.074 99.75 107.03 99.75C105.986 99.75 105.14 100.596 105.14 101.64C105.14 102.684 105.986 103.53 107.03 103.53Z'
                      fill='black'
                    />
                    <path
                      d='M113.78 130.55C114.824 130.55 115.67 129.704 115.67 128.66C115.67 127.616 114.824 126.77 113.78 126.77C112.736 126.77 111.89 127.616 111.89 128.66C111.89 129.704 112.736 130.55 113.78 130.55Z'
                      fill='black'
                    />
                    <path
                      d='M107.03 130.55C108.074 130.55 108.92 129.704 108.92 128.66C108.92 127.616 108.074 126.77 107.03 126.77C105.986 126.77 105.14 127.616 105.14 128.66C105.14 129.704 105.986 130.55 107.03 130.55Z'
                      fill='black'
                    />
                    <path
                      d='M117.16 123.79C118.204 123.79 119.05 122.944 119.05 121.9C119.05 120.856 118.204 120.01 117.16 120.01C116.116 120.01 115.27 120.856 115.27 121.9C115.27 122.944 116.116 123.79 117.16 123.79Z'
                      fill='black'
                    />
                    <path
                      d='M110.4 123.79C111.444 123.79 112.29 122.944 112.29 121.9C112.29 120.856 111.444 120.01 110.4 120.01C109.356 120.01 108.51 120.856 108.51 121.9C108.51 122.944 109.356 123.79 110.4 123.79Z'
                      fill='black'
                    />
                    <path
                      d='M103.65 123.79C104.694 123.79 105.54 122.944 105.54 121.9C105.54 120.856 104.694 120.01 103.65 120.01C102.606 120.01 101.76 120.856 101.76 121.9C101.76 122.944 102.606 123.79 103.65 123.79Z'
                      fill='black'
                    />
                    <path
                      d='M113.78 117.04C114.824 117.04 115.67 116.194 115.67 115.15C115.67 114.106 114.824 113.26 113.78 113.26C112.736 113.26 111.89 114.106 111.89 115.15C111.89 116.194 112.736 117.04 113.78 117.04Z'
                      fill='black'
                    />
                    <path
                      d='M107.03 117.04C108.074 117.04 108.92 116.194 108.92 115.15C108.92 114.106 108.074 113.26 107.03 113.26C105.986 113.26 105.14 114.106 105.14 115.15C105.14 116.194 105.986 117.04 107.03 117.04Z'
                      fill='black'
                    />
                    <path
                      d='M113.78 144.05C114.824 144.05 115.67 143.204 115.67 142.16C115.67 141.116 114.824 140.27 113.78 140.27C112.736 140.27 111.89 141.116 111.89 142.16C111.89 143.204 112.736 144.05 113.78 144.05Z'
                      fill='black'
                    />
                    <path
                      d='M107.03 144.05C108.074 144.05 108.92 143.204 108.92 142.16C108.92 141.116 108.074 140.27 107.03 140.27C105.986 140.27 105.14 141.116 105.14 142.16C105.14 143.204 105.986 144.05 107.03 144.05Z'
                      fill='black'
                    />
                    <path
                      d='M117.16 137.3C118.204 137.3 119.05 136.454 119.05 135.41C119.05 134.366 118.204 133.52 117.16 133.52C116.116 133.52 115.27 134.366 115.27 135.41C115.27 136.454 116.116 137.3 117.16 137.3Z'
                      fill='black'
                    />
                    <path
                      d='M110.4 137.3C111.444 137.3 112.29 136.454 112.29 135.41C112.29 134.366 111.444 133.52 110.4 133.52C109.356 133.52 108.51 134.366 108.51 135.41C108.51 136.454 109.356 137.3 110.4 137.3Z'
                      fill='black'
                    />
                    <path
                      d='M103.65 137.3C104.694 137.3 105.54 136.454 105.54 135.41C105.54 134.366 104.694 133.52 103.65 133.52C102.606 133.52 101.76 134.366 101.76 135.41C101.76 136.454 102.606 137.3 103.65 137.3Z'
                      fill='black'
                    />
                    <path
                      d='M113.78 130.55C114.824 130.55 115.67 129.704 115.67 128.66C115.67 127.616 114.824 126.77 113.78 126.77C112.736 126.77 111.89 127.616 111.89 128.66C111.89 129.704 112.736 130.55 113.78 130.55Z'
                      fill='black'
                    />
                    <path
                      d='M107.03 130.55C108.074 130.55 108.92 129.704 108.92 128.66C108.92 127.616 108.074 126.77 107.03 126.77C105.986 126.77 105.14 127.616 105.14 128.66C105.14 129.704 105.986 130.55 107.03 130.55Z'
                      fill='black'
                    />
                    <path
                      d='M113.78 157.56C114.824 157.56 115.67 156.714 115.67 155.67C115.67 154.626 114.824 153.78 113.78 153.78C112.736 153.78 111.89 154.626 111.89 155.67C111.89 156.714 112.736 157.56 113.78 157.56Z'
                      fill='black'
                    />
                    <path
                      d='M107.03 157.56C108.074 157.56 108.92 156.714 108.92 155.67C108.92 154.626 108.074 153.78 107.03 153.78C105.986 153.78 105.14 154.626 105.14 155.67C105.14 156.714 105.986 157.56 107.03 157.56Z'
                      fill='black'
                    />
                    <path
                      d='M117.16 150.81C118.204 150.81 119.05 149.964 119.05 148.92C119.05 147.876 118.204 147.03 117.16 147.03C116.116 147.03 115.27 147.876 115.27 148.92C115.27 149.964 116.116 150.81 117.16 150.81Z'
                      fill='black'
                    />
                    <path
                      d='M110.4 150.81C111.444 150.81 112.29 149.964 112.29 148.92C112.29 147.876 111.444 147.03 110.4 147.03C109.356 147.03 108.51 147.876 108.51 148.92C108.51 149.964 109.356 150.81 110.4 150.81Z'
                      fill='black'
                    />
                    <path
                      d='M103.65 150.81C104.694 150.81 105.54 149.964 105.54 148.92C105.54 147.876 104.694 147.03 103.65 147.03C102.606 147.03 101.76 147.876 101.76 148.92C101.76 149.964 102.606 150.81 103.65 150.81Z'
                      fill='black'
                    />
                    <path
                      d='M113.78 144.05C114.824 144.05 115.67 143.204 115.67 142.16C115.67 141.116 114.824 140.27 113.78 140.27C112.736 140.27 111.89 141.116 111.89 142.16C111.89 143.204 112.736 144.05 113.78 144.05Z'
                      fill='black'
                    />
                    <path
                      d='M107.03 144.05C108.074 144.05 108.92 143.204 108.92 142.16C108.92 141.116 108.074 140.27 107.03 140.27C105.986 140.27 105.14 141.116 105.14 142.16C105.14 143.204 105.986 144.05 107.03 144.05Z'
                      fill='black'
                    />
                    <path
                      d='M113.78 171.06C114.824 171.06 115.67 170.214 115.67 169.17C115.67 168.126 114.824 167.28 113.78 167.28C112.736 167.28 111.89 168.126 111.89 169.17C111.89 170.214 112.736 171.06 113.78 171.06Z'
                      fill='black'
                    />
                    <path
                      d='M107.03 171.06C108.074 171.06 108.92 170.214 108.92 169.17C108.92 168.126 108.074 167.28 107.03 167.28C105.986 167.28 105.14 168.126 105.14 169.17C105.14 170.214 105.986 171.06 107.03 171.06Z'
                      fill='black'
                    />
                    <path
                      d='M117.16 164.31C118.204 164.31 119.05 163.464 119.05 162.42C119.05 161.376 118.204 160.53 117.16 160.53C116.116 160.53 115.27 161.376 115.27 162.42C115.27 163.464 116.116 164.31 117.16 164.31Z'
                      fill='black'
                    />
                    <path
                      d='M110.4 164.31C111.444 164.31 112.29 163.464 112.29 162.42C112.29 161.376 111.444 160.53 110.4 160.53C109.356 160.53 108.51 161.376 108.51 162.42C108.51 163.464 109.356 164.31 110.4 164.31Z'
                      fill='black'
                    />
                    <path
                      d='M103.65 164.31C104.694 164.31 105.54 163.464 105.54 162.42C105.54 161.376 104.694 160.53 103.65 160.53C102.606 160.53 101.76 161.376 101.76 162.42C101.76 163.464 102.606 164.31 103.65 164.31Z'
                      fill='black'
                    />
                    <path
                      d='M113.78 157.56C114.824 157.56 115.67 156.714 115.67 155.67C115.67 154.626 114.824 153.78 113.78 153.78C112.736 153.78 111.89 154.626 111.89 155.67C111.89 156.714 112.736 157.56 113.78 157.56Z'
                      fill='black'
                    />
                    <path
                      d='M107.03 157.56C108.074 157.56 108.92 156.714 108.92 155.67C108.92 154.626 108.074 153.78 107.03 153.78C105.986 153.78 105.14 154.626 105.14 155.67C105.14 156.714 105.986 157.56 107.03 157.56Z'
                      fill='black'
                    />
                    <path
                      d='M100.27 103.53C101.314 103.53 102.16 102.684 102.16 101.64C102.16 100.596 101.314 99.75 100.27 99.75C99.2262 99.75 98.38 100.596 98.38 101.64C98.38 102.684 99.2262 103.53 100.27 103.53Z'
                      fill='black'
                    />
                    <path
                      d='M93.52 103.53C94.5638 103.53 95.41 102.684 95.41 101.64C95.41 100.596 94.5638 99.75 93.52 99.75C92.4762 99.75 91.63 100.596 91.63 101.64C91.63 102.684 92.4762 103.53 93.52 103.53Z'
                      fill='black'
                    />
                    <path
                      d='M96.9 96.78C97.9438 96.78 98.79 95.9338 98.79 94.89C98.79 93.8462 97.9438 93 96.9 93C95.8562 93 95.01 93.8462 95.01 94.89C95.01 95.9338 95.8562 96.78 96.9 96.78Z'
                      fill='black'
                    />
                    <path
                      d='M90.14 96.78C91.1838 96.78 92.03 95.9338 92.03 94.89C92.03 93.8462 91.1838 93 90.14 93C89.0962 93 88.25 93.8462 88.25 94.89C88.25 95.9338 89.0962 96.78 90.14 96.78Z'
                      fill='black'
                    />
                    <path
                      d='M100.27 117.04C101.314 117.04 102.16 116.194 102.16 115.15C102.16 114.106 101.314 113.26 100.27 113.26C99.2262 113.26 98.38 114.106 98.38 115.15C98.38 116.194 99.2262 117.04 100.27 117.04Z'
                      fill='black'
                    />
                    <path
                      d='M93.52 117.04C94.5638 117.04 95.41 116.194 95.41 115.15C95.41 114.106 94.5638 113.26 93.52 113.26C92.4762 113.26 91.63 114.106 91.63 115.15C91.63 116.194 92.4762 117.04 93.52 117.04Z'
                      fill='black'
                    />
                    <path
                      d='M103.65 110.29C104.694 110.29 105.54 109.444 105.54 108.4C105.54 107.356 104.694 106.51 103.65 106.51C102.606 106.51 101.76 107.356 101.76 108.4C101.76 109.444 102.606 110.29 103.65 110.29Z'
                      fill='black'
                    />
                    <path
                      d='M96.9 110.29C97.9438 110.29 98.79 109.444 98.79 108.4C98.79 107.356 97.9438 106.51 96.9 106.51C95.8562 106.51 95.01 107.356 95.01 108.4C95.01 109.444 95.8562 110.29 96.9 110.29Z'
                      fill='black'
                    />
                    <path
                      d='M90.14 110.29C91.1838 110.29 92.03 109.444 92.03 108.4C92.03 107.356 91.1838 106.51 90.14 106.51C89.0962 106.51 88.25 107.356 88.25 108.4C88.25 109.444 89.0962 110.29 90.14 110.29Z'
                      fill='black'
                    />
                    <path
                      d='M100.27 103.53C101.314 103.53 102.16 102.684 102.16 101.64C102.16 100.596 101.314 99.75 100.27 99.75C99.2262 99.75 98.38 100.596 98.38 101.64C98.38 102.684 99.2262 103.53 100.27 103.53Z'
                      fill='black'
                    />
                    <path
                      d='M93.52 103.53C94.5638 103.53 95.41 102.684 95.41 101.64C95.41 100.596 94.5638 99.75 93.52 99.75C92.4762 99.75 91.63 100.596 91.63 101.64C91.63 102.684 92.4762 103.53 93.52 103.53Z'
                      fill='black'
                    />
                    <path
                      d='M100.27 130.55C101.314 130.55 102.16 129.704 102.16 128.66C102.16 127.616 101.314 126.77 100.27 126.77C99.2262 126.77 98.38 127.616 98.38 128.66C98.38 129.704 99.2262 130.55 100.27 130.55Z'
                      fill='black'
                    />
                    <path
                      d='M93.52 130.55C94.5638 130.55 95.41 129.704 95.41 128.66C95.41 127.616 94.5638 126.77 93.52 126.77C92.4762 126.77 91.63 127.616 91.63 128.66C91.63 129.704 92.4762 130.55 93.52 130.55Z'
                      fill='black'
                    />
                    <path
                      d='M103.65 123.79C104.694 123.79 105.54 122.944 105.54 121.9C105.54 120.856 104.694 120.01 103.65 120.01C102.606 120.01 101.76 120.856 101.76 121.9C101.76 122.944 102.606 123.79 103.65 123.79Z'
                      fill='black'
                    />
                    <path
                      d='M96.9 123.79C97.9438 123.79 98.79 122.944 98.79 121.9C98.79 120.856 97.9438 120.01 96.9 120.01C95.8562 120.01 95.01 120.856 95.01 121.9C95.01 122.944 95.8562 123.79 96.9 123.79Z'
                      fill='black'
                    />
                    <path
                      d='M90.14 123.79C91.1838 123.79 92.03 122.944 92.03 121.9C92.03 120.856 91.1838 120.01 90.14 120.01C89.0962 120.01 88.25 120.856 88.25 121.9C88.25 122.944 89.0962 123.79 90.14 123.79Z'
                      fill='black'
                    />
                    <path
                      d='M100.27 117.04C101.314 117.04 102.16 116.194 102.16 115.15C102.16 114.106 101.314 113.26 100.27 113.26C99.2262 113.26 98.38 114.106 98.38 115.15C98.38 116.194 99.2262 117.04 100.27 117.04Z'
                      fill='black'
                    />
                    <path
                      d='M93.52 117.04C94.5638 117.04 95.41 116.194 95.41 115.15C95.41 114.106 94.5638 113.26 93.52 113.26C92.4762 113.26 91.63 114.106 91.63 115.15C91.63 116.194 92.4762 117.04 93.52 117.04Z'
                      fill='black'
                    />
                    <path
                      d='M100.27 144.05C101.314 144.05 102.16 143.204 102.16 142.16C102.16 141.116 101.314 140.27 100.27 140.27C99.2262 140.27 98.38 141.116 98.38 142.16C98.38 143.204 99.2262 144.05 100.27 144.05Z'
                      fill='black'
                    />
                    <path
                      d='M93.52 144.05C94.5638 144.05 95.41 143.204 95.41 142.16C95.41 141.116 94.5638 140.27 93.52 140.27C92.4762 140.27 91.63 141.116 91.63 142.16C91.63 143.204 92.4762 144.05 93.52 144.05Z'
                      fill='black'
                    />
                    <path
                      d='M103.65 137.3C104.694 137.3 105.54 136.454 105.54 135.41C105.54 134.366 104.694 133.52 103.65 133.52C102.606 133.52 101.76 134.366 101.76 135.41C101.76 136.454 102.606 137.3 103.65 137.3Z'
                      fill='black'
                    />
                    <path
                      d='M96.9 137.3C97.9438 137.3 98.79 136.454 98.79 135.41C98.79 134.366 97.9438 133.52 96.9 133.52C95.8562 133.52 95.01 134.366 95.01 135.41C95.01 136.454 95.8562 137.3 96.9 137.3Z'
                      fill='black'
                    />
                    <path
                      d='M90.14 137.3C91.1838 137.3 92.03 136.454 92.03 135.41C92.03 134.366 91.1838 133.52 90.14 133.52C89.0962 133.52 88.25 134.366 88.25 135.41C88.25 136.454 89.0962 137.3 90.14 137.3Z'
                      fill='black'
                    />
                    <path
                      d='M100.27 130.55C101.314 130.55 102.16 129.704 102.16 128.66C102.16 127.616 101.314 126.77 100.27 126.77C99.2262 126.77 98.38 127.616 98.38 128.66C98.38 129.704 99.2262 130.55 100.27 130.55Z'
                      fill='black'
                    />
                    <path
                      d='M93.52 130.55C94.5638 130.55 95.41 129.704 95.41 128.66C95.41 127.616 94.5638 126.77 93.52 126.77C92.4762 126.77 91.63 127.616 91.63 128.66C91.63 129.704 92.4762 130.55 93.52 130.55Z'
                      fill='black'
                    />
                    <path
                      d='M100.27 157.56C101.314 157.56 102.16 156.714 102.16 155.67C102.16 154.626 101.314 153.78 100.27 153.78C99.2262 153.78 98.38 154.626 98.38 155.67C98.38 156.714 99.2262 157.56 100.27 157.56Z'
                      fill='black'
                    />
                    <path
                      d='M93.52 157.56C94.5638 157.56 95.41 156.714 95.41 155.67C95.41 154.626 94.5638 153.78 93.52 153.78C92.4762 153.78 91.63 154.626 91.63 155.67C91.63 156.714 92.4762 157.56 93.52 157.56Z'
                      fill='black'
                    />
                    <path
                      d='M103.65 150.81C104.694 150.81 105.54 149.964 105.54 148.92C105.54 147.876 104.694 147.03 103.65 147.03C102.606 147.03 101.76 147.876 101.76 148.92C101.76 149.964 102.606 150.81 103.65 150.81Z'
                      fill='black'
                    />
                    <path
                      d='M96.9 150.81C97.9438 150.81 98.79 149.964 98.79 148.92C98.79 147.876 97.9438 147.03 96.9 147.03C95.8562 147.03 95.01 147.876 95.01 148.92C95.01 149.964 95.8562 150.81 96.9 150.81Z'
                      fill='black'
                    />
                    <path
                      d='M90.14 150.81C91.1838 150.81 92.03 149.964 92.03 148.92C92.03 147.876 91.1838 147.03 90.14 147.03C89.0962 147.03 88.25 147.876 88.25 148.92C88.25 149.964 89.0962 150.81 90.14 150.81Z'
                      fill='black'
                    />
                    <path
                      d='M100.27 144.05C101.314 144.05 102.16 143.204 102.16 142.16C102.16 141.116 101.314 140.27 100.27 140.27C99.2262 140.27 98.38 141.116 98.38 142.16C98.38 143.204 99.2262 144.05 100.27 144.05Z'
                      fill='black'
                    />
                    <path
                      d='M93.52 144.05C94.5638 144.05 95.41 143.204 95.41 142.16C95.41 141.116 94.5638 140.27 93.52 140.27C92.4762 140.27 91.63 141.116 91.63 142.16C91.63 143.204 92.4762 144.05 93.52 144.05Z'
                      fill='black'
                    />
                    <path
                      d='M100.27 171.06C101.314 171.06 102.16 170.214 102.16 169.17C102.16 168.126 101.314 167.28 100.27 167.28C99.2262 167.28 98.38 168.126 98.38 169.17C98.38 170.214 99.2262 171.06 100.27 171.06Z'
                      fill='black'
                    />
                    <path
                      d='M93.52 171.06C94.5638 171.06 95.41 170.214 95.41 169.17C95.41 168.126 94.5638 167.28 93.52 167.28C92.4762 167.28 91.63 168.126 91.63 169.17C91.63 170.214 92.4762 171.06 93.52 171.06Z'
                      fill='black'
                    />
                    <path
                      d='M103.65 164.31C104.694 164.31 105.54 163.464 105.54 162.42C105.54 161.376 104.694 160.53 103.65 160.53C102.606 160.53 101.76 161.376 101.76 162.42C101.76 163.464 102.606 164.31 103.65 164.31Z'
                      fill='black'
                    />
                    <path
                      d='M96.9 164.31C97.9438 164.31 98.79 163.464 98.79 162.42C98.79 161.376 97.9438 160.53 96.9 160.53C95.8562 160.53 95.01 161.376 95.01 162.42C95.01 163.464 95.8562 164.31 96.9 164.31Z'
                      fill='black'
                    />
                    <path
                      d='M90.14 164.31C91.1838 164.31 92.03 163.464 92.03 162.42C92.03 161.376 91.1838 160.53 90.14 160.53C89.0962 160.53 88.25 161.376 88.25 162.42C88.25 163.464 89.0962 164.31 90.14 164.31Z'
                      fill='black'
                    />
                    <path
                      d='M100.27 157.56C101.314 157.56 102.16 156.714 102.16 155.67C102.16 154.626 101.314 153.78 100.27 153.78C99.2262 153.78 98.38 154.626 98.38 155.67C98.38 156.714 99.2262 157.56 100.27 157.56Z'
                      fill='black'
                    />
                    <path
                      d='M93.52 157.56C94.5638 157.56 95.41 156.714 95.41 155.67C95.41 154.626 94.5638 153.78 93.52 153.78C92.4762 153.78 91.63 154.626 91.63 155.67C91.63 156.714 92.4762 157.56 93.52 157.56Z'
                      fill='black'
                    />
                    <path
                      d='M80.01 90.03C81.0538 90.03 81.9 89.1838 81.9 88.14C81.9 87.0962 81.0538 86.25 80.01 86.25C78.9662 86.25 78.12 87.0962 78.12 88.14C78.12 89.1838 78.9662 90.03 80.01 90.03Z'
                      fill='black'
                    />
                    <path
                      d='M86.77 103.53C87.8138 103.53 88.66 102.684 88.66 101.64C88.66 100.596 87.8138 99.75 86.77 99.75C85.7262 99.75 84.88 100.596 84.88 101.64C84.88 102.684 85.7262 103.53 86.77 103.53Z'
                      fill='black'
                    />
                    <path
                      d='M80.01 103.53C81.0538 103.53 81.9 102.684 81.9 101.64C81.9 100.596 81.0538 99.75 80.01 99.75C78.9662 99.75 78.12 100.596 78.12 101.64C78.12 102.684 78.9662 103.53 80.01 103.53Z'
                      fill='black'
                    />
                    <path
                      d='M90.14 96.78C91.1838 96.78 92.03 95.9338 92.03 94.89C92.03 93.8462 91.1838 93 90.14 93C89.0962 93 88.25 93.8462 88.25 94.89C88.25 95.9338 89.0962 96.78 90.14 96.78Z'
                      fill='black'
                    />
                    <path
                      d='M83.39 96.78C84.4338 96.78 85.28 95.9338 85.28 94.89C85.28 93.8462 84.4338 93 83.39 93C82.3462 93 81.5 93.8462 81.5 94.89C81.5 95.9338 82.3462 96.78 83.39 96.78Z'
                      fill='black'
                    />
                    <path
                      d='M76.64 96.78C77.6838 96.78 78.53 95.9338 78.53 94.89C78.53 93.8462 77.6838 93 76.64 93C75.5962 93 74.75 93.8462 74.75 94.89C74.75 95.9338 75.5962 96.78 76.64 96.78Z'
                      fill='black'
                    />
                    <path
                      d='M80.01 90.03C81.0538 90.03 81.9 89.1838 81.9 88.14C81.9 87.0962 81.0538 86.25 80.01 86.25C78.9662 86.25 78.12 87.0962 78.12 88.14C78.12 89.1838 78.9662 90.03 80.01 90.03Z'
                      fill='black'
                    />
                    <path
                      d='M86.77 117.04C87.8138 117.04 88.66 116.194 88.66 115.15C88.66 114.106 87.8138 113.26 86.77 113.26C85.7262 113.26 84.88 114.106 84.88 115.15C84.88 116.194 85.7262 117.04 86.77 117.04Z'
                      fill='black'
                    />
                    <path
                      d='M80.01 117.04C81.0538 117.04 81.9 116.194 81.9 115.15C81.9 114.106 81.0538 113.26 80.01 113.26C78.9662 113.26 78.12 114.106 78.12 115.15C78.12 116.194 78.9662 117.04 80.01 117.04Z'
                      fill='black'
                    />
                    <path
                      d='M90.14 110.29C91.1838 110.29 92.03 109.444 92.03 108.4C92.03 107.356 91.1838 106.51 90.14 106.51C89.0962 106.51 88.25 107.356 88.25 108.4C88.25 109.444 89.0962 110.29 90.14 110.29Z'
                      fill='black'
                    />
                    <path
                      d='M83.39 110.29C84.4338 110.29 85.28 109.444 85.28 108.4C85.28 107.356 84.4338 106.51 83.39 106.51C82.3462 106.51 81.5 107.356 81.5 108.4C81.5 109.444 82.3462 110.29 83.39 110.29Z'
                      fill='black'
                    />
                    <path
                      d='M76.64 110.29C77.6838 110.29 78.53 109.444 78.53 108.4C78.53 107.356 77.6838 106.51 76.64 106.51C75.5962 106.51 74.75 107.356 74.75 108.4C74.75 109.444 75.5962 110.29 76.64 110.29Z'
                      fill='black'
                    />
                    <path
                      d='M86.77 103.53C87.8138 103.53 88.66 102.684 88.66 101.64C88.66 100.596 87.8138 99.75 86.77 99.75C85.7262 99.75 84.88 100.596 84.88 101.64C84.88 102.684 85.7262 103.53 86.77 103.53Z'
                      fill='black'
                    />
                    <path
                      d='M80.01 103.53C81.0538 103.53 81.9 102.684 81.9 101.64C81.9 100.596 81.0538 99.75 80.01 99.75C78.9662 99.75 78.12 100.596 78.12 101.64C78.12 102.684 78.9662 103.53 80.01 103.53Z'
                      fill='black'
                    />
                    <path
                      d='M86.77 130.55C87.8138 130.55 88.66 129.704 88.66 128.66C88.66 127.616 87.8138 126.77 86.77 126.77C85.7262 126.77 84.88 127.616 84.88 128.66C84.88 129.704 85.7262 130.55 86.77 130.55Z'
                      fill='black'
                    />
                    <path
                      d='M80.01 130.55C81.0538 130.55 81.9 129.704 81.9 128.66C81.9 127.616 81.0538 126.77 80.01 126.77C78.9662 126.77 78.12 127.616 78.12 128.66C78.12 129.704 78.9662 130.55 80.01 130.55Z'
                      fill='black'
                    />
                    <path
                      d='M90.14 123.79C91.1838 123.79 92.03 122.944 92.03 121.9C92.03 120.856 91.1838 120.01 90.14 120.01C89.0962 120.01 88.25 120.856 88.25 121.9C88.25 122.944 89.0962 123.79 90.14 123.79Z'
                      fill='black'
                    />
                    <path
                      d='M83.39 123.79C84.4338 123.79 85.28 122.944 85.28 121.9C85.28 120.856 84.4338 120.01 83.39 120.01C82.3462 120.01 81.5 120.856 81.5 121.9C81.5 122.944 82.3462 123.79 83.39 123.79Z'
                      fill='black'
                    />
                    <path
                      d='M76.64 123.79C77.6838 123.79 78.53 122.944 78.53 121.9C78.53 120.856 77.6838 120.01 76.64 120.01C75.5962 120.01 74.75 120.856 74.75 121.9C74.75 122.944 75.5962 123.79 76.64 123.79Z'
                      fill='black'
                    />
                    <path
                      d='M86.77 117.04C87.8138 117.04 88.66 116.194 88.66 115.15C88.66 114.106 87.8138 113.26 86.77 113.26C85.7262 113.26 84.88 114.106 84.88 115.15C84.88 116.194 85.7262 117.04 86.77 117.04Z'
                      fill='black'
                    />
                    <path
                      d='M80.01 117.04C81.0538 117.04 81.9 116.194 81.9 115.15C81.9 114.106 81.0538 113.26 80.01 113.26C78.9662 113.26 78.12 114.106 78.12 115.15C78.12 116.194 78.9662 117.04 80.01 117.04Z'
                      fill='black'
                    />
                    <path
                      d='M86.77 144.05C87.8138 144.05 88.66 143.204 88.66 142.16C88.66 141.116 87.8138 140.27 86.77 140.27C85.7262 140.27 84.88 141.116 84.88 142.16C84.88 143.204 85.7262 144.05 86.77 144.05Z'
                      fill='black'
                    />
                    <path
                      d='M80.01 144.05C81.0538 144.05 81.9 143.204 81.9 142.16C81.9 141.116 81.0538 140.27 80.01 140.27C78.9662 140.27 78.12 141.116 78.12 142.16C78.12 143.204 78.9662 144.05 80.01 144.05Z'
                      fill='black'
                    />
                    <path
                      d='M90.14 137.3C91.1838 137.3 92.03 136.454 92.03 135.41C92.03 134.366 91.1838 133.52 90.14 133.52C89.0962 133.52 88.25 134.366 88.25 135.41C88.25 136.454 89.0962 137.3 90.14 137.3Z'
                      fill='black'
                    />
                    <path
                      d='M83.39 137.3C84.4338 137.3 85.28 136.454 85.28 135.41C85.28 134.366 84.4338 133.52 83.39 133.52C82.3462 133.52 81.5 134.366 81.5 135.41C81.5 136.454 82.3462 137.3 83.39 137.3Z'
                      fill='black'
                    />
                    <path
                      d='M76.64 137.3C77.6838 137.3 78.53 136.454 78.53 135.41C78.53 134.366 77.6838 133.52 76.64 133.52C75.5962 133.52 74.75 134.366 74.75 135.41C74.75 136.454 75.5962 137.3 76.64 137.3Z'
                      fill='black'
                    />
                    <path
                      d='M86.77 130.55C87.8138 130.55 88.66 129.704 88.66 128.66C88.66 127.616 87.8138 126.77 86.77 126.77C85.7262 126.77 84.88 127.616 84.88 128.66C84.88 129.704 85.7262 130.55 86.77 130.55Z'
                      fill='black'
                    />
                    <path
                      d='M80.01 130.55C81.0538 130.55 81.9 129.704 81.9 128.66C81.9 127.616 81.0538 126.77 80.01 126.77C78.9662 126.77 78.12 127.616 78.12 128.66C78.12 129.704 78.9662 130.55 80.01 130.55Z'
                      fill='black'
                    />
                    <path
                      d='M86.77 157.56C87.8138 157.56 88.66 156.714 88.66 155.67C88.66 154.626 87.8138 153.78 86.77 153.78C85.7262 153.78 84.88 154.626 84.88 155.67C84.88 156.714 85.7262 157.56 86.77 157.56Z'
                      fill='black'
                    />
                    <path
                      d='M80.01 157.56C81.0538 157.56 81.9 156.714 81.9 155.67C81.9 154.626 81.0538 153.78 80.01 153.78C78.9662 153.78 78.12 154.626 78.12 155.67C78.12 156.714 78.9662 157.56 80.01 157.56Z'
                      fill='black'
                    />
                    <path
                      d='M90.14 150.81C91.1838 150.81 92.03 149.964 92.03 148.92C92.03 147.876 91.1838 147.03 90.14 147.03C89.0962 147.03 88.25 147.876 88.25 148.92C88.25 149.964 89.0962 150.81 90.14 150.81Z'
                      fill='black'
                    />
                    <path
                      d='M83.39 150.81C84.4338 150.81 85.28 149.964 85.28 148.92C85.28 147.876 84.4338 147.03 83.39 147.03C82.3462 147.03 81.5 147.876 81.5 148.92C81.5 149.964 82.3462 150.81 83.39 150.81Z'
                      fill='black'
                    />
                    <path
                      d='M76.64 150.81C77.6838 150.81 78.53 149.964 78.53 148.92C78.53 147.876 77.6838 147.03 76.64 147.03C75.5962 147.03 74.75 147.876 74.75 148.92C74.75 149.964 75.5962 150.81 76.64 150.81Z'
                      fill='black'
                    />
                    <path
                      d='M86.77 144.05C87.8138 144.05 88.66 143.204 88.66 142.16C88.66 141.116 87.8138 140.27 86.77 140.27C85.7262 140.27 84.88 141.116 84.88 142.16C84.88 143.204 85.7262 144.05 86.77 144.05Z'
                      fill='black'
                    />
                    <path
                      d='M80.01 144.05C81.0538 144.05 81.9 143.204 81.9 142.16C81.9 141.116 81.0538 140.27 80.01 140.27C78.9662 140.27 78.12 141.116 78.12 142.16C78.12 143.204 78.9662 144.05 80.01 144.05Z'
                      fill='black'
                    />
                    <path
                      d='M86.77 171.06C87.8138 171.06 88.66 170.214 88.66 169.17C88.66 168.126 87.8138 167.28 86.77 167.28C85.7262 167.28 84.88 168.126 84.88 169.17C84.88 170.214 85.7262 171.06 86.77 171.06Z'
                      fill='black'
                    />
                    <path
                      d='M80.01 171.06C81.0538 171.06 81.9 170.214 81.9 169.17C81.9 168.126 81.0538 167.28 80.01 167.28C78.9662 167.28 78.12 168.126 78.12 169.17C78.12 170.214 78.9662 171.06 80.01 171.06Z'
                      fill='black'
                    />
                    <path
                      d='M90.14 164.31C91.1838 164.31 92.03 163.464 92.03 162.42C92.03 161.376 91.1838 160.53 90.14 160.53C89.0962 160.53 88.25 161.376 88.25 162.42C88.25 163.464 89.0962 164.31 90.14 164.31Z'
                      fill='black'
                    />
                    <path
                      d='M83.39 164.31C84.4338 164.31 85.28 163.464 85.28 162.42C85.28 161.376 84.4338 160.53 83.39 160.53C82.3462 160.53 81.5 161.376 81.5 162.42C81.5 163.464 82.3462 164.31 83.39 164.31Z'
                      fill='black'
                    />
                    <path
                      d='M76.64 164.31C77.6838 164.31 78.53 163.464 78.53 162.42C78.53 161.376 77.6838 160.53 76.64 160.53C75.5962 160.53 74.75 161.376 74.75 162.42C74.75 163.464 75.5962 164.31 76.64 164.31Z'
                      fill='black'
                    />
                    <path
                      d='M86.77 157.56C87.8138 157.56 88.66 156.714 88.66 155.67C88.66 154.626 87.8138 153.78 86.77 153.78C85.7262 153.78 84.88 154.626 84.88 155.67C84.88 156.714 85.7262 157.56 86.77 157.56Z'
                      fill='black'
                    />
                    <path
                      d='M80.01 157.56C81.0538 157.56 81.9 156.714 81.9 155.67C81.9 154.626 81.0538 153.78 80.01 153.78C78.9662 153.78 78.12 154.626 78.12 155.67C78.12 156.714 78.9662 157.56 80.01 157.56Z'
                      fill='black'
                    />
                    <path
                      d='M73.26 90.03C74.3038 90.03 75.15 89.1838 75.15 88.14C75.15 87.0962 74.3038 86.25 73.26 86.25C72.2162 86.25 71.37 87.0962 71.37 88.14C71.37 89.1838 72.2162 90.03 73.26 90.03Z'
                      fill='black'
                    />
                    <path
                      d='M66.51 90.03C67.5538 90.03 68.4 89.1838 68.4 88.14C68.4 87.0962 67.5538 86.25 66.51 86.25C65.4662 86.25 64.62 87.0962 64.62 88.14C64.62 89.1838 65.4662 90.03 66.51 90.03Z'
                      fill='black'
                    />
                    <path
                      d='M73.26 103.53C74.3038 103.53 75.15 102.684 75.15 101.64C75.15 100.596 74.3038 99.75 73.26 99.75C72.2162 99.75 71.37 100.596 71.37 101.64C71.37 102.684 72.2162 103.53 73.26 103.53Z'
                      fill='black'
                    />
                    <path
                      d='M66.51 103.53C67.5538 103.53 68.4 102.684 68.4 101.64C68.4 100.596 67.5538 99.75 66.51 99.75C65.4662 99.75 64.62 100.596 64.62 101.64C64.62 102.684 65.4662 103.53 66.51 103.53Z'
                      fill='black'
                    />
                    <path
                      d='M76.64 96.78C77.6838 96.78 78.53 95.9338 78.53 94.89C78.53 93.8462 77.6838 93 76.64 93C75.5962 93 74.75 93.8462 74.75 94.89C74.75 95.9338 75.5962 96.78 76.64 96.78Z'
                      fill='black'
                    />
                    <path
                      d='M69.88 96.78C70.9238 96.78 71.77 95.9338 71.77 94.89C71.77 93.8462 70.9238 93 69.88 93C68.8362 93 67.99 93.8462 67.99 94.89C67.99 95.9338 68.8362 96.78 69.88 96.78Z'
                      fill='black'
                    />
                    <path
                      d='M63.13 96.78C64.1738 96.78 65.02 95.9338 65.02 94.89C65.02 93.8462 64.1738 93 63.13 93C62.0862 93 61.24 93.8462 61.24 94.89C61.24 95.9338 62.0862 96.78 63.13 96.78Z'
                      fill='black'
                    />
                    <path
                      d='M73.26 90.03C74.3038 90.03 75.15 89.1838 75.15 88.14C75.15 87.0962 74.3038 86.25 73.26 86.25C72.2162 86.25 71.37 87.0962 71.37 88.14C71.37 89.1838 72.2162 90.03 73.26 90.03Z'
                      fill='black'
                    />
                    <path
                      d='M66.51 90.03C67.5538 90.03 68.4 89.1838 68.4 88.14C68.4 87.0962 67.5538 86.25 66.51 86.25C65.4662 86.25 64.62 87.0962 64.62 88.14C64.62 89.1838 65.4662 90.03 66.51 90.03Z'
                      fill='black'
                    />
                    <path
                      d='M73.26 117.04C74.3038 117.04 75.15 116.194 75.15 115.15C75.15 114.106 74.3038 113.26 73.26 113.26C72.2162 113.26 71.37 114.106 71.37 115.15C71.37 116.194 72.2162 117.04 73.26 117.04Z'
                      fill='black'
                    />
                    <path
                      d='M66.51 117.04C67.5538 117.04 68.4 116.194 68.4 115.15C68.4 114.106 67.5538 113.26 66.51 113.26C65.4662 113.26 64.62 114.106 64.62 115.15C64.62 116.194 65.4662 117.04 66.51 117.04Z'
                      fill='black'
                    />
                    <path
                      d='M76.64 110.29C77.6838 110.29 78.53 109.444 78.53 108.4C78.53 107.356 77.6838 106.51 76.64 106.51C75.5962 106.51 74.75 107.356 74.75 108.4C74.75 109.444 75.5962 110.29 76.64 110.29Z'
                      fill='black'
                    />
                    <path
                      d='M69.88 110.29C70.9238 110.29 71.77 109.444 71.77 108.4C71.77 107.356 70.9238 106.51 69.88 106.51C68.8362 106.51 67.99 107.356 67.99 108.4C67.99 109.444 68.8362 110.29 69.88 110.29Z'
                      fill='black'
                    />
                    <path
                      d='M63.13 110.29C64.1738 110.29 65.02 109.444 65.02 108.4C65.02 107.356 64.1738 106.51 63.13 106.51C62.0862 106.51 61.24 107.356 61.24 108.4C61.24 109.444 62.0862 110.29 63.13 110.29Z'
                      fill='black'
                    />
                    <path
                      d='M73.26 103.53C74.3038 103.53 75.15 102.684 75.15 101.64C75.15 100.596 74.3038 99.75 73.26 99.75C72.2162 99.75 71.37 100.596 71.37 101.64C71.37 102.684 72.2162 103.53 73.26 103.53Z'
                      fill='black'
                    />
                    <path
                      d='M66.51 103.53C67.5538 103.53 68.4 102.684 68.4 101.64C68.4 100.596 67.5538 99.75 66.51 99.75C65.4662 99.75 64.62 100.596 64.62 101.64C64.62 102.684 65.4662 103.53 66.51 103.53Z'
                      fill='black'
                    />
                    <path
                      d='M73.26 130.55C74.3038 130.55 75.15 129.704 75.15 128.66C75.15 127.616 74.3038 126.77 73.26 126.77C72.2162 126.77 71.37 127.616 71.37 128.66C71.37 129.704 72.2162 130.55 73.26 130.55Z'
                      fill='black'
                    />
                    <path
                      d='M66.51 130.55C67.5538 130.55 68.4 129.704 68.4 128.66C68.4 127.616 67.5538 126.77 66.51 126.77C65.4662 126.77 64.62 127.616 64.62 128.66C64.62 129.704 65.4662 130.55 66.51 130.55Z'
                      fill='black'
                    />
                    <path
                      d='M76.64 123.79C77.6838 123.79 78.53 122.944 78.53 121.9C78.53 120.856 77.6838 120.01 76.64 120.01C75.5962 120.01 74.75 120.856 74.75 121.9C74.75 122.944 75.5962 123.79 76.64 123.79Z'
                      fill='black'
                    />
                    <path
                      d='M69.88 123.79C70.9238 123.79 71.77 122.944 71.77 121.9C71.77 120.856 70.9238 120.01 69.88 120.01C68.8362 120.01 67.99 120.856 67.99 121.9C67.99 122.944 68.8362 123.79 69.88 123.79Z'
                      fill='black'
                    />
                    <path
                      d='M63.13 123.79C64.1738 123.79 65.02 122.944 65.02 121.9C65.02 120.856 64.1738 120.01 63.13 120.01C62.0862 120.01 61.24 120.856 61.24 121.9C61.24 122.944 62.0862 123.79 63.13 123.79Z'
                      fill='black'
                    />
                    <path
                      d='M73.26 117.04C74.3038 117.04 75.15 116.194 75.15 115.15C75.15 114.106 74.3038 113.26 73.26 113.26C72.2162 113.26 71.37 114.106 71.37 115.15C71.37 116.194 72.2162 117.04 73.26 117.04Z'
                      fill='black'
                    />
                    <path
                      d='M66.51 117.04C67.5538 117.04 68.4 116.194 68.4 115.15C68.4 114.106 67.5538 113.26 66.51 113.26C65.4662 113.26 64.62 114.106 64.62 115.15C64.62 116.194 65.4662 117.04 66.51 117.04Z'
                      fill='black'
                    />
                    <path
                      d='M73.26 144.05C74.3038 144.05 75.15 143.204 75.15 142.16C75.15 141.116 74.3038 140.27 73.26 140.27C72.2162 140.27 71.37 141.116 71.37 142.16C71.37 143.204 72.2162 144.05 73.26 144.05Z'
                      fill='black'
                    />
                    <path
                      d='M66.51 144.05C67.5538 144.05 68.4 143.204 68.4 142.16C68.4 141.116 67.5538 140.27 66.51 140.27C65.4662 140.27 64.62 141.116 64.62 142.16C64.62 143.204 65.4662 144.05 66.51 144.05Z'
                      fill='black'
                    />
                    <path
                      d='M76.64 137.3C77.6838 137.3 78.53 136.454 78.53 135.41C78.53 134.366 77.6838 133.52 76.64 133.52C75.5962 133.52 74.75 134.366 74.75 135.41C74.75 136.454 75.5962 137.3 76.64 137.3Z'
                      fill='black'
                    />
                    <path
                      d='M69.88 137.3C70.9238 137.3 71.77 136.454 71.77 135.41C71.77 134.366 70.9238 133.52 69.88 133.52C68.8362 133.52 67.99 134.366 67.99 135.41C67.99 136.454 68.8362 137.3 69.88 137.3Z'
                      fill='black'
                    />
                    <path
                      d='M63.13 137.3C64.1738 137.3 65.02 136.454 65.02 135.41C65.02 134.366 64.1738 133.52 63.13 133.52C62.0862 133.52 61.24 134.366 61.24 135.41C61.24 136.454 62.0862 137.3 63.13 137.3Z'
                      fill='black'
                    />
                    <path
                      d='M73.26 130.55C74.3038 130.55 75.15 129.704 75.15 128.66C75.15 127.616 74.3038 126.77 73.26 126.77C72.2162 126.77 71.37 127.616 71.37 128.66C71.37 129.704 72.2162 130.55 73.26 130.55Z'
                      fill='black'
                    />
                    <path
                      d='M66.51 130.55C67.5538 130.55 68.4 129.704 68.4 128.66C68.4 127.616 67.5538 126.77 66.51 126.77C65.4662 126.77 64.62 127.616 64.62 128.66C64.62 129.704 65.4662 130.55 66.51 130.55Z'
                      fill='black'
                    />
                    <path
                      d='M73.26 157.56C74.3038 157.56 75.15 156.714 75.15 155.67C75.15 154.626 74.3038 153.78 73.26 153.78C72.2162 153.78 71.37 154.626 71.37 155.67C71.37 156.714 72.2162 157.56 73.26 157.56Z'
                      fill='black'
                    />
                    <path
                      d='M66.51 157.56C67.5538 157.56 68.4 156.714 68.4 155.67C68.4 154.626 67.5538 153.78 66.51 153.78C65.4662 153.78 64.62 154.626 64.62 155.67C64.62 156.714 65.4662 157.56 66.51 157.56Z'
                      fill='black'
                    />
                    <path
                      d='M76.64 150.81C77.6838 150.81 78.53 149.964 78.53 148.92C78.53 147.876 77.6838 147.03 76.64 147.03C75.5962 147.03 74.75 147.876 74.75 148.92C74.75 149.964 75.5962 150.81 76.64 150.81Z'
                      fill='black'
                    />
                    <path
                      d='M69.88 150.81C70.9238 150.81 71.77 149.964 71.77 148.92C71.77 147.876 70.9238 147.03 69.88 147.03C68.8362 147.03 67.99 147.876 67.99 148.92C67.99 149.964 68.8362 150.81 69.88 150.81Z'
                      fill='black'
                    />
                    <path
                      d='M63.13 150.81C64.1738 150.81 65.02 149.964 65.02 148.92C65.02 147.876 64.1738 147.03 63.13 147.03C62.0862 147.03 61.24 147.876 61.24 148.92C61.24 149.964 62.0862 150.81 63.13 150.81Z'
                      fill='black'
                    />
                    <path
                      d='M73.26 144.05C74.3038 144.05 75.15 143.204 75.15 142.16C75.15 141.116 74.3038 140.27 73.26 140.27C72.2162 140.27 71.37 141.116 71.37 142.16C71.37 143.204 72.2162 144.05 73.26 144.05Z'
                      fill='black'
                    />
                    <path
                      d='M66.51 144.05C67.5538 144.05 68.4 143.204 68.4 142.16C68.4 141.116 67.5538 140.27 66.51 140.27C65.4662 140.27 64.62 141.116 64.62 142.16C64.62 143.204 65.4662 144.05 66.51 144.05Z'
                      fill='black'
                    />
                    <path
                      d='M73.26 171.06C74.3038 171.06 75.15 170.214 75.15 169.17C75.15 168.126 74.3038 167.28 73.26 167.28C72.2162 167.28 71.37 168.126 71.37 169.17C71.37 170.214 72.2162 171.06 73.26 171.06Z'
                      fill='black'
                    />
                    <path
                      d='M66.51 171.06C67.5538 171.06 68.4 170.214 68.4 169.17C68.4 168.126 67.5538 167.28 66.51 167.28C65.4662 167.28 64.62 168.126 64.62 169.17C64.62 170.214 65.4662 171.06 66.51 171.06Z'
                      fill='black'
                    />
                    <path
                      d='M76.64 164.31C77.6838 164.31 78.53 163.464 78.53 162.42C78.53 161.376 77.6838 160.53 76.64 160.53C75.5962 160.53 74.75 161.376 74.75 162.42C74.75 163.464 75.5962 164.31 76.64 164.31Z'
                      fill='black'
                    />
                    <path
                      d='M69.88 164.31C70.9238 164.31 71.77 163.464 71.77 162.42C71.77 161.376 70.9238 160.53 69.88 160.53C68.8362 160.53 67.99 161.376 67.99 162.42C67.99 163.464 68.8362 164.31 69.88 164.31Z'
                      fill='black'
                    />
                    <path
                      d='M63.13 164.31C64.1738 164.31 65.02 163.464 65.02 162.42C65.02 161.376 64.1738 160.53 63.13 160.53C62.0862 160.53 61.24 161.376 61.24 162.42C61.24 163.464 62.0862 164.31 63.13 164.31Z'
                      fill='black'
                    />
                    <path
                      d='M73.26 157.56C74.3038 157.56 75.15 156.714 75.15 155.67C75.15 154.626 74.3038 153.78 73.26 153.78C72.2162 153.78 71.37 154.626 71.37 155.67C71.37 156.714 72.2162 157.56 73.26 157.56Z'
                      fill='black'
                    />
                    <path
                      d='M66.51 157.56C67.5538 157.56 68.4 156.714 68.4 155.67C68.4 154.626 67.5538 153.78 66.51 153.78C65.4662 153.78 64.62 154.626 64.62 155.67C64.62 156.714 65.4662 157.56 66.51 157.56Z'
                      fill='black'
                    />
                    <path
                      d='M59.76 90.03C60.8038 90.03 61.65 89.1838 61.65 88.14C61.65 87.0962 60.8038 86.25 59.76 86.25C58.7162 86.25 57.87 87.0962 57.87 88.14C57.87 89.1838 58.7162 90.03 59.76 90.03Z'
                      fill='black'
                    />
                    <path
                      d='M53 90.03C54.0438 90.03 54.89 89.1838 54.89 88.14C54.89 87.0962 54.0438 86.25 53 86.25C51.9562 86.25 51.11 87.0962 51.11 88.14C51.11 89.1838 51.9562 90.03 53 90.03Z'
                      fill='black'
                    />
                    <path
                      d='M59.76 103.53C60.8038 103.53 61.65 102.684 61.65 101.64C61.65 100.596 60.8038 99.75 59.76 99.75C58.7162 99.75 57.87 100.596 57.87 101.64C57.87 102.684 58.7162 103.53 59.76 103.53Z'
                      fill='black'
                    />
                    <path
                      d='M53 103.53C54.0438 103.53 54.89 102.684 54.89 101.64C54.89 100.596 54.0438 99.75 53 99.75C51.9562 99.75 51.11 100.596 51.11 101.64C51.11 102.684 51.9562 103.53 53 103.53Z'
                      fill='black'
                    />
                    <path
                      d='M63.13 96.78C64.1738 96.78 65.02 95.9338 65.02 94.89C65.02 93.8462 64.1738 93 63.13 93C62.0862 93 61.24 93.8462 61.24 94.89C61.24 95.9338 62.0862 96.78 63.13 96.78Z'
                      fill='black'
                    />
                    <path
                      d='M56.38 96.78C57.4238 96.78 58.27 95.9338 58.27 94.89C58.27 93.8462 57.4238 93 56.38 93C55.3362 93 54.49 93.8462 54.49 94.89C54.49 95.9338 55.3362 96.78 56.38 96.78Z'
                      fill='black'
                    />
                    <path
                      d='M49.63 96.78C50.6738 96.78 51.52 95.9338 51.52 94.89C51.52 93.8462 50.6738 93 49.63 93C48.5862 93 47.74 93.8462 47.74 94.89C47.74 95.9338 48.5862 96.78 49.63 96.78Z'
                      fill='black'
                    />
                    <path
                      d='M59.76 90.03C60.8038 90.03 61.65 89.1838 61.65 88.14C61.65 87.0962 60.8038 86.25 59.76 86.25C58.7162 86.25 57.87 87.0962 57.87 88.14C57.87 89.1838 58.7162 90.03 59.76 90.03Z'
                      fill='black'
                    />
                    <path
                      d='M53 90.03C54.0438 90.03 54.89 89.1838 54.89 88.14C54.89 87.0962 54.0438 86.25 53 86.25C51.9562 86.25 51.11 87.0962 51.11 88.14C51.11 89.1838 51.9562 90.03 53 90.03Z'
                      fill='black'
                    />
                    <path
                      d='M59.76 117.04C60.8038 117.04 61.65 116.194 61.65 115.15C61.65 114.106 60.8038 113.26 59.76 113.26C58.7162 113.26 57.87 114.106 57.87 115.15C57.87 116.194 58.7162 117.04 59.76 117.04Z'
                      fill='black'
                    />
                    <path
                      d='M53 117.04C54.0438 117.04 54.89 116.194 54.89 115.15C54.89 114.106 54.0438 113.26 53 113.26C51.9562 113.26 51.11 114.106 51.11 115.15C51.11 116.194 51.9562 117.04 53 117.04Z'
                      fill='black'
                    />
                    <path
                      d='M63.13 110.29C64.1738 110.29 65.02 109.444 65.02 108.4C65.02 107.356 64.1738 106.51 63.13 106.51C62.0862 106.51 61.24 107.356 61.24 108.4C61.24 109.444 62.0862 110.29 63.13 110.29Z'
                      fill='black'
                    />
                    <path
                      d='M56.38 110.29C57.4238 110.29 58.27 109.444 58.27 108.4C58.27 107.356 57.4238 106.51 56.38 106.51C55.3362 106.51 54.49 107.356 54.49 108.4C54.49 109.444 55.3362 110.29 56.38 110.29Z'
                      fill='black'
                    />
                    <path
                      d='M49.63 110.29C50.6738 110.29 51.52 109.444 51.52 108.4C51.52 107.356 50.6738 106.51 49.63 106.51C48.5862 106.51 47.74 107.356 47.74 108.4C47.74 109.444 48.5862 110.29 49.63 110.29Z'
                      fill='black'
                    />
                    <path
                      d='M59.76 103.53C60.8038 103.53 61.65 102.684 61.65 101.64C61.65 100.596 60.8038 99.75 59.76 99.75C58.7162 99.75 57.87 100.596 57.87 101.64C57.87 102.684 58.7162 103.53 59.76 103.53Z'
                      fill='black'
                    />
                    <path
                      d='M53 103.53C54.0438 103.53 54.89 102.684 54.89 101.64C54.89 100.596 54.0438 99.75 53 99.75C51.9562 99.75 51.11 100.596 51.11 101.64C51.11 102.684 51.9562 103.53 53 103.53Z'
                      fill='black'
                    />
                    <path
                      d='M59.76 130.55C60.8038 130.55 61.65 129.704 61.65 128.66C61.65 127.616 60.8038 126.77 59.76 126.77C58.7162 126.77 57.87 127.616 57.87 128.66C57.87 129.704 58.7162 130.55 59.76 130.55Z'
                      fill='black'
                    />
                    <path
                      d='M53 130.55C54.0438 130.55 54.89 129.704 54.89 128.66C54.89 127.616 54.0438 126.77 53 126.77C51.9562 126.77 51.11 127.616 51.11 128.66C51.11 129.704 51.9562 130.55 53 130.55Z'
                      fill='black'
                    />
                    <path
                      d='M63.13 123.79C64.1738 123.79 65.02 122.944 65.02 121.9C65.02 120.856 64.1738 120.01 63.13 120.01C62.0862 120.01 61.24 120.856 61.24 121.9C61.24 122.944 62.0862 123.79 63.13 123.79Z'
                      fill='black'
                    />
                    <path
                      d='M56.38 123.79C57.4238 123.79 58.27 122.944 58.27 121.9C58.27 120.856 57.4238 120.01 56.38 120.01C55.3362 120.01 54.49 120.856 54.49 121.9C54.49 122.944 55.3362 123.79 56.38 123.79Z'
                      fill='black'
                    />
                    <path
                      d='M49.63 123.79C50.6738 123.79 51.52 122.944 51.52 121.9C51.52 120.856 50.6738 120.01 49.63 120.01C48.5862 120.01 47.74 120.856 47.74 121.9C47.74 122.944 48.5862 123.79 49.63 123.79Z'
                      fill='black'
                    />
                    <path
                      d='M59.76 117.04C60.8038 117.04 61.65 116.194 61.65 115.15C61.65 114.106 60.8038 113.26 59.76 113.26C58.7162 113.26 57.87 114.106 57.87 115.15C57.87 116.194 58.7162 117.04 59.76 117.04Z'
                      fill='black'
                    />
                    <path
                      d='M53 117.04C54.0438 117.04 54.89 116.194 54.89 115.15C54.89 114.106 54.0438 113.26 53 113.26C51.9562 113.26 51.11 114.106 51.11 115.15C51.11 116.194 51.9562 117.04 53 117.04Z'
                      fill='black'
                    />
                    <path
                      d='M59.76 144.05C60.8038 144.05 61.65 143.204 61.65 142.16C61.65 141.116 60.8038 140.27 59.76 140.27C58.7162 140.27 57.87 141.116 57.87 142.16C57.87 143.204 58.7162 144.05 59.76 144.05Z'
                      fill='black'
                    />
                    <path
                      d='M53 144.05C54.0438 144.05 54.89 143.204 54.89 142.16C54.89 141.116 54.0438 140.27 53 140.27C51.9562 140.27 51.11 141.116 51.11 142.16C51.11 143.204 51.9562 144.05 53 144.05Z'
                      fill='black'
                    />
                    <path
                      d='M63.13 137.3C64.1738 137.3 65.02 136.454 65.02 135.41C65.02 134.366 64.1738 133.52 63.13 133.52C62.0862 133.52 61.24 134.366 61.24 135.41C61.24 136.454 62.0862 137.3 63.13 137.3Z'
                      fill='black'
                    />
                    <path
                      d='M56.38 137.3C57.4238 137.3 58.27 136.454 58.27 135.41C58.27 134.366 57.4238 133.52 56.38 133.52C55.3362 133.52 54.49 134.366 54.49 135.41C54.49 136.454 55.3362 137.3 56.38 137.3Z'
                      fill='black'
                    />
                    <path
                      d='M49.63 137.3C50.6738 137.3 51.52 136.454 51.52 135.41C51.52 134.366 50.6738 133.52 49.63 133.52C48.5862 133.52 47.74 134.366 47.74 135.41C47.74 136.454 48.5862 137.3 49.63 137.3Z'
                      fill='black'
                    />
                    <path
                      d='M59.76 130.55C60.8038 130.55 61.65 129.704 61.65 128.66C61.65 127.616 60.8038 126.77 59.76 126.77C58.7162 126.77 57.87 127.616 57.87 128.66C57.87 129.704 58.7162 130.55 59.76 130.55Z'
                      fill='black'
                    />
                    <path
                      d='M53 130.55C54.0438 130.55 54.89 129.704 54.89 128.66C54.89 127.616 54.0438 126.77 53 126.77C51.9562 126.77 51.11 127.616 51.11 128.66C51.11 129.704 51.9562 130.55 53 130.55Z'
                      fill='black'
                    />
                    <path
                      d='M59.76 157.56C60.8038 157.56 61.65 156.714 61.65 155.67C61.65 154.626 60.8038 153.78 59.76 153.78C58.7162 153.78 57.87 154.626 57.87 155.67C57.87 156.714 58.7162 157.56 59.76 157.56Z'
                      fill='black'
                    />
                    <path
                      d='M53 157.56C54.0438 157.56 54.89 156.714 54.89 155.67C54.89 154.626 54.0438 153.78 53 153.78C51.9562 153.78 51.11 154.626 51.11 155.67C51.11 156.714 51.9562 157.56 53 157.56Z'
                      fill='black'
                    />
                    <path
                      d='M63.13 150.81C64.1738 150.81 65.02 149.964 65.02 148.92C65.02 147.876 64.1738 147.03 63.13 147.03C62.0862 147.03 61.24 147.876 61.24 148.92C61.24 149.964 62.0862 150.81 63.13 150.81Z'
                      fill='black'
                    />
                    <path
                      d='M56.38 150.81C57.4238 150.81 58.27 149.964 58.27 148.92C58.27 147.876 57.4238 147.03 56.38 147.03C55.3362 147.03 54.49 147.876 54.49 148.92C54.49 149.964 55.3362 150.81 56.38 150.81Z'
                      fill='black'
                    />
                    <path
                      d='M49.63 150.81C50.6738 150.81 51.52 149.964 51.52 148.92C51.52 147.876 50.6738 147.03 49.63 147.03C48.5862 147.03 47.74 147.876 47.74 148.92C47.74 149.964 48.5862 150.81 49.63 150.81Z'
                      fill='black'
                    />
                    <path
                      d='M59.76 144.05C60.8038 144.05 61.65 143.204 61.65 142.16C61.65 141.116 60.8038 140.27 59.76 140.27C58.7162 140.27 57.87 141.116 57.87 142.16C57.87 143.204 58.7162 144.05 59.76 144.05Z'
                      fill='black'
                    />
                    <path
                      d='M53 144.05C54.0438 144.05 54.89 143.204 54.89 142.16C54.89 141.116 54.0438 140.27 53 140.27C51.9562 140.27 51.11 141.116 51.11 142.16C51.11 143.204 51.9562 144.05 53 144.05Z'
                      fill='black'
                    />
                    <path
                      d='M59.76 171.06C60.8038 171.06 61.65 170.214 61.65 169.17C61.65 168.126 60.8038 167.28 59.76 167.28C58.7162 167.28 57.87 168.126 57.87 169.17C57.87 170.214 58.7162 171.06 59.76 171.06Z'
                      fill='black'
                    />
                    <path
                      d='M53 171.06C54.0438 171.06 54.89 170.214 54.89 169.17C54.89 168.126 54.0438 167.28 53 167.28C51.9562 167.28 51.11 168.126 51.11 169.17C51.11 170.214 51.9562 171.06 53 171.06Z'
                      fill='black'
                    />
                    <path
                      d='M63.13 164.31C64.1738 164.31 65.02 163.464 65.02 162.42C65.02 161.376 64.1738 160.53 63.13 160.53C62.0862 160.53 61.24 161.376 61.24 162.42C61.24 163.464 62.0862 164.31 63.13 164.31Z'
                      fill='black'
                    />
                    <path
                      d='M56.38 164.31C57.4238 164.31 58.27 163.464 58.27 162.42C58.27 161.376 57.4238 160.53 56.38 160.53C55.3362 160.53 54.49 161.376 54.49 162.42C54.49 163.464 55.3362 164.31 56.38 164.31Z'
                      fill='black'
                    />
                    <path
                      d='M49.63 164.31C50.6738 164.31 51.52 163.464 51.52 162.42C51.52 161.376 50.6738 160.53 49.63 160.53C48.5862 160.53 47.74 161.376 47.74 162.42C47.74 163.464 48.5862 164.31 49.63 164.31Z'
                      fill='black'
                    />
                    <path
                      d='M59.76 157.56C60.8038 157.56 61.65 156.714 61.65 155.67C61.65 154.626 60.8038 153.78 59.76 153.78C58.7162 153.78 57.87 154.626 57.87 155.67C57.87 156.714 58.7162 157.56 59.76 157.56Z'
                      fill='black'
                    />
                    <path
                      d='M53 157.56C54.0438 157.56 54.89 156.714 54.89 155.67C54.89 154.626 54.0438 153.78 53 153.78C51.9562 153.78 51.11 154.626 51.11 155.67C51.11 156.714 51.9562 157.56 53 157.56Z'
                      fill='black'
                    />
                    <path
                      d='M46.25 103.53C47.2938 103.53 48.14 102.684 48.14 101.64C48.14 100.596 47.2938 99.75 46.25 99.75C45.2062 99.75 44.36 100.596 44.36 101.64C44.36 102.684 45.2062 103.53 46.25 103.53Z'
                      fill='black'
                    />
                    <path
                      d='M39.5 103.53C40.5438 103.53 41.39 102.684 41.39 101.64C41.39 100.596 40.5438 99.75 39.5 99.75C38.4562 99.75 37.61 100.596 37.61 101.64C37.61 102.684 38.4562 103.53 39.5 103.53Z'
                      fill='black'
                    />
                    <path
                      d='M49.63 96.78C50.6738 96.78 51.52 95.9338 51.52 94.89C51.52 93.8462 50.6738 93 49.63 93C48.5862 93 47.74 93.8462 47.74 94.89C47.74 95.9338 48.5862 96.78 49.63 96.78Z'
                      fill='black'
                    />
                    <path
                      d='M42.87 96.78C43.9138 96.78 44.76 95.9338 44.76 94.89C44.76 93.8462 43.9138 93 42.87 93C41.8262 93 40.98 93.8462 40.98 94.89C40.98 95.9338 41.8262 96.78 42.87 96.78Z'
                      fill='black'
                    />
                    <path
                      d='M36.12 96.78C37.1638 96.78 38.01 95.9338 38.01 94.89C38.01 93.8462 37.1638 93 36.12 93C35.0762 93 34.23 93.8462 34.23 94.89C34.23 95.9338 35.0762 96.78 36.12 96.78Z'
                      fill='black'
                    />
                    <path
                      d='M46.25 90.03C47.2938 90.03 48.14 89.1838 48.14 88.14C48.14 87.0962 47.2938 86.25 46.25 86.25C45.2062 86.25 44.36 87.0962 44.36 88.14C44.36 89.1838 45.2062 90.03 46.25 90.03Z'
                      fill='black'
                    />
                    <path
                      d='M39.5 90.03C40.5438 90.03 41.39 89.1838 41.39 88.14C41.39 87.0962 40.5438 86.25 39.5 86.25C38.4562 86.25 37.61 87.0962 37.61 88.14C37.61 89.1838 38.4562 90.03 39.5 90.03Z'
                      fill='black'
                    />
                    <path
                      d='M46.25 117.04C47.2938 117.04 48.14 116.194 48.14 115.15C48.14 114.106 47.2938 113.26 46.25 113.26C45.2062 113.26 44.36 114.106 44.36 115.15C44.36 116.194 45.2062 117.04 46.25 117.04Z'
                      fill='black'
                    />
                    <path
                      d='M39.5 117.04C40.5438 117.04 41.39 116.194 41.39 115.15C41.39 114.106 40.5438 113.26 39.5 113.26C38.4562 113.26 37.61 114.106 37.61 115.15C37.61 116.194 38.4562 117.04 39.5 117.04Z'
                      fill='black'
                    />
                    <path
                      d='M49.63 110.29C50.6738 110.29 51.52 109.444 51.52 108.4C51.52 107.356 50.6738 106.51 49.63 106.51C48.5862 106.51 47.74 107.356 47.74 108.4C47.74 109.444 48.5862 110.29 49.63 110.29Z'
                      fill='black'
                    />
                    <path
                      d='M42.87 110.29C43.9138 110.29 44.76 109.444 44.76 108.4C44.76 107.356 43.9138 106.51 42.87 106.51C41.8262 106.51 40.98 107.356 40.98 108.4C40.98 109.444 41.8262 110.29 42.87 110.29Z'
                      fill='black'
                    />
                    <path
                      d='M36.12 110.29C37.1638 110.29 38.01 109.444 38.01 108.4C38.01 107.356 37.1638 106.51 36.12 106.51C35.0762 106.51 34.23 107.356 34.23 108.4C34.23 109.444 35.0762 110.29 36.12 110.29Z'
                      fill='black'
                    />
                    <path
                      d='M46.25 103.53C47.2938 103.53 48.14 102.684 48.14 101.64C48.14 100.596 47.2938 99.75 46.25 99.75C45.2062 99.75 44.36 100.596 44.36 101.64C44.36 102.684 45.2062 103.53 46.25 103.53Z'
                      fill='black'
                    />
                    <path
                      d='M39.5 103.53C40.5438 103.53 41.39 102.684 41.39 101.64C41.39 100.596 40.5438 99.75 39.5 99.75C38.4562 99.75 37.61 100.596 37.61 101.64C37.61 102.684 38.4562 103.53 39.5 103.53Z'
                      fill='black'
                    />
                    <path
                      d='M46.25 130.55C47.2938 130.55 48.14 129.704 48.14 128.66C48.14 127.616 47.2938 126.77 46.25 126.77C45.2062 126.77 44.36 127.616 44.36 128.66C44.36 129.704 45.2062 130.55 46.25 130.55Z'
                      fill='black'
                    />
                    <path
                      d='M39.5 130.55C40.5438 130.55 41.39 129.704 41.39 128.66C41.39 127.616 40.5438 126.77 39.5 126.77C38.4562 126.77 37.61 127.616 37.61 128.66C37.61 129.704 38.4562 130.55 39.5 130.55Z'
                      fill='black'
                    />
                    <path
                      d='M49.63 123.79C50.6738 123.79 51.52 122.944 51.52 121.9C51.52 120.856 50.6738 120.01 49.63 120.01C48.5862 120.01 47.74 120.856 47.74 121.9C47.74 122.944 48.5862 123.79 49.63 123.79Z'
                      fill='black'
                    />
                    <path
                      d='M42.87 123.79C43.9138 123.79 44.76 122.944 44.76 121.9C44.76 120.856 43.9138 120.01 42.87 120.01C41.8262 120.01 40.98 120.856 40.98 121.9C40.98 122.944 41.8262 123.79 42.87 123.79Z'
                      fill='black'
                    />
                    <path
                      d='M36.12 123.79C37.1638 123.79 38.01 122.944 38.01 121.9C38.01 120.856 37.1638 120.01 36.12 120.01C35.0762 120.01 34.23 120.856 34.23 121.9C34.23 122.944 35.0762 123.79 36.12 123.79Z'
                      fill='black'
                    />
                    <path
                      d='M46.25 117.04C47.2938 117.04 48.14 116.194 48.14 115.15C48.14 114.106 47.2938 113.26 46.25 113.26C45.2062 113.26 44.36 114.106 44.36 115.15C44.36 116.194 45.2062 117.04 46.25 117.04Z'
                      fill='black'
                    />
                    <path
                      d='M39.5 117.04C40.5438 117.04 41.39 116.194 41.39 115.15C41.39 114.106 40.5438 113.26 39.5 113.26C38.4562 113.26 37.61 114.106 37.61 115.15C37.61 116.194 38.4562 117.04 39.5 117.04Z'
                      fill='black'
                    />
                    <path
                      d='M46.25 144.05C47.2938 144.05 48.14 143.204 48.14 142.16C48.14 141.116 47.2938 140.27 46.25 140.27C45.2062 140.27 44.36 141.116 44.36 142.16C44.36 143.204 45.2062 144.05 46.25 144.05Z'
                      fill='black'
                    />
                    <path
                      d='M39.5 144.05C40.5438 144.05 41.39 143.204 41.39 142.16C41.39 141.116 40.5438 140.27 39.5 140.27C38.4562 140.27 37.61 141.116 37.61 142.16C37.61 143.204 38.4562 144.05 39.5 144.05Z'
                      fill='black'
                    />
                    <path
                      d='M49.63 137.3C50.6738 137.3 51.52 136.454 51.52 135.41C51.52 134.366 50.6738 133.52 49.63 133.52C48.5862 133.52 47.74 134.366 47.74 135.41C47.74 136.454 48.5862 137.3 49.63 137.3Z'
                      fill='black'
                    />
                    <path
                      d='M42.87 137.3C43.9138 137.3 44.76 136.454 44.76 135.41C44.76 134.366 43.9138 133.52 42.87 133.52C41.8262 133.52 40.98 134.366 40.98 135.41C40.98 136.454 41.8262 137.3 42.87 137.3Z'
                      fill='black'
                    />
                    <path
                      d='M36.12 137.3C37.1638 137.3 38.01 136.454 38.01 135.41C38.01 134.366 37.1638 133.52 36.12 133.52C35.0762 133.52 34.23 134.366 34.23 135.41C34.23 136.454 35.0762 137.3 36.12 137.3Z'
                      fill='black'
                    />
                    <path
                      d='M46.25 130.55C47.2938 130.55 48.14 129.704 48.14 128.66C48.14 127.616 47.2938 126.77 46.25 126.77C45.2062 126.77 44.36 127.616 44.36 128.66C44.36 129.704 45.2062 130.55 46.25 130.55Z'
                      fill='black'
                    />
                    <path
                      d='M39.5 130.55C40.5438 130.55 41.39 129.704 41.39 128.66C41.39 127.616 40.5438 126.77 39.5 126.77C38.4562 126.77 37.61 127.616 37.61 128.66C37.61 129.704 38.4562 130.55 39.5 130.55Z'
                      fill='black'
                    />
                    <path
                      d='M46.25 157.56C47.2938 157.56 48.14 156.714 48.14 155.67C48.14 154.626 47.2938 153.78 46.25 153.78C45.2062 153.78 44.36 154.626 44.36 155.67C44.36 156.714 45.2062 157.56 46.25 157.56Z'
                      fill='black'
                    />
                    <path
                      d='M39.5 157.56C40.5438 157.56 41.39 156.714 41.39 155.67C41.39 154.626 40.5438 153.78 39.5 153.78C38.4562 153.78 37.61 154.626 37.61 155.67C37.61 156.714 38.4562 157.56 39.5 157.56Z'
                      fill='black'
                    />
                    <path
                      d='M49.63 150.81C50.6738 150.81 51.52 149.964 51.52 148.92C51.52 147.876 50.6738 147.03 49.63 147.03C48.5862 147.03 47.74 147.876 47.74 148.92C47.74 149.964 48.5862 150.81 49.63 150.81Z'
                      fill='black'
                    />
                    <path
                      d='M42.87 150.81C43.9138 150.81 44.76 149.964 44.76 148.92C44.76 147.876 43.9138 147.03 42.87 147.03C41.8262 147.03 40.98 147.876 40.98 148.92C40.98 149.964 41.8262 150.81 42.87 150.81Z'
                      fill='black'
                    />
                    <path
                      d='M36.12 150.81C37.1638 150.81 38.01 149.964 38.01 148.92C38.01 147.876 37.1638 147.03 36.12 147.03C35.0762 147.03 34.23 147.876 34.23 148.92C34.23 149.964 35.0762 150.81 36.12 150.81Z'
                      fill='black'
                    />
                    <path
                      d='M46.25 144.05C47.2938 144.05 48.14 143.204 48.14 142.16C48.14 141.116 47.2938 140.27 46.25 140.27C45.2062 140.27 44.36 141.116 44.36 142.16C44.36 143.204 45.2062 144.05 46.25 144.05Z'
                      fill='black'
                    />
                    <path
                      d='M39.5 144.05C40.5438 144.05 41.39 143.204 41.39 142.16C41.39 141.116 40.5438 140.27 39.5 140.27C38.4562 140.27 37.61 141.116 37.61 142.16C37.61 143.204 38.4562 144.05 39.5 144.05Z'
                      fill='black'
                    />
                    <path
                      d='M32.74 90.03C33.7838 90.03 34.63 89.1838 34.63 88.14C34.63 87.0962 33.7838 86.25 32.74 86.25C31.6962 86.25 30.85 87.0962 30.85 88.14C30.85 89.1838 31.6962 90.03 32.74 90.03Z'
                      fill='black'
                    />
                    <path
                      d='M25.99 90.03C27.0338 90.03 27.88 89.1838 27.88 88.14C27.88 87.0962 27.0338 86.25 25.99 86.25C24.9462 86.25 24.1 87.0962 24.1 88.14C24.1 89.1838 24.9462 90.03 25.99 90.03Z'
                      fill='black'
                    />
                    <path
                      d='M36.12 83.28C37.1638 83.28 38.01 82.4338 38.01 81.39C38.01 80.3462 37.1638 79.5 36.12 79.5C35.0762 79.5 34.23 80.3462 34.23 81.39C34.23 82.4338 35.0762 83.28 36.12 83.28Z'
                      fill='black'
                    />
                    <path
                      d='M29.37 83.28C30.4138 83.28 31.26 82.4338 31.26 81.39C31.26 80.3462 30.4138 79.5 29.37 79.5C28.3262 79.5 27.48 80.3462 27.48 81.39C27.48 82.4338 28.3262 83.28 29.37 83.28Z'
                      fill='black'
                    />
                    <path
                      d='M22.61 83.28C23.6538 83.28 24.5 82.4338 24.5 81.39C24.5 80.3462 23.6538 79.5 22.61 79.5C21.5662 79.5 20.72 80.3462 20.72 81.39C20.72 82.4338 21.5662 83.28 22.61 83.28Z'
                      fill='black'
                    />
                    <path
                      d='M135.89 112.64L136.04 144.08L135.7 144.27C127.23 149.17 110.59 157.42 94.14 157.42C85.86 157.42 77.55 155.35 70.19 152.66C63.9917 150.387 58.0026 147.58 52.29 144.27C52.1835 144.212 52.08 144.149 51.98 144.08L52.25 84.08C50.83 83.74 49.41 83.43 47.92 83.16L47.65 144.34C47.6446 145.027 47.8284 145.702 48.1812 146.291C48.5339 146.88 49.0421 147.361 49.65 147.68L50.11 147.98C59.04 153.08 76.56 161.67 94.11 161.67C102.82 161.67 111.56 159.52 119.22 156.72C125.682 154.362 131.926 151.444 137.88 148C138.11 147.85 138.27 147.77 138.38 147.7C138.988 147.381 139.496 146.9 139.849 146.311C140.202 145.722 140.385 145.047 140.38 144.36L140.23 113.5C138.73 113.26 137.31 113 135.89 112.64Z'
                      fill='black'
                    />
                    <path
                      d='M182.58 96.55C168.34 96.6372 154.125 95.3546 140.13 92.72L140.03 74.54L147.43 79.0201C148.118 79.4345 148.92 79.6174 149.719 79.5418C150.518 79.4662 151.272 79.1361 151.87 78.6001L177.36 56C177.733 55.6723 178.038 55.2737 178.256 54.8273C178.474 54.381 178.601 53.8957 178.629 53.3999C178.658 52.904 178.588 52.4073 178.424 51.9387C178.259 51.4701 178.003 51.0388 177.67 50.67L144.28 13.52C143.943 13.1305 143.527 12.8169 143.06 12.6L117.14 0.600048C116.523 0.347738 115.852 0.258207 115.19 0.340046C114.961 0.305196 114.729 0.305196 114.5 0.340046H114.42C114.113 0.402534 113.826 0.536122 113.58 0.730053C112.408 1.56895 111.178 2.32415 109.9 2.99005C106.424 4.81681 102.687 6.09524 98.82 6.78005C94.6181 7.53028 90.3069 7.41064 86.1531 6.42851C81.9992 5.44638 78.091 3.62264 74.67 1.07005C74.52 0.960049 74.44 0.800053 74.29 0.730053C73.7759 0.432322 73.1979 0.262389 72.6045 0.234546C72.0111 0.206704 71.4197 0.321761 70.88 0.570049L44.93 12.57C44.4598 12.7685 44.0396 13.0691 43.7 13.45L10.31 50.7C9.64234 51.4462 9.28466 52.4191 9.31 53.42C9.34605 53.9155 9.48046 54.3989 9.70538 54.8419C9.9303 55.2848 10.2412 55.6786 10.62 56L13.87 58.87C11.16 58.79 8.36 58.7301 5.47 58.7201C4.10679 58.7201 2.79941 59.2616 1.83547 60.2255C0.871535 61.1895 0.330002 62.4968 0.330002 63.8601C0.330002 65.2233 0.871535 66.5306 1.83547 67.4946C2.79941 68.4585 4.10679 69 5.47 69C13.08 69 19.98 69.34 26.34 69.87C30.05 70.17 33.58 70.54 36.96 70.97C60.54 74.15 75.96 80.67 92.01 87.45C114.22 96.84 137.19 106.55 182.54 106.76C183.903 106.76 185.211 106.219 186.175 105.255C187.138 104.291 187.68 102.983 187.68 101.62C187.68 100.257 187.138 98.9495 186.175 97.9855C185.211 97.0216 183.903 96.48 182.54 96.48L182.58 96.55ZM81 9.37005L81.31 9.49005C83.7573 10.3967 86.3062 11.0012 88.9 11.2901C89.1411 11.3343 89.3851 11.3611 89.63 11.3701C90.78 11.4801 91.93 11.56 93.08 11.56C93.96 11.56 94.8 11.5601 95.65 11.4801C95.9414 11.4365 96.2354 11.4131 96.53 11.4101C97.06 11.3301 97.64 11.29 98.18 11.21C98.48 11.21 98.83 11.1 99.13 11.06C99.63 10.98 100.13 10.8701 100.59 10.7901C100.9 10.7201 101.2 10.64 101.51 10.6L102.93 10.2601L103.73 10.03L105.15 9.57005C105.372 9.52196 105.589 9.45505 105.8 9.37005C106.38 9.18005 106.95 8.95005 107.53 8.72005C107.53 8.72005 107.64 8.72005 107.68 8.72005C108.91 8.23005 110.06 7.72005 111.06 7.23005C107.99 18.6101 98.18 18.6501 94.73 18.6501H94.42C85.1 18.6501 79.32 14.9701 77.02 7.65005C78.3023 8.32102 79.6326 8.89594 81 9.37005V9.37005Z'
                      fill='black'
                    />
                  </svg>
                  <span> Color & Fit Retention</span>
                </label>
              </div>
              <div className='account--body__product__form__fabricfeatures__feature'>
                <input type='checkbox' name='antiPilling' />
                <label
                  htmlFor='antiPilling'
                  className='account--body__product__form__fabricfeatures__feature__label'
                >
                  <svg
                    viewBox='0 0 120 116'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M115.51 84.49C98.33 80.23 88.71 71.26 81.16 60.61C94.42 51.87 106.38 40.44 111.86 18.48C112.147 17.2888 112 16.0342 111.445 14.9417C110.89 13.8492 109.964 12.9903 108.833 12.5192C107.702 12.0482 106.44 11.996 105.274 12.3718C104.107 12.7477 103.113 13.5271 102.47 14.57C102.199 15.0065 102.006 15.4871 101.9 15.99C97.3 34.43 87.33 44.16 75.6 51.91C72.76 53.78 69.85 55.55 66.86 57.31L63.3 59.38C61.76 60.26 60.23 61.14 58.7 62.06C55.75 63.79 52.83 65.55 49.96 67.47C37.27 76 25.84 87 20.29 107.64C20.13 108.14 19.98 108.64 19.86 109.21C19.6945 109.865 19.6608 110.546 19.7607 111.214C19.8606 111.882 20.0921 112.523 20.4419 113.101C20.7917 113.679 21.2528 114.181 21.7983 114.579C22.3439 114.977 22.9631 115.263 23.62 115.42C24.0202 115.532 24.4345 115.586 24.85 115.58C25.9968 115.59 27.1135 115.213 28.0204 114.511C28.9273 113.809 29.5718 112.823 29.85 111.71C34.3 93.8 43.85 84.07 55.19 76.4C64.58 92.12 75.89 107.18 101.34 113.55C101.742 113.651 102.155 113.701 102.57 113.7C103.821 113.697 105.028 113.238 105.965 112.408C106.902 111.579 107.504 110.437 107.658 109.195C107.813 107.954 107.509 106.698 106.804 105.665C106.1 104.631 105.042 103.89 103.83 103.58C82.14 98.17 72.48 85.33 63.93 70.96C65.43 70.08 66.93 69.19 68.45 68.31C69.79 67.55 71.14 66.78 72.45 65.97C81 78.36 92.31 89.32 113.04 94.46C113.442 94.5634 113.855 94.6138 114.27 94.61C115.417 94.6214 116.535 94.2456 117.442 93.5433C118.349 92.8411 118.993 91.8534 119.27 90.74C119.435 90.0827 119.468 89.3994 119.368 88.7292C119.268 88.0591 119.036 87.4153 118.687 86.8347C118.338 86.2541 117.877 85.7481 117.332 85.3457C116.787 84.9434 116.168 84.6526 115.51 84.49V84.49Z'
                      fill='black'
                    />
                    <path
                      d='M44.93 59.19C46.39 58.35 47.85 57.46 49.34 56.62C50.83 55.78 52.34 54.9 53.87 53.98C56.63 52.4 59.35 50.76 61.99 48.98C64.8905 47.0966 67.6816 45.05 70.35 42.85C79.86 35.07 87.98 24.72 92.35 8.35005C92.517 7.8343 92.6572 7.31026 92.77 6.78004C92.939 6.12856 92.9769 5.44999 92.8814 4.78376C92.7859 4.11753 92.5589 3.47692 92.2138 2.89913C91.8686 2.32135 91.412 1.81792 90.8706 1.41808C90.3292 1.01825 89.7138 0.729986 89.06 0.570039C87.7381 0.239223 86.3391 0.444707 85.1681 1.14164C83.9972 1.83857 83.1495 2.97037 82.81 4.29004C79.36 18.12 72.88 27.06 64.91 33.96C56.13 20.39 44.67 8.04004 22.28 2.45004C21.6234 2.28654 20.941 2.25398 20.2718 2.3542C19.6026 2.45443 18.9597 2.68547 18.3798 3.03416C17.7999 3.38284 17.2944 3.84233 16.892 4.38639C16.4897 4.93045 16.1985 5.54843 16.035 6.20504C15.8715 6.86165 15.8389 7.54402 15.9392 8.21322C16.0394 8.88241 16.2704 9.52532 16.6191 10.1052C16.9678 10.6851 17.4273 11.1907 17.9714 11.593C18.5154 11.9953 19.1334 12.2865 19.79 12.45C38.99 17.24 48.73 27.86 56.67 40.21C53.83 42.08 50.92 43.85 47.92 45.61C39.76 35.11 28.8 26.14 10.59 21.61C9.93339 21.4465 9.25102 21.414 8.58182 21.5142C7.91263 21.6144 7.26972 21.8455 6.68982 22.1942C6.10991 22.5428 5.60437 23.0023 5.20205 23.5464C4.79972 24.0905 4.5085 24.7084 4.34501 25.365C4.18151 26.0217 4.14894 26.704 4.24916 27.3732C4.34939 28.0424 4.58044 28.6853 4.92912 29.2652C5.2778 29.8451 5.73729 30.3507 6.28135 30.753C6.82541 31.1553 7.4434 31.4465 8.10001 31.61C22.7 35.25 31.86 42.31 38.92 50.89C22.85 60.4 7.25 71.59 0.770001 97.62C0.443248 98.9473 0.65538 100.35 1.36 101.521C2.06461 102.692 3.20437 103.537 4.53 103.87C4.93455 103.958 5.34628 104.008 5.76001 104.02C6.63691 104.018 7.49881 103.792 8.26371 103.364C9.02861 102.935 9.67108 102.317 10.13 101.57C10.4142 101.121 10.6205 100.628 10.74 100.11C16.38 77.55 30 68 44.93 59.19Z'
                      fill='black'
                    />
                  </svg>
                  <span> Anti-Pilling</span>
                </label>
              </div>
              <div className='account--body__product__form__fabricfeatures__feature'>
                <input type='checkbox' name='butterySoft' />
                <label
                  htmlFor='butterySoft'
                  className='account--body__product__form__fabricfeatures__feature__label'
                >
                  <svg
                    viewBox='0 0 169 102'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M122.1 101.58C105.61 101.58 94.2 98.8 83.17 96.12C75.47 94.24 68.17 92.47 59.35 91.63L50.99 91.14C43.7743 91.0261 36.5595 91.4237 29.4 92.33C28.3475 92.5407 27.2816 92.6777 26.21 92.74H26.08C25.5958 92.8003 25.1075 92.8204 24.62 92.8H24.57C18.3442 92.7959 12.3551 90.414 7.82701 86.1412C3.29887 81.8685 0.573652 76.0276 0.208437 69.8126C-0.156779 63.5975 1.86559 57.4777 5.86213 52.704C9.85867 47.9303 15.5276 44.8634 21.71 44.13C22.6168 38.1495 25.6381 32.6924 30.2251 28.7493C34.8122 24.8063 40.6611 22.6387 46.71 22.64C49.1292 22.6257 51.5376 22.9625 53.86 23.64C56.3692 16.9767 60.8215 11.2204 66.6401 7.11668C72.4587 3.013 79.3755 0.751101 86.4945 0.623957C93.6135 0.496813 100.607 2.51029 106.568 6.40357C112.529 10.2969 117.184 15.8906 119.93 22.46C123.722 21.2156 127.755 20.8882 131.698 21.5045C135.641 22.1209 139.382 23.6635 142.613 26.0057C145.844 28.348 148.474 31.4231 150.287 34.9787C152.099 38.5344 153.043 42.4691 153.04 46.46C153.04 46.79 153.04 47.12 153.04 47.46C158.218 49.8801 162.52 53.8443 165.354 58.8079C168.188 63.7715 169.415 69.491 168.867 75.1803C168.319 80.8696 166.022 86.2497 162.293 90.5811C158.564 94.9125 153.585 97.9828 148.04 99.37C147.535 99.5519 147.012 99.6793 146.48 99.75L145.72 99.84C145.035 99.9675 144.344 100.058 143.65 100.11C136.504 101.042 129.307 101.533 122.1 101.58V101.58ZM48.27 80.84C49.27 80.84 50.37 80.84 51.41 80.84L60.14 81.35C68.7348 82.2854 77.2461 83.8733 85.6 86.1C96.04 88.64 106.85 91.27 122.1 91.27C128.903 91.267 135.699 90.8428 142.45 90H142.67C143.166 89.9593 143.66 89.8925 144.15 89.8L145.3 89.57C149.044 88.6712 152.384 86.5565 154.798 83.5569C157.213 80.5574 158.564 76.8421 158.642 72.9925C158.72 69.143 157.519 65.3762 155.228 62.2816C152.937 59.1871 149.685 56.9393 145.98 55.89L141.32 54.57L142.37 49.84C142.606 48.7693 142.726 47.6764 142.73 46.58C142.725 43.8866 141.996 41.244 140.617 38.9299C139.239 36.6158 137.263 34.7155 134.897 33.4286C132.531 32.1417 129.862 31.5156 127.17 31.6162C124.478 31.7167 121.864 32.5402 119.6 34L113.37 38.08L111.77 30.8C110.513 25.1021 107.321 20.0152 102.738 16.4036C98.1552 12.792 92.4632 10.8784 86.6292 10.988C80.7952 11.0975 75.179 13.2235 70.7348 17.0046C66.2907 20.7858 63.2926 25.9889 62.25 31.73L60.91 39.14L54.5 35.2C52.2347 33.8011 49.6366 33.0329 46.9748 32.975C44.313 32.9171 41.684 33.5716 39.36 34.8708C37.036 36.1699 35.1014 38.0666 33.7564 40.3643C32.4114 42.6621 31.7049 45.2776 31.71 47.94C31.71 48.18 31.71 48.42 31.71 48.66L32.13 55.02L26.05 54.38C25.55 54.38 25.05 54.29 24.53 54.29C22.6731 54.2789 20.8322 54.6336 19.1124 55.3339C17.3926 56.0341 15.8275 57.0663 14.5066 58.3714C11.8389 61.0073 10.3275 64.5949 10.305 68.345C10.2825 72.0952 11.7506 75.7007 14.3864 78.3684C17.0222 81.0361 20.6098 82.5475 24.36 82.57H25H25.45C26.1554 82.5347 26.8573 82.4478 27.55 82.31L28 82.24C34.7221 81.3633 41.4912 80.8958 48.27 80.84V80.84Z'
                      fill='black'
                    />
                  </svg>
                  <span>Buttery Soft</span>
                </label>
              </div>
              <div className='account--body__product__form__fabricfeatures__feature'>
                <input type='checkbox' name='preShrunk' />
                <label
                  htmlFor='preShrunk'
                  className='account--body__product__form__fabricfeatures__feature__label'
                >
                  <svg
                    viewBox='0 0 198 190'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M99.13 189.66C93.3411 189.619 87.5739 188.948 81.93 187.66L83.72 179.66C88.7751 180.825 93.9426 181.431 99.13 181.47C100.92 181.47 102.78 181.38 104.64 181.22L105.36 189.41C103.26 189.56 101.17 189.66 99.13 189.66ZM113.93 188.14L112.34 180.08C117.493 179.036 122.551 177.564 127.46 175.68L130.37 183.38C125.031 185.419 119.532 187.011 113.93 188.14ZM73.65 185.42C68.2393 183.703 62.9534 181.615 57.83 179.17L61.36 171.74C66.1396 174.025 71.0713 175.976 76.12 177.58L73.65 185.42ZM138.22 180.1L134.79 172.62C138.45 170.95 142.06 169.08 145.53 167.08L145.9 166.87C146.694 166.466 147.431 165.959 148.09 165.36L153.63 171.44C152.445 172.511 151.128 173.425 149.71 174.16L149.51 174.27C146 176.33 142.11 178.31 138.22 180.1ZM50.29 175.3C49.54 174.89 48.83 174.49 48.17 174.11L48 174C45.3889 172.588 43.1617 170.56 41.5115 168.093C39.8613 165.625 38.8379 162.792 38.53 159.84L46.71 158.96C46.874 160.583 47.4326 162.142 48.3373 163.5C49.2419 164.858 50.465 165.974 51.9 166.75L52.21 166.92C52.93 167.34 53.6 167.71 54.3 168.1L50.29 175.3ZM159 162.47L151 160.42C151.221 159.568 151.332 158.691 151.33 157.81L151.27 145.06H159.49L159.55 157.83C159.561 159.394 159.376 160.952 159 162.47V162.47ZM46.64 151.2H38.42L38.5 134.75H46.72L46.64 151.2ZM151.28 136.83L151.2 120.39H159.42L159.5 136.83H151.28ZM46.76 126.53H38.53L38.61 110.08H46.84L46.76 126.53ZM151.16 112.17V104.02C151.153 102.992 151.533 101.999 152.224 101.238C152.915 100.477 153.866 100.003 154.89 99.91C156.861 99.7284 158.733 98.9663 160.27 97.72L165.44 104.12C163.661 105.565 161.626 106.661 159.44 107.35V112.13L151.16 112.17ZM39.62 107.62C36.7524 106.897 34.101 105.494 31.89 103.53L24.72 97.18L30.17 91.0201L37.35 97.3801C38.5726 98.4655 40.0364 99.2437 41.62 99.65L39.62 107.62ZM171.7 98.56L166.26 92.4L178.57 81.5L184.02 87.66L171.7 98.56ZM18.56 91.73L6.17001 80.73L11.78 74.73L12.07 74.9901L24 85.5701L18.56 91.73ZM190.17 82.2101L184.73 76.05L185.9 75.05C186.906 74.1682 187.726 73.0952 188.313 71.8934C188.9 70.6917 189.242 69.3853 189.32 68.05C189.32 67.82 189.32 67.6001 189.32 67.3801C189.322 66.7287 189.258 66.0787 189.13 65.44L197.2 63.84C197.424 65.0034 197.538 66.1853 197.54 67.37C197.54 67.79 197.54 68.2 197.54 68.61C197.389 71.0106 196.766 73.3578 195.705 75.5166C194.645 77.6755 193.168 79.6035 191.36 81.19L190.17 82.2101ZM0.920009 71.67C0.687836 70.6837 0.534024 69.6806 0.46001 68.67C0.46001 68.26 0.46001 67.96 0.46001 67.67C0.411233 63.115 2.05386 58.7038 5.07001 55.29L6.95001 53.2L13.06 58.7L11.2 60.7701C9.53805 62.6807 8.6406 65.138 8.68001 67.67C8.68001 67.86 8.68001 68.04 8.68001 68.23C8.72191 68.769 8.80549 69.304 8.93001 69.83L0.920009 71.67ZM186.34 60.2L175.34 47.98L181.46 42.48L192.46 54.7L186.34 60.2ZM18.54 52.53L12.43 47L23.43 34.78L29.55 40.27L18.54 52.53ZM169.84 41.86L158.84 29.63L164.95 24.13L175.95 36.36L169.84 41.86ZM35 34.19L28.88 28.69L38.21 18.32C38.9249 17.5168 39.7114 16.7804 40.56 16.12L45.62 22.6C45.1648 22.9577 44.7431 23.356 44.36 23.79L35 34.19ZM153.42 23.6C152.545 22.6724 151.499 21.9221 150.34 21.39L140.29 16.74L143.74 9.27004L153.74 13.92C155.85 14.8797 157.755 16.2379 159.35 17.92L153.42 23.6ZM52.13 19.31L48.68 11.85L63.6 4.94005L67.06 12.41L52.13 19.31ZM98.32 15.52C97.3339 15.5211 96.3487 15.461 95.37 15.34L96.37 7.18005C97.0335 7.26179 97.7015 7.30187 98.37 7.30005C102.273 7.18391 106.072 6.01988 109.37 3.93005L113.8 10.85C109.171 13.8074 103.812 15.4239 98.32 15.52V15.52ZM132.83 13.29L124.51 9.44005C123.193 8.84977 121.764 8.54965 120.32 8.56004C120.03 8.56004 119.76 8.56004 119.49 8.56004L118.77 0.370049C119.31 0.370049 119.77 0.300049 120.39 0.300049C122.989 0.326878 125.552 0.906372 127.91 2.00005L136.28 5.87005L132.83 13.29ZM86.09 12.21C85.61 11.94 85.09 11.65 84.65 11.35C84.4916 11.2446 84.3412 11.1276 84.2 11C83.6841 10.5607 83.1245 10.1753 82.53 9.85004C81.2755 9.14076 79.8826 8.71099 78.4466 8.59017C77.0105 8.46935 75.5654 8.66034 74.21 9.15005L71.43 1.41005C73.8916 0.535764 76.5111 0.195064 79.1145 0.410576C81.7179 0.626088 84.2456 1.39288 86.53 2.66005C87.5174 3.20857 88.4514 3.848 89.32 4.57005L90.16 5.07005L86.09 12.21Z'
                      fill='black'
                    />
                    <path
                      d='M99.13 175.32C81.71 175.32 64.3 166.8 55.47 161.72L54.98 161.44C54.373 161.125 53.8649 160.648 53.512 160.062C53.159 159.476 52.9749 158.804 52.98 158.12L53.3 88.87L46 93.2801C45.3171 93.6995 44.5169 93.8872 43.7186 93.8151C42.9204 93.743 42.1668 93.4151 41.57 92.8801L16.29 70.4901C15.9189 70.1618 15.6166 69.7632 15.4005 69.3173C15.1843 68.8715 15.0587 68.3873 15.0308 67.8926C15.0029 67.3979 15.0733 66.9026 15.2379 66.4353C15.4026 65.968 15.6582 65.538 15.99 65.1701L49.12 28.3301C49.4557 27.9484 49.868 27.6418 50.33 27.4301L76.06 15.5301C76.5932 15.2815 77.1779 15.1636 77.7657 15.1862C78.3536 15.2088 78.9275 15.3713 79.44 15.6601C79.9609 15.9515 80.4061 16.3613 80.7396 16.8563C81.0731 17.3513 81.2856 17.9178 81.36 18.5101C82.58 28.3601 88.68 33.3601 99.49 33.3601H100C103.9 33.3601 114.94 33.1501 116.68 18.5301C116.748 17.9345 116.957 17.3637 117.289 16.8646C117.621 16.3656 118.067 15.9527 118.59 15.6601C119.105 15.3728 119.681 15.212 120.271 15.1912C120.86 15.1703 121.446 15.2899 121.98 15.5401L147.7 27.4301C148.162 27.6512 148.576 27.9603 148.92 28.3401L182 65.1701C182.332 65.538 182.587 65.968 182.752 66.4353C182.917 66.9026 182.987 67.3979 182.959 67.8926C182.931 68.3873 182.806 68.8715 182.59 69.3173C182.373 69.7632 182.071 70.1618 181.7 70.4901L156.38 92.8801C155.783 93.4151 155.03 93.743 154.231 93.8151C153.433 93.8872 152.633 93.6995 151.95 93.2801L144.67 88.87L144.99 158.12C144.995 158.804 144.811 159.476 144.458 160.062C144.105 160.648 143.597 161.125 142.99 161.44L142.5 161.73C133.73 166.8 116.44 175.32 99.11 175.32H99.13ZM57.32 157.8C57.4239 157.85 57.5242 157.906 57.62 157.97C66.08 162.83 82.71 170.97 99.13 170.97C115.44 170.97 131.96 162.82 140.36 157.97L140.67 157.79L140.35 87.8501C140.346 87.1836 140.52 86.5283 140.854 85.9514C141.188 85.3745 141.669 84.897 142.249 84.568C142.828 84.239 143.485 84.0704 144.151 84.0796C144.818 84.0887 145.47 84.2753 146.04 84.62L153.84 89.3501L178.41 67.6201L145.75 31.3001L120.84 19.7801C119.66 28.1301 114.98 37.6701 99.84 37.6701H99.51C82.62 37.6701 78.25 26.8001 77.19 19.7801L52.27 31.3001L19.61 67.6201L44.18 89.3501L51.98 84.62C52.5503 84.2753 53.2022 84.0887 53.8686 84.0796C54.535 84.0704 55.1918 84.239 55.7713 84.568C56.3509 84.897 56.8323 85.3745 57.166 85.9514C57.4997 86.5283 57.6737 87.1836 57.67 87.8501L57.32 157.8Z'
                      fill='black'
                    />
                    <path
                      d='M98.12 26.41C90.5515 26.383 83.1911 23.9295 77.12 19.41L79.64 15.9C99.09 29.9 117.64 16.25 118.41 15.67L121.02 19.12C114.263 23.7361 106.302 26.2706 98.12 26.41V26.41Z'
                      fill='black'
                    />
                  </svg>
                  <span> Pre-Shrunk</span>
                </label>
              </div>
              <div className='account--body__product__form__fabricfeatures__feature'>
                <input type='checkbox' name='wrinkleFree' />
                <label
                  htmlFor='wrinkleFree'
                  className='account--body__product__form__fabricfeatures__feature__label'
                >
                  <svg
                    viewBox='0 0 196 80'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M190.32 43.9999C150.32 43.9999 125.89 33.6799 100 22.7699C96.86 21.4366 93.6966 20.1032 90.51 18.7699L97.1 19.9299C122.54 24.4399 148.85 29.0899 190.32 29.0899C191.013 29.1205 191.706 29.0104 192.355 28.7661C193.005 28.5219 193.599 28.1486 194.1 27.6687C194.602 27.1889 195.001 26.6124 195.273 25.9742C195.546 25.3359 195.687 24.649 195.687 23.9549C195.687 23.2608 195.546 22.5739 195.273 21.9357C195.001 21.2974 194.602 20.7209 194.1 20.2411C193.599 19.7613 193.005 19.388 192.355 19.1437C191.706 18.8995 191.013 18.7893 190.32 18.8199C149.75 18.8199 123.9 14.2399 98.9 9.81992C73.46 5.30992 47.15 0.649902 5.67999 0.649902C4.31677 0.649902 3.0094 1.19144 2.04546 2.15538C1.08152 3.11932 0.539988 4.42669 0.539988 5.7899V5.84991C0.538673 6.52575 0.670649 7.19521 0.92837 7.81998C1.18609 8.44475 1.56449 9.01255 2.04192 9.49091C2.51934 9.96926 3.08641 10.3488 3.71068 10.6077C4.33495 10.8666 5.00415 10.9999 5.67999 10.9999C45.68 10.9999 70.11 21.3099 96 32.2299C121.7 43.0599 148.26 54.2299 190.32 54.2299C191.683 54.2299 192.991 53.6884 193.955 52.7244C194.918 51.7605 195.46 50.4531 195.46 49.0899C195.46 47.7267 194.918 46.4193 193.955 45.4554C192.991 44.4914 191.683 43.9499 190.32 43.9499V43.9999Z'
                      fill='black'
                    />
                    <path
                      d='M190.32 68.8201C185.32 68.8201 180.51 68.7501 175.91 68.6201C144.16 66.4901 122.62 57.4101 100 47.8701C74.3 37.0301 47.74 25.8701 5.67998 25.8701C4.31676 25.8701 3.00939 26.4117 2.04545 27.3756C1.08151 28.3395 0.539978 29.6469 0.539978 31.0101C0.539978 32.3733 1.08151 33.6807 2.04545 34.6447C3.00939 35.6086 4.31676 36.1501 5.67998 36.1501C45.68 36.1501 70.11 46.4601 96 57.3801C98.8866 58.6001 101.793 59.8168 104.72 61.0301L98.88 60.0301C73.44 55.6101 47.14 51.0301 5.67998 51.0301C4.31676 51.0301 3.00939 51.5717 2.04545 52.5356C1.08151 53.4995 0.539978 54.8069 0.539978 56.1701C0.539978 57.5333 1.08151 58.8407 2.04545 59.8047C3.00939 60.7686 4.31676 61.3101 5.67998 61.3101C46.25 61.3101 72.11 65.8101 97.12 70.1601C119.46 74.0401 142.48 78.0401 175.86 78.9601C180.48 79.2601 185.28 79.4301 190.32 79.4301C191.683 79.4301 192.991 78.8886 193.954 77.9247C194.918 76.9607 195.46 75.6533 195.46 74.2901C195.46 74.2401 195.46 74.2001 195.46 74.1501C195.46 74.1001 195.46 74.0601 195.46 74.0101C195.467 73.3309 195.339 72.6572 195.083 72.0278C194.828 71.3984 194.45 70.8258 193.972 70.3432C193.494 69.8606 192.925 69.4775 192.299 69.2161C191.672 68.9547 190.999 68.8201 190.32 68.8201Z'
                      fill='black'
                    />
                  </svg>
                  <span> Wrinkle Free</span>
                </label>
              </div>
            </div>
          </div>
        </div>

        <div className='account--body__product__form__price'>
          <div className='account--body__product__form__group'>
            <label htmlFor='price'>price</label>
            <input
              type='number'
              required
              defaultValue='0'
              min='0'
              name='price'
            />
          </div>
          <div className='account--body__product__form__group'>
            <label htmlFor='sale'>sale (%)</label>
            <input type='number' defaultValue='0' min='0' name='sale' />
          </div>
        </div>
        <div className='account--body__product__form__sizes'>
          <h3 className='account--body__product__form__sizes__h3'>sizes :</h3>
          <div className='account--body__product__form__sizes--container'>
            <div className='account--body__product__form__group'>
              <label htmlFor='small'>small amount</label>
              <input type='number' defaultValue='0' min='0' name='small' />
            </div>
            <div className='account--body__product__form__group'>
              <label htmlFor='medium'>medium amount</label>
              <input type='number' name='medium' min='0' defaultValue='0' />
            </div>
            <div className='account--body__product__form__group'>
              <label htmlFor='large'>large amount</label>
              <input type='number' defaultValue='0' min='0' name='large' />
            </div>
            <div className='account--body__product__form__group'>
              <label htmlFor='xLarge'>x-large amount</label>
              <input type='number' defaultValue='0' min='0' name='xLarge' />
            </div>
            <div className='account--body__product__form__group'>
              <label htmlFor='xxLarge'>xx-large amount</label>
              <input type='number' defaultValue='0' min='0' name='xxLarge' />
            </div>
          </div>
        </div>
        <div className='account--body__product__form__group'>
          <label htmlFor='summary'>summary</label>
          <textarea name='summary' required placeholder='summary'></textarea>
        </div>
        <div className='account--body__product__form__group'>
          <label htmlFor='sizeAndFit'>size and fit</label>
          <textarea name='sizeAndFit' placeholder='size and fit'></textarea>
        </div>
        <div className='account--body__product__form__group'>
          <label htmlFor='materialAndCare'>material and care</label>
          <textarea
            name='materialAndCare'
            placeholder='material and care'
          ></textarea>
        </div>

        <div className='account--body__product__form__group'>
          <label htmlFor='reason'>why you made this</label>
          <textarea name='reason' placeholder='reason'></textarea>
        </div>
        <div className='account--body__product__form__color'>
          <div className='account--body__product__form__group'>
            <label htmlFor='color'>color name</label>
            <input type='text' placeholder='color' required name='color' />
          </div>
          <div className='account--body__product__form__group'>
            <label htmlFor='colorHex'>color hex</label>
            <input
              type='color'
              required
              placeholder='color hex'
              name='colorHex'
              id='account--body__product__form__color__inp'
            />
          </div>
        </div>
        <div className='account--body__product__form__imgs'>
          <h3 className='account--body__product__form__sizes__h3'>images :</h3>
          <div className='account--group__product__form__imgs--container'>
            <div className='account--body__product__form__group'>
              <label htmlFor='imageCover'> first image</label>
              <img
                src={imageCover}
                alt=''
                className='account--body__product__form__group__imgcover'
              />
              <label className='account--body__product__form__group__fileinput'>
                <input
                  type='file'
                  accept='image/*'
                  name='imageCover'
                  onChange={handlePhoto('cover')}
                  required
                />
                choose new image
              </label>
            </div>
            <div className='account--body__product__form__group'>
              <label htmlFor='imageDetail'> second image</label>
              <img
                src={imageDetail}
                alt=''
                className='account--body__product__form__group__imgcover'
              />
              <label className='account--body__product__form__group__fileinput'>
                <input
                  type='file'
                  accept='image/*'
                  name='imageDetail'
                  onChange={handlePhoto('detail')}
                  required
                />
                choose new image
              </label>
            </div>
            <div className='account--body__product__form__group'>
              <label htmlFor='img_1'>third image</label>
              <img
                src={img_1}
                alt=''
                className='account--body__product__form__group__imgcover'
              />
              <label className='account--body__product__form__group__fileinput'>
                <input
                  type='file'
                  accept='image/*'
                  name='img_1'
                  onChange={handlePhoto('img_1')}
                />
                choose new image
              </label>
            </div>
            <div className='account--body__product__form__group'>
              <label htmlFor='img_2'>forth image</label>
              <img
                src={img_2}
                alt=''
                className='account--body__product__form__group__imgcover'
              />
              <label className='account--body__product__form__group__fileinput'>
                <input
                  type='file'
                  accept='image/*'
                  name='img_2'
                  onChange={handlePhoto('img_2')}
                />
                choose new image
              </label>
            </div>
            <div className='account--body__product__form__group'>
              <label htmlFor='img_3'>fifth image</label>
              <img
                src={img_3}
                alt=''
                className='account--body__product__form__group__imgcover'
              />
              <label className='account--body__product__form__group__fileinput'>
                <input
                  type='file'
                  accept='image/*'
                  name='img_3'
                  onChange={handlePhoto('img_3')}
                />
                choose new image
              </label>
            </div>
          </div>
        </div>
        <div className='err--div' id='add__product--err'></div>
        <div className='success--div' id='add__product--success'></div>
        <button
          type='submit'
          className='account--body__product__form__group__fileinput'
        >
          create new product
        </button>
      </form>
    </div>
  );
}
