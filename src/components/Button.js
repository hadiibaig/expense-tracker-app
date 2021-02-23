import React, { useState } from 'react'
import Transactionlist from "./Transactionlist"

const Button = () => {
    const [toggle, settoggle] = useState(false)

    return (
        <div>
            <button className="submit-class" onClick={() => (toggle) ? settoggle(false) : settoggle(true)}>{(toggle) ? "Hide Transactions" : "Show Transaction"}</button>
            {toggle && <Transactionlist />}
        </div>
    )
}

export default Button
