import React, { useContext } from 'react';
import { Globalcontext } from "../Global"
import { Transaction } from './Transaction'

export const Transactionlist = () => {

   const { transactions } = useContext(Globalcontext)


   return (<ul className="list">
      {transactions.map(transaction => (<Transaction key={transaction.ID} transaction={transaction} />))}
   </ul>
   )
}



export default Transactionlist;
