import React, { useState } from 'react'

export default function CountryFuc() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Country count {count}</h1>
      <button onClick={() => setCount(count + 1)}>
        add Country
      </button>
    </div>
  )
}
