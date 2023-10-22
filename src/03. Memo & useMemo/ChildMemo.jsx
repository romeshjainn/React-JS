import React,{memo} from "react";

const ChildMemo = () => {
    console.log("hello  i am child")
}
export default memo(ChildMemo);