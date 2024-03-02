import React, { useState } from 'react'

export default function CountryFuc() {
  // const [count, setCount] = useState(0);
  const [country, setCountry] = useState('india');
  const [Timezone, setTimezone] = useState(' UTC+5:30');

  const hendalchange = () => {
    setCountry("USA");
    setTimezone("UTC-8");
  }

  return (
    <div>
      <h1>Country Name {country}</h1>
      <h1>Country  TimeZone {Timezone} </h1>



      <button onClick={hendalchange}>
        onClick
      </button>
    </div>
  )
}
