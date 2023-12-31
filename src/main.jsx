import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { UseState } from "./0. useState/useState";
import UseEffect from "./01. useEffect/useEffect";
import { UseEffectB } from "./01. useEffect/useEffect-b";
import { ParentProp } from "./02. Props & Propstype/parentProps";
import { FunctionParentProp } from "./02. Props & Propstype/functionalParentProp";
import { ParentMemo } from "./03. Memo & useMemo/ParentMemo";
import PasswordValidation from "./Password Validation/PasswordValidation";
import UseRef from "./4. useRef/useRef";
import { Todo } from "./Todo/todo";
import { NitinEcomm } from "./NitinEcomm/NitinEcomm";
import BigCalendar from "./Calendar Package Testing/bigCalendar";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <div>
      <UseState />
      <UseEffect />
      <UseEffectB />
      <ParentProp />
    <FunctionParentProp/>
    <ParentMemo/>
    <PasswordValidation />
    </div> */}
    {/* .................... */}
    {/* <UseRef/> */}
    {/* <Todo/> */}
    {/* <NitinEcomm /> */}
    <BigCalendar/>
  </React.StrictMode>
);
