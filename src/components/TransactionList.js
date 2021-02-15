import React, { useContext, useEffect } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { TransactionItem } from './TransactionItem';

export const TransactionList = () => {

  const { transactions, getTransactions } = useContext( GlobalContext ); 

  useEffect(() => {
    getTransactions();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <h3>History</h3>
      <ul id="list" className="list">
        {
          transactions.map( transaction => (
            <TransactionItem
              key={ transaction._id }
              { ...transaction }
            />
          ))
        }
      </ul>
    </>
  );
};
