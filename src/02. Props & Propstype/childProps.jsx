import React from "react";

export const ChildProp = (ParentCounter) => {
  return (
    <div>
      <p>{ParentCounter.count}</p>
      <p>{ParentCounter.greetings}</p>
    </div>
  );
};
