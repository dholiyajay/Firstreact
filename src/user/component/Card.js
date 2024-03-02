import React from 'react';

function Card({data}) {
    // console.log(data);
    return (
        <div>
            <h3>{data.name}</h3>
            <h4>{data.price}</h4>
        </div>
    );
}

export default Card;