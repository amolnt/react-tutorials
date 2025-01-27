import React, { useState } from 'react';

const MemoizeChild = ({addAmount}) => {
    const [amount, setAmount] = useState();

    const increment = () => {
        addAmount(amount)
        setAmount("")
    }
    return <>
        <h1>Increment By Amount</h1>
        <input type='number' onChange={(e) => setAmount(parseInt(e.target.value))} value={amount}/>
        <button onClick={increment}>Increment By Amount</button>
    </>
}

export default React.memo(MemoizeChild);