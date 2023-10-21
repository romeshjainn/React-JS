import React, { useEffect, useState } from "react";

const UseEffect = () => {
  const [counter, updateCounter] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevCount) => prevCount + 1);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    console.log("counter incremented");
  }, [counter]);

  return (
    <div>
      <button onClick={() => updateCounter(counter + 1)}>Increment</button>
      <button onClick={() => updateCounter(counter - 1)}>Decrement</button>
      <p>{counter}</p>

      <div>
        <p>Count: {count}</p>
      </div>
    </div>
  );
};
export default UseEffect;
