import React from 'react';
import '../css/comparison.css';
export default function Comparison({ img, nb, name, info }) {
  return (
    <div className='comparison'>
      <img className={`comparison__img${nb}`} src={`img/${img}`} alt='' />
      <div className='comparison__info'>
        <h3 className='comparison__info__h3'>
          <span>{nb}</span> {name}
        </h3>
        <ul className='comparison__info__ul'>
          {info.map((item, i) => {
            return (
              <li key={i} className='comparison__info__li'>
                {item}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
