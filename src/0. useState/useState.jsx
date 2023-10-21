import React, { useState } from "react";

export const UseState = () => {
  const [name, setName] = useState("Romesh");
  const [counter, setCounter] = useState(0);
  const [email, setEmail] = useState("name");
  const [number, setNumber] = useState(0);
  const [visibility, setVisibility] = useState("Hide"); // Changed from visiblitliy to visibility
  const [display, setDisplay] = useState("block");

  return (
    <main>
      <h2>Change Name On Click :</h2>
      <p onClick={() => setName(name === "Romesh" ? "Jain" : "Romesh")}>
        {name}
      </p>
      <br />
      <h2>Counter: 0 - 100</h2>
      <p>{counter}</p>
      <div style={{ display: "flex" }}>
        <button onClick={() => setCounter(counter < 100 ? counter + 1 : 0)}>
          Increase
        </button>
        <button onClick={() => setCounter(0)}>Reset</button>
        <button onClick={() => setCounter(counter > 0 ? counter - 1 : 0)}>
          Decrease
        </button>
      </div>
      <br />
      <h2>Print Inputs in Real Time</h2>
      <input
        type="text"
        placeholder="Enter your email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="number"
        placeholder="Enter your number"
        onChange={(e) => setNumber(e.target.value)}
      />
      <p>{email}</p>
      <p>{number}</p>
      <br />
      <h2>Hide/Unhide Text</h2>
      <big
        style={{
          color: "#fff",
          backgroundColor: "#000",
          display: display,
        }}
      >
        Hide Me
      </big>
      <button
        onClick={() => {
          setVisibility(visibility === "Hide" ? "Unhide" : "Hide");
          setDisplay(display === "block" ? "none" : "block");
        }}
      >
        {visibility}
      </button>
    </main>
  );
};
