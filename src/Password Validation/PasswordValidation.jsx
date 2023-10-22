import React, { useEffect, useState } from "react";
import { HeadingLabel, InputBox } from "./Molecules/molecules";

const PasswordValidation = () => {
  const [name, setName] = useState("helllo");
  useEffect(() => {
    console.log("changing");
  }, [name]);

  return (
    <div>
      <HeadingLabel
        fontSize={15}
        label={"Name"}
        fontWeight={600}
        fontColor={"red"}
      />
      <InputBox
        inputType={"text"}
        placeHolder={"Enter your name"}
        inputValue={name}
        validationFunction={(e) => setName(e.target.value)}
      />
      <HeadingLabel
        fontSize={15}
        label={"Number"}
        fontWeight={600}
        fontColor={"red"}
      />
      <InputBox inputType={"text"} placeHolder={"Enter your Number"} />

      <HeadingLabel
        fontSize={15}
        label={"Email"}
        fontWeight={600}
        fontColor={"red"}
      />
      <InputBox inputType={"text"} placeHolder={"Enter your Email"} />

      <HeadingLabel
        fontSize={15}
        label={"Password"}
        fontWeight={600}
        fontColor={"red"}
      />
      <InputBox inputType={"text"} placeHolder={"Enter your Password"} />

      <HeadingLabel
        fontSize={15}
        label={"Confirm Password"}
        fontWeight={600}
        fontColor={"red"}
      />
      <InputBox inputType={"text"} placeHolder={"Confirm Password"} />
      <div>
        <button
          style={{
            width: "100%",
            padding: ".6rem",
            backgroundColor: "blue",
            color: "white",
            fontWeight: 600,
          }}
        >
          Submit
        </button>
      </div>
    </div>
  );
};
export default PasswordValidation;
