import React, { useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { myContext } from '../Context';
import '../css/accountbar.css';
import { logout } from '../js/authentication';

export default function AccountBar() {
  const { currentUser, dispatch } = useContext(myContext);
  const location = useLocation();

  return (
    <div className='account--bar'>
      <div className='account--bar__user'>
        <h2 className='account--bar__user__name'>
          Hey {currentUser.name.split(' ')[0]}
        </h2>
        <h4 className='account--bar__user__email'>{currentUser.email}</h4>
      </div>
      <div className='account--bar__links'>
        <Link
          className='link account--bar__link'
          to={{
            pathname: '/account',
          }}
        >
          <h4
            className={
              location.pathname === '/account'
                ? 'account--bar__Links__link account--bar__links__active'
                : 'account--bar__Links__link'
            }
          >
            order history
            {location.pathname === '/account' ? (
              <svg
                className='account--bar__links__svg'
                viewBox='0 0 43 24'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M42.0607 13.0607C42.6464 12.4749 42.6464 11.5251 42.0607 10.9393L32.5147 1.3934C31.9289 0.807612 30.9792 0.807612 30.3934 1.3934C29.8076 1.97918 29.8076 2.92893 30.3934 3.51472L38.8787 12L30.3934 20.4853C29.8076 21.0711 29.8076 22.0208 30.3934 22.6066C30.9792 23.1924 31.9289 23.1924 32.5147 22.6066L42.0607 13.0607ZM0 13.5H41V10.5H0V13.5Z'
                  fill='black'
                />
              </svg>
            ) : (
              ''
            )}
          </h4>
        </Link>
        <Link
          className='link account--bar__link '
          to={{
            pathname: '/account/addresses',
          }}
        >
          <h4
            className={
              location.pathname === '/account/addresses'
                ? 'account--bar__Links__link account--bar__links__active'
                : 'account--bar__Links__link'
            }
          >
            address book
            {location.pathname === '/account/addresses' ? (
              <svg
                className='account--bar__links__svg'
                viewBox='0 0 43 24'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M42.0607 13.0607C42.6464 12.4749 42.6464 11.5251 42.0607 10.9393L32.5147 1.3934C31.9289 0.807612 30.9792 0.807612 30.3934 1.3934C29.8076 1.97918 29.8076 2.92893 30.3934 3.51472L38.8787 12L30.3934 20.4853C29.8076 21.0711 29.8076 22.0208 30.3934 22.6066C30.9792 23.1924 31.9289 23.1924 32.5147 22.6066L42.0607 13.0607ZM0 13.5H41V10.5H0V13.5Z'
                  fill='black'
                />
              </svg>
            ) : (
              ''
            )}
          </h4>
        </Link>
        <h4 className='account--bar__Links__link'>rewards</h4>
        <h4
          className='account--bar__Links__link'
          onClick={() => logout(dispatch)}
        >
          sign out
        </h4>
      </div>
    </div>
  );
}
