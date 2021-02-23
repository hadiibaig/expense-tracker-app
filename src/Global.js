import React, { createContext, useReducer } from 'react'

const initial = {
  transactions: [
    { ID: 1, type: "Bill", amount: 1500 },
    { ID: 2, type: "cloths", amount: 2100 },
    { ID: 3, type: "food", amount: 450 }
  ]
}

export const Globalcontext = createContext(initial)

export const Globalprovider = (props) => {
  const [state, dispatch] = useReducer(reducer, initial)

  function addTransaction(transaction) {
    dispatch({ type: "ADD_TRANSACTION", payload: transaction })
  }

  function deleteTransaction(ID) {
    dispatch({ type: 'DELETE_TRANSACTION', payload: ID });
  }



  return (<Globalcontext.Provider value={{
    transactions: state.transactions, addTransaction, deleteTransaction
  }}>
    {props.children}
  </Globalcontext.Provider>);
}

function reducer(state, action) {
  switch (action.type) {
    case "ADD_TRANSACTION":
      return { ...state, transactions: [action.payload, ...state.transactions] }
    case 'DELETE_TRANSACTION':
      return {
        ...state,
        transactions: state.transactions.filter(transaction => transaction.ID !== action.payload)
      }
    default:
      return state
  }
}
