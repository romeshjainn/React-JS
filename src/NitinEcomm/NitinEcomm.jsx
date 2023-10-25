import React, { useState } from "react";

export const NitinEcomm = () => {
  const [PopUp, setPopUp] = useState(false);
  const container = document.getElementById("container");
  const generateCard = () => {
    const cards = document.createElement("div");
    cards.style.border = "2px solid black";
    cards.style.padding = "1rem";
    cards.style.backgroundColor = "yellow";
    container.append(cards);

    setPopUp(!PopUp);
  };

  return (
    <div className="h-screen border-2 bg-red-500 border-black">
      <header className="h-[10%]  flex justify-end items-center pr-5">
        <button
          className="h-[80%] w-[15%] border-2 border-black bg-yellow-500"
          onClick={() => setPopUp(!PopUp)}
        >
          Add Product
        </button>
      </header>
      <div className="border-1 border-black h-[90%] bg-yellow-400 flex">
        <section className="w-1/5 h-full bg-blue-500"></section>
              <section className="bg-[#eaeaea] h-full w-4/5 flex flex-col gap-2 p-2" id="container">
                  
        </section>
      </div>

      {/* here comes the input box which we are going to popup  */}
      <div className="absolute top-1/2 right-0 transform -translate-y-1/2 -translate-x-[50%] w-1/2 h-[70%]">
        {PopUp ? (
          <div className="flex flex-col gap-2 bg-slate-500  border-white p-5">
            <h1 className="bg-cyan-500	"> Fill Product Details here </h1>
            <input
              className="border-2 rounded-2xl p-2 border-black"
              placeholder="Product Id"
              type="text"
            />
            <input
              className="border-2 rounded-2xl p-2 border-black"
              placeholder="Products details"
              type="text"
            />
            <input
              className="border-2 rounded-2xl p-2 border-black"
              placeholder="Product Description "
              type="text"
            />
            <input
              className="border-2 rounded-2xl p-2 border-black"
              placeholder="Product Price"
              type="text"
            />
            <input
              className="border-2 rounded-2xl p-2 border-black"
              placeholder="Product Size"
              type="text"
            />
            <input
              className="border-2 rounded-2xl p-2 border-black"
              placeholder="Product Quantity"
              type="text"
            />
            <img className="border-2  border-black" src="" alt="image" />
            <button
              onClick={generateCard}
              className=" border-2  border-black bg-sky-600	"
            >
              Submit Product Details
            </button>
          </div>
        ) : (
          <h1></h1>
        )}
      </div>
    </div>
  );
};
