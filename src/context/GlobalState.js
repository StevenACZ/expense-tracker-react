import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

// Initial state
const initialState = {
  transactions: [
    { id: 1, text: 'Flower', amount: -20 },
    { id: 2, text: 'Salary', amount: 300 },
    { id: 3, text: 'Book', amount: -10 },
    { id: 4, text: 'Camera', amount: 150 }
  ]
};

// Create context
export const GlobalContext = createContext(initialState);

// Provider component
export const GlobalProvider = ({ children }) => {
  const [ state, dispatch ] = useReducer( AppReducer, initialState );

  // Actions
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
      deleteTransaction,
      createTransaction
    }}>
      { children }
    </GlobalContext.Provider>
  );
};