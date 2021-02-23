import React, { useState, useContext } from 'react';
import { Globalcontext } from '../Global'



export const Form = () => {

  const [type, settype] = useState("");
  const [amount, setamount] = useState(0);

  const { addTransaction } = useContext(Globalcontext)

  function onsubmit(e) {

    e.preventDefault();
    const newTransaction = {
      ID: Math.floor(Math.random() * 100000000),
      type,
      amount: +amount
    }
    addTransaction(newTransaction);
    setamount(0)
    settype("")
  }



  return (
    <div>
      <form className="form-class" onSubmit={onsubmit}>
        <label className="label-class">Transaction Type
        <input className="input-class" type="text" value={type} onChange={(e) => { settype(e.target.value) }} placeholder="input text" required />
        </label>
        <br />
        <label className="label-class">
          Transaction Amount
        <input className="input-class" type="number" value={amount} onChange={(e) => { setamount(e.target.value) }} placeholder="input amount" required />
          <br />
          <input className="submit-class" type="submit" value="Add Transaction" />
        </label>
      </form>
    </div>
  )
}

export default Form;
