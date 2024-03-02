import React, { useState } from 'react';

function CityFun(props) {
    // const [count, setCount] = useState(0);
    const [City, setCity] = useState('suart');
    const [Weather, setWeather] = useState('20');

    const hendalchange = () => {
        setCity("vapi");
        setWeather("UTC-8");
      }


    return (
        <div>
            <h1>This city renk {City}</h1>
            <h2>city Weather {Weather}</h2>

            <button onClick={hendalchange}>
                onClick
            </button>
        </div>
    );
}

export default CityFun;