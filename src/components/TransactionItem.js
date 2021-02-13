import React from 'react'

export const TransactionItem = ({ text, amount }) => {
  return (
    <li className="minus">
      { text } <span>${ amount }</span><button className="delete-btn">x</button>
    </li>
  )
}
