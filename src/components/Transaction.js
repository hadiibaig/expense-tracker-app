import React, { useContext } from 'react'
import { Globalcontext } from '../Global'

export const Transaction = ({ transaction }) => {

  const { deleteTransaction } = useContext(Globalcontext)

  const sign = transaction.amount < 0 ? '-' : '+';

  return (
    <li>
      {transaction.type} <span>{sign}{Math.abs(transaction.amount)} Rs</span><button onClick={() => deleteTransaction(transaction.ID)}>X</button>
    </li>
  )
}