import React from "react";

export const FunctionChildProp = (props) => {
  const inputValueToParent = (e) => {
    const value = e.target.value;
    props.takeValue(value)
    console.log(value)
  }
  return (
    <div>
      <p>{props.count}</p>
      <button onClick={props.onIncrement}>Increment</button>

      <input type="text" onChange={inputValueToParent} />
    </div>
  );
};
