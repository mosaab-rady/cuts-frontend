import TinySlider from 'tiny-slider-react';
import React from 'react';
import '../css/slider.css';

export default function Slider({ product }) {
  const host = 'http://localhost:5000';
  const settings = {
    lazyload: true,
    controls: false,
    nav: false,
    mouseDrag: true,
    loop: true,
    items: 1,
    autoplay: true,
    autoplayButtonOutput: false,
  };

  return (
    <div className='product__imgs__container'>
      <TinySlider settings={settings}>
        <div>
          <img
            src={`${host}/api/v1/images/${product.imageCover}`}
            alt=''
            className='product__imgs__main--img'
          />
        </div>
        <div>
          <img
            src={`${host}/api/v1/images/${product.imageDetail}`}
            alt=''
            className='product__imgs__main--img'
          />
        </div>
        {product.images
          ? product.images.map((img, i) => {
              return (
                <img
                  key={i}
                  className='product__imgs__main--img'
                  src={`${host}/api/v1/images/${img}`}
                  alt=''
                />
              );
            })
          : ''}
      </TinySlider>
    </div>
  );
}
