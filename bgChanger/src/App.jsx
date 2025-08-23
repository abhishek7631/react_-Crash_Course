import React, { useState } from "react";

function App() {
  const [color, setColor] = useState("olive");

  return (
    <>
      <div
        className="w-full h-screen duration-200"
        style={{ backgroundColor: color }}
      >
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
          <div className="flex flex-wrap justify-center gap-3 shadow-xl bg-white px-3 py-2 rounded-3xl">
            <button
              onClick={() => setColor("red")}
              className="outline-none px-4 py-1 rounded-full text-white"
              style={{ backgroundColor: "red", cursor: "pointer" }}
            >
              Red
            </button>

            <button
              onClick={() => setColor("blue")}
              className="outline-none px-4 py-1 rounded-full text-white"
              style={{ backgroundColor: "blue", cursor: "pointer" }}
            >
              Blue
            </button>

            <button
              onClick={() => setColor("green")}
              className="outline-none px-4 py-1 rounded-full text-white"
              style={{ backgroundColor: "green", cursor: "pointer" }}
            >
              Green
            </button>

            <button
              onClick={() => setColor("orange")}
              className="outline-none px-4 py-1 rounded-full text-white"
              style={{ backgroundColor: "orange", cursor: "pointer" }}
            >
              Orange
            </button>

            <button
              onClick={() => setColor("black")}
              className="outline-none px-4 py-1 rounded-full text-white"
              style={{ backgroundColor: "black", cursor: "pointer" }}
            >
              Black
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
