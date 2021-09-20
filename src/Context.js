import React, { useEffect, useReducer } from 'react';
import { request } from './js/axios';

export const myContext = React.createContext(null);

const reducer = (state, action) => {
  if (action.type === 'LOG_IN') {
    return { ...state, currentUser: action.payload };
  }
  if (action.type === 'LOG_OUT') {
    return { ...state, currentUser: null };
  }
};

const initialState = {
  currentUser: null,
};

export default function Context({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const getMe = async () => {
      const res = await request('GET', '/api/v1/users/isloggedin');
      if (res) {
        if (res.data.status === 'success') {
          dispatch({ type: 'LOG_IN', payload: res.data.data.user });
        }
      }
    };
    getMe();
  }, []);

  return (
    <myContext.Provider value={{ ...state, dispatch }}>
      {children}
    </myContext.Provider>
  );
}
