import React from 'react';
import { signup } from '../js/authentication';

export default function Signup() {
  return (
    <div className='signup'>
      <h3 className='form__header'>sign up</h3>
      <form className='form' onSubmit={(e) => signup(e)}>
        <div className='form__group'>
          <label htmlFor='firstname' className='form__group__label'>
            first name
          </label>
          <input
            type='text'
            className='form__group__in'
            required
            placeholder='first name'
            name='firstname'
          />
        </div>
        <div className='form__group'>
          <label htmlFor='lastname' className='form__group__label'>
            last name
          </label>
          <input
            type='text'
            className='form__group__in'
            required
            placeholder='last name'
            name='lastname'
          />
        </div>
        <div className='form__group'>
          <label htmlFor='email' className='form__group__label'>
            email
          </label>
          <input
            type='email'
            className='form__group__in'
            name='email'
            placeholder='email'
            required
          />
        </div>
        <div className='form__group'>
          <label htmlFor='password' className='form__group__label'>
            password
          </label>
          <input
            type='password'
            className='form__group__in'
            name='password'
            placeholder='password'
            required
            minLength='8'
          />
        </div>
        <div className='err--div' id='signup--err'></div>
        <button className='form__btn'>sign up</button>
      </form>
    </div>
  );
}
