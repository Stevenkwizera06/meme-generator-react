import React, { useState } from "react";
import memesData from "./memesData.js";

function App() {
  const [meme, setMeme] = useState(() => {
    const memes = memesData.data.memes;
    return memes[Math.floor(Math.random() * memes.length)];
  });

  const [first, setFirst] = useState("");
  const [second, setSecond] = useState("");

  const handleNewMeme = () => {
    const memes = memesData.data.memes;
    setMeme(memes[Math.floor(Math.random() * memes.length)]);
    setFirst("");
    setSecond("");
  };

  return (
    <main className="max-w-[550px] mx-auto my-4">
      <nav
        className="flex items-center justify-between w-full h-16 px-9 text-white"
        style={{
          background: "linear-gradient(90deg, #672280 1.18%, #A626D3 100%)",
        }}
      >
        <img className="h-[26px]" src="./assets/logo.png" alt="" />
        <h4 className="font-medium text-[12px] leading-[14.25px]">
          React Course - Project 3
        </h4>
      </nav>
      <div className="flex flex-col items-center m-4 gap-4">
        <div className="flex justify-center w-full py-4 gap-4">
          <input
            className="w-[50%] h-9 px-2 border rounded-[5px] border-[#D5D4D8]"
            placeholder=""
            value={first}
            onChange={(e) => setFirst(e.target.value)}
          />
          <input
            className="w-[50%] h-9 px-2 border rounded-[5px] border-[#D5D4D8]"
            value={second}
            onChange={(e) => setSecond(e.target.value)}
          />
        </div>
        <button
          className="w-full h-10 rounded-[5px]"
          style={{
            background:
              "linear-gradient(90.41deg, #711F8D 1.14%, #A818DA 100%)",
          }}
          onClick={handleNewMeme}
        >
          Get a new meme image 🖼
        </button>
        <div className="relative text-4xl font-bold text-white">
          <p className="absolute inset-x-4 top-4 text-auto">{first}</p>
          <img className="w-full object-cover" src={meme?.url} alt="" />
          <p className="absolute inset-x-4 bottom-4 text-auto">{second}</p>
        </div>
      </div>
    </main>
  );
}

export default App;
