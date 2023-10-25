import React, { useState } from "react";

export const Todo = () => {
  const [hide, setHide] = useState(false);
  const [data, setData] = useState([]);

  const generateCards = () => {
    return (
      <div>
        <p>Hello</p>
      </div>
    );
  };

  return (
    <div className="h-screen bg-red-600 border-4 border-black p-5">
      <button
        onClick={() => setHide(true)}
        className="border-2 border-black bg-yellow-600 p-2"
      >
        ADD CARD
      </button>

      {/* hide unhide game here */}
      {hide ? (
        <div className="flex flex-col border-2 border-white p-2 gap-4 my-5 items-center">
          <input
            className="border-2 border-black p-2 w-full"
            type="text"
            placeholder="enter your text here"
          />
          <input
            className="border-2 border-black p-2 w-full"
            type="text"
            placeholder="enter your text here"
          />
          <button onClick={generateCards} className="border-2 border-black bg-blue-400 py-2 w-1/2">
            Submit
          </button>
        </div>
      ) : (
        <div>
          <p>not hellow</p>
        </div>
      )}
      {/* hide unhide game here */}

      <div className="border-2 border-black flex flex-col gap-2 bg-slate-400 h-1/2"></div>
    </div>
  );
};
