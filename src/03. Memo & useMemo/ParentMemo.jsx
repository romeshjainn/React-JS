import React, { useState } from "react";
import ChildMemo  from "./ChildMemo";

export const ParentMemo = () => {
  const [counter, setCounter] = useState(0);
  const updateCounter = () => {
    setCounter(counter + 1);
  };
  return (
    <div>
      <button onClick={updateCounter}>Increment</button>
      <p>{counter}</p>
      <ChildMemo />
    </div>
  );
};
