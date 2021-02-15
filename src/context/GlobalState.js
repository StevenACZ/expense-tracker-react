import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';
import axios from 'axios';

const expenseApi = axios.create({
  baseURL: 'http://localhost:5000'
})

const __API__ = 'http://localhost:5000'
axios.create({baseUrl: __API__})

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
      const res = await expenseApi.get('/api/v1/transactions');

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

  const deleteTransaction = async ( id ) => {
    try {
      await expenseApi.delete(`/api/v1/transactions/${ id }`);

      dispatch({
        type: 'DELETE_TRANSACTION',
        payload: id
      });
    } catch ( err ) {
      dispatch({
        type: 'TRANSACTION_ERROR',
        payload: err.response.data.error
      })
    }
  };

  const createTransaction = async ( transaction ) => {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    }

    try {
      const res = await expenseApi.post('/api/v1/transactions', transaction, config);
      
      dispatch({
        type: 'CREATE_TRANSACTION',
        payload: res.data.data
      });
    } catch ( err ) {
      dispatch({
        type: 'TRANSACTION_ERROR',
        payload: err.response.data.error
      })
    }
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