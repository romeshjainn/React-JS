import React from "react";
import { useState } from "react";
import { FunctionChildProp } from "./functionChildProp";

export const FunctionParentProp = () => {
  const [counter, setCounter] = useState(0);
  const [childValue, setChildValue] = useState("")

  const increment = () => {
    setCounter(counter + 1);
  };

  const takeValueFromChild = (value) => {
    setChildValue(value);
  };
  return (
    <div>
      <FunctionChildProp count={counter} onIncrement={increment} takeValue={takeValueFromChild} />
      <p>i am value : {childValue}</p>
    </div>
  );
};
