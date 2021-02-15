import React, { useContext, useState } from 'react';
import { GlobalContext } from '../context/GlobalState';

export const AddTransaction = () => {

  const { createTransaction } = useContext( GlobalContext );

  const [ text, setText ] = useState( '' );
  const [ amount, setAmount ] = useState( 0 );

  const handleSubmit = ( e ) => {
    e.preventDefault();

    const transaction = {
      text: text,
      amount: amount
    }

    createTransaction( transaction );

    setText('');
    setAmount(0);
  };

  return (
    <>
      <h3>Add new transaction</h3>
      <form id="form" onSubmit={ handleSubmit }>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input
            type="text"
            id="text"
            value={ text }
            onChange={ e => setText( e.target.value ) }
            placeholder="Enter text..."
          />
        </div>
        <div className="form-control">
          <label htmlFor="amount"
            >Amount <br />
            (negative - expense, positive - income)</label
          >
          <input
            type="number"
            id="amount"
            value={ amount }
            onChange={ e => setAmount( parseInt(e.target.value) ) }
            placeholder="Enter amount..."
          />
        </div>
        <button
          className="btn"
        >
          Add transaction
        </button>
      </form>
    </>
  );
};
