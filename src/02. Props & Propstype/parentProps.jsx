import React, { useEffect, useState } from "react";
import { ChildProp } from "./childProps";

export const ParentProp = () => {
  const [counter, setCounter] = useState(0);
  return (
    <div>
      <button onClick={() => setCounter(counter + 1)}>Increment </button>
          <ChildProp count={counter} greetings={"Hello, I am a prop"} />
      {/* <p>{counter}</p> */}
    </div>
  );
};
