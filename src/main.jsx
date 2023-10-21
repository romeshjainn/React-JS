import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { UseState } from "./0. useState/useState";
import UseEffect from "./01. useEffect/useEffect";
import { UseEffectB } from "./01. useEffect/useEffect-b";
import { ParentProp } from "./02. Props & Propstype/parentProps";
import { FunctionParentProp } from "./02. Props & Propstype/functionalParentProp";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <div>
      <UseState />
      <UseEffect />
      <UseEffectB />
      <ParentProp />
    </div> */}
    {/* .................... */}
    <FunctionParentProp/>
  </React.StrictMode>
);
