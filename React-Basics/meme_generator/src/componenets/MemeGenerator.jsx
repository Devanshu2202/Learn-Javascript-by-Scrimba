import { useEffect, useState } from "react";

const MemeGenerator = () => {
  const [allmeme, setAllMeme] = useState([]);
  const [memeText, setMemeText] = useState({
    topText: "",
    bottomText: "Walk into Mordor",
    image:
      "https://wompimages.ampify.care/fetchimage?siteId=7575&v=2&jpgQuality=100&width=700&url=https%3A%2F%2Fi.kym-cdn.com%2Fphotos%2Fimages%2Fnewsfeed%2F001%2F179%2F956%2F8f1.jpg",
  });

  // console.log("memeText", memeText);

  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((res) => res.json())
      .then((data) => setAllMeme(data.data.memes));
  }, []);
  //generate random number

  // const memeImage =
  //   "https://wompimages.ampify.care/fetchimage?siteId=7575&v=2&jpgQuality=100&width=700&url=https%3A%2F%2Fi.kym-cdn.com%2Fphotos%2Fimages%2Fnewsfeed%2F001%2F179%2F956%2F8f1.jpg";

  function handleChange(e) {
    const { name, value } = e.target;

    // console.log("name", name);
    // console.log("value", value);

    setMemeText((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }
  function handleCreateMeme() {
    let randomIndex = Math.floor(
      Math.random() * (allmeme.length > 0 ? allmeme.length : 100),
    );

    console.log("randomIndex", randomIndex);
    const randomMeme =
      allmeme[randomIndex]?.url ||
      "https://static.vecteezy.com/system/resources/thumbnails/033/002/529/small/shocked-cat-with-wide-open-mouth-ai-generative-photo.jpg";

    setMemeText((prev) => ({
      ...prev,
      image: randomMeme,
    }));
  }

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
            name="topText"
            placeholder="Top Text"
            value={memeText.topText}
            onChange={handleChange}
            className="border rounded-md p-3 w-full"
          />

          <input
            type="text"
            name="bottomText"
            placeholder="Bottom Text"
            value={memeText.bottomText}
            onChange={handleChange}
            className="border rounded-md p-3 w-full"
          />
        </div>

        <button
          onClick={handleCreateMeme}
          className="w-full mt-4 bg-purple-700 text-white py-2 rounded-md hover:bg-purple-800 transition"
        >
          Get a new meme image
        </button>

        <div className="relative mt-6">
          <img src={memeText.image} alt="meme" className="w-full rounded-lg" />

          <h2 className="absolute top-2 left-1/2 transform -translate-x-1/2 text-white text-lg md:text-2xl font-bold uppercase text-center drop-shadow-lg">
            {memeText.topText}
          </h2>

          <h2 className="absolute bottom-2 left-1/2 transform -translate-x-1/2 text-white text-lg md:text-2xl font-bold uppercase text-center drop-shadow-lg">
            {memeText.bottomText}
          </h2>
        </div>
      </div>
    </div>
  );
};

export default MemeGenerator;
