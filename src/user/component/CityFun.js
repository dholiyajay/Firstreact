import React, { useState } from 'react';

function CityFun(props) {
    const [count, setCount] = useState(0);

    return (
        <div>
            <h1>This city renk {count}</h1>
            <button onClick={() => setCount(count + 1)}>
                add 
            </button>
        </div>
    );
}

export default CityFun;