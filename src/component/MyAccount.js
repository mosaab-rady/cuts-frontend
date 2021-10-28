import React, { useContext } from 'react';
import { Route, Switch } from 'react-router';
import '../css/myaccount.css';
import Addresses from './Addresses';
import AccountBar from './AccountBar';
import OrderHistory from './OrderHistory';
import { myContext } from '../Context';
import AdminCollections from './admin/AdminCollections';
import AdminProduct from './admin/AdminProduct';
import AdminDefaultCollections from './admin/AdminDefaultCollections';
import AdminCollectionDetail from './admin/AdminCollectionDetail';

export default function MyAccount() {
  const { currentUser } = useContext(myContext);
  return (
    <div className='my--account'>
      <AccountBar />
      <Switch>
        <Route exact path='/account'>
          <OrderHistory />
        </Route>
        <Route exact path='/account/addresses'>
          <Addresses />
        </Route>
        {currentUser.role === 'admin' ? (
          <Switch>
            <Route exact path='/account/collections'>
              <AdminCollections />
            </Route>
            <Route exact path='/account/collections/:collection'>
              <AdminCollectionDetail />
            </Route>
            <Route exact path='/account/default-collections'>
              <AdminDefaultCollections />
            </Route>
            <Route exact path='/account/products'>
              <AdminProduct />
            </Route>
          </Switch>
        ) : (
          ''
        )}
      </Switch>
    </div>
  );
}
