import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';
import axios from 'axios';

// Initial state
const initialState = {
  transactions: [],
  error: null,
  loading: true
};

// Create context
export const GlobalContext = createContext(initialState);

// Provider component
export const GlobalProvider = ({ children }) => {
  const [ state, dispatch ] = useReducer( AppReducer, initialState );

  // Actions
  const getTransactions = async () => {
    try {
      const res = await axios.get('/api/v1/transactions');

      dispatch({
        type: 'GET_TRANSACTIONS',
        payload: res.data.data
      })
    } catch ( err ) {
      dispatch({
        type: 'TRANSACTION_ERROR',
        payload: err.response.data.error
      })
    }
  }

  const deleteTransaction = ( id ) => {
    dispatch({
      type: 'DELETE_TRANSACTION',
      payload: id
    });
  };

  const createTransaction = ( text, amount ) => {
    const newTransaction = {
      id: Math.floor(Math.random() * 100000000),
      text,
      amount
    };

    dispatch({
      type: 'CREATE_TRANSACTION',
      payload: newTransaction
    });
  };

  return (
    <GlobalContext.Provider value={{
      transactions: state.transactions,
      error: state.error,
      loading: state.loading,
      getTransactions,
      deleteTransaction,
      createTransaction
    }}>
      { children }
    </GlobalContext.Provider>
  );
};