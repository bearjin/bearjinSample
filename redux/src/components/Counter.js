import React, {useState } from 'react';

const Counter = () => {
  const [counter, setCounter] = useState(0);

  const increment = () => {
    setCounter(prevCounter => prevCounter + 1);
  }

  const decrement = () => {
    setCounter(prevCounter => prevCounter - 1);
  }

  return (
    <div className="counter">
      <p>Value: {counter}</p>
      <button type="button" onClick={increment}>Increment</button>
      <button type="button" onClick={decrement}>Decrement</button>
    </div>
  );
};

export default Counter;