import React from 'react';
import { Route, Switch } from 'react-router';
import '../css/myaccount.css';
import Addresses from './Addresses';
import AccountBar from './AccountBar';
import OrderHistory from './OrderHistory';

export default function MyAccount() {
  return (
    <div className='my--account'>
      <AccountBar />
      <Switch>
        <Route exact path='/account'>
          <OrderHistory />
        </Route>
        <Route path='/account/addresses'>
          <Addresses />
        </Route>
      </Switch>
    </div>
  );
}
