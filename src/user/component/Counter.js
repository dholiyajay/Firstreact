import React, { useState } from 'react';

function Counter(props) {
    const [count, setCount] = useState(0);
    const hendalcount = () => {
        setCount(count + 1);
    };

    const hendaldec = () => {
        setCount(count - 1);
    };

    return (
        <div>
            <p>you clik {count}time</p>
            <button onClick={hendalcount} disabled={count > 4 ? true : false}>+</button>
            <button onClick={hendaldec} disabled={count === 0 ? true : false }>-</button>

        </div>
    )
}

export default Counter;