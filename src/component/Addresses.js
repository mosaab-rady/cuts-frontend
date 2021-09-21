import React from 'react';

export default function Addresses() {
  return (
    <div className='account--body addresses'>
      <h2 className='account--body__header'>address book</h2>
      <div className='account--body__addresses'>
        <h2 className='account--body__addresses__header'>add address</h2>
        <form className='form'>
          <div className='addresses__form'>
            <div className='form__group'>
              <label htmlFor='firstname' className='form__group__label'>
                first name
              </label>
              <input
                type='text'
                className='form__group__in'
                placeholder='first name'
                name='firstname'
                required
              />
            </div>
            <div className='form__group'>
              <label htmlFor='lastname' className='form__group__label'>
                last name
              </label>
              <input
                type='text'
                className='form__group__in'
                placeholder='last name'
                required
                name='lastname'
              />
            </div>
            <div className='form__group'>
              <label htmlFor='address1' className='form__group__label'>
                address 1
              </label>
              <input
                type='text'
                className='form__group__in'
                placeholder='address 1'
                required
                name='address1'
              />
            </div>
            <div className='form__group'>
              <label htmlFor='address2' className='form__group__label'>
                address 2
              </label>
              <input
                type='text'
                className='form__group__in'
                placeholder='address 2'
                name='address2'
              />
            </div>
            <div className='form__group'>
              <label htmlFor='city' className='form__group__label'>
                city
              </label>
              <input
                type='text'
                className='form__group__in'
                placeholder='city'
                required
                name='city'
              />
            </div>
            <div className='form__group'>
              <label htmlFor='country' className='form__group__label'>
                country
              </label>
              <input
                type='country'
                className='form__group__in'
                name='country'
                required
                placeholder='country'
              />
            </div>
            <div className='form__group'>
              <label htmlFor='zip' className='form__group__label'>
                zip
              </label>
              <input
                type='text'
                className='form__group__in'
                name='zip'
                required
                placeholder='zip'
              />
            </div>
          </div>
          <button className='address__btn'>save</button>
        </form>
      </div>
    </div>
  );
}
