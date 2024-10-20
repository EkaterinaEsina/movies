import { useState, useEffect } from "react";

import { WithRef } from '../Ref';

export const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((prevCount) => prevCount + 1);
    setCount((prevCount) => prevCount + 1);
    setCount((prevCount) => prevCount + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  }

  useEffect(() => {
    console.log('hello from clicker')
  }, []);

  useEffect(() => {
    console.log('count changed', count);

    return () => {
      console.log('bye from count changed')
    }
  }, [count]);

  useEffect(() => {
    return () => {
      console.log('bye from clicker')
    }
  }, []);

  return (
    <div className='counter'>
      <button onClick={decrement}>-</button>
      <p>{count}</p>
      <button onClick={increment}>+</button>

      <WithRef />
    </div>
  );
}