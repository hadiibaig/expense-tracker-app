import React, { useContext } from 'react'
import { Globalcontext } from "../Global"

export const Amount = () => {

    const { transactions } = useContext(Globalcontext)

    const amounts = transactions.map(transaction => transaction.amount);
    const remaining = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);
    const total = amounts.filter(item => item > 0).reduce((acc, item) => (acc += item), 0).toFixed(2);
    const expense = (amounts.filter(item => item < 0).reduce((acc, item) => (acc += item), 0) * -1).toFixed(2);


    return (
        <div>
            <div className="amount-class">
                <div>
                    <h3>Income</h3>
                    <br />
                    <p>{total} Rs</p>
                </div>
                <div>
                    <h3>Remaining Amount</h3>
                    <br />
                    <p>{remaining} Rs</p>
                </div>
                <div>
                    <h3>Total Expense</h3>
                    <br />
                    <p>{expense} Rs</p>
                </div>
            </div>
        </div>
    )
}
export default Amount;
