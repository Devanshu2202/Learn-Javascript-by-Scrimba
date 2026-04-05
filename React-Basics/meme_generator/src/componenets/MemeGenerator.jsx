import { useState } from "react";

const MemeGenerator = () => {
  const [topText, setTopText] = useState("");
  const [bottomText, setBottomText] = useState("Walk into Mordor");

  const memeImage =
    "https://wompimages.ampify.care/fetchimage?siteId=7575&v=2&jpgQuality=100&width=700&url=https%3A%2F%2Fi.kym-cdn.com%2Fphotos%2Fimages%2Fnewsfeed%2F001%2F179%2F956%2F8f1.jpg";

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center">
      <header className="w-full bg-purple-700 text-white py-4 shadow-md">
        <h1 className="text-center text-xl md:text-2xl font-bold">
          Meme Generator
        </h1>
      </header>

      <div className="w-full max-w-xl px-4 mt-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="Top Text"
            value={topText}
            onChange={(e) => setTopText(e.target.value)}
            className="border rounded-md p-3 w-full"
          />

          <input
            type="text"
            placeholder="Bottom Text"
            value={bottomText}
            onChange={(e) => setBottomText(e.target.value)}
            className="border rounded-md p-3 w-full"
          />
        </div>

        <button className="w-full mt-4 bg-purple-700 text-white py-2 rounded-md hover:bg-purple-800 transition">
          Get a new meme image
        </button>

        <div className="relative mt-6">
          <img src={memeImage} alt="meme" className="w-full rounded-lg" />

          <h2 className="absolute top-2 left-1/2 transform -translate-x-1/2 text-white text-lg md:text-2xl font-bold uppercase text-center drop-shadow-lg">
            {topText}
          </h2>

          <h2 className="absolute bottom-2 left-1/2 transform -translate-x-1/2 text-white text-lg md:text-2xl font-bold uppercase text-center drop-shadow-lg">
            {bottomText}
          </h2>
        </div>
      </div>
    </div>
  );
};

export default MemeGenerator;
