import { useState } from "react";
import { RiDeleteBin6Line } from "react-icons/ri";

const Maintext = () => {
  const [ingredientList, setIngredientList] = useState([]);
  const [shownrecipe, setShownRecipe] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();

    const formData = new FormData(e.target);
    const value = formData.get("ingredient");

    if (value.trim() === "") return;
    if (value === "" || ingredientList.includes(value)) return;

    setIngredientList((prevIngredientList) => [...prevIngredientList, value]);
    e.target.reset();
  }
  function handleDelete(itemToDelete) {
    setIngredientList((prev) => prev.filter((item) => item !== itemToDelete));
  }

  return (
    <div className="max-w-4xl mx-auto mt-10 px-4">
      <form
        onSubmit={handleSubmit}
        className="flex gap-3 bg-white shadow-md border border-gray-200 p-3 rounded-2xl"
      >
        <input
          name="ingredient"
          placeholder="e.g oregano"
          className="flex-1 px-4 py-2 rounded-xl outline-none border border-gray-200 focus:ring-2 focus:ring-orange-400"
        />

        <button
          type="submit"
          className="bg-black text-white px-7 py-2 rounded-xl hover:bg-gray-800 transition"
        >
          + Add Ingredient
        </button>
      </form>

      {ingredientList.length > 0 && (
        <section>
          <div className="mt-8">
            <h1 className="text-2xl font-semibold mb-4">
              Ingredients on hand:
            </h1>

            <ul className="space-y-3">
              {ingredientList.map((item, index) => (
                <li
                  key={index}
                  className="bg-gray-100 px-4 py-2 rounded-xl shadow-sm flex justify-between"
                >
                  {item}
                  <button onClick={() => handleDelete(item)}>
                    <RiDeleteBin6Line />
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-10 bg-orange-50 flex justify-between items-center p-5 rounded-2xl shadow-sm">
            <div>
              <h2 className="text-lg font-semibold">Ready for a recipe?</h2>
              <p className="text-sm text-gray-600">
                Generate a recipe from your list
              </p>
            </div>

            <button
              onClick={() => setShownRecipe((prev) => !prev)}
              className="bg-orange-500 text-white px-5 py-2 rounded-xl hover:bg-orange-600 transition"
            >
              Get Recipe
            </button>
          </div>
        </section>
      )}

      {shownrecipe && (
        <section className="mt-10 bg-orange-50 border border-orange-200 rounded-2xl p-6 shadow-sm">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">
            Chef Claude Recommends:
          </h2>

          <article
            className="space-y-4 text-gray-700 leading-relaxed"
            aria-live="polite"
          >
            <p>
              Based on the ingredients you have available, I would recommend
              making a simple and delicious{" "}
              <strong className="text-orange-600">Beef Bolognese Pasta</strong>.
              Here is the recipe:
            </p>

            <h3 className="text-xl font-semibold text-gray-800">
              Beef Bolognese Pasta
            </h3>

            <div>
              <strong className="block mb-2">Ingredients:</strong>
              <ul className="list-disc pl-6 space-y-1">
                <li>1 lb. ground beef</li>
                <li>1 onion, diced</li>
                <li>3 cloves garlic, minced</li>
                <li>2 tablespoons tomato paste</li>
                <li>1 (28 oz) can crushed tomatoes</li>
                <li>1 cup beef broth</li>
                <li>1 teaspoon dried oregano</li>
                <li>1 teaspoon dried basil</li>
                <li>Salt and pepper to taste</li>
                <li>8 oz pasta of your choice</li>
              </ul>
            </div>

            <div>
              <strong className="block mb-2">Instructions:</strong>
              <ol className="list-decimal pl-6 space-y-2">
                <li>
                  Bring a large pot of salted water to a boil for the pasta.
                </li>
                <li>
                  Cook the ground beef in a skillet over medium-high heat until
                  browned (5–7 minutes).
                </li>
                <li>Add diced onion and minced garlic and cook 2–3 minutes.</li>
                <li>Stir in tomato paste and cook for 1 minute.</li>
                <li>
                  Add crushed tomatoes, beef broth, oregano, and basil. Season
                  with salt and pepper.
                </li>
                <li>Reduce heat and simmer 15–20 minutes.</li>
                <li>Cook pasta according to package instructions.</li>
                <li>Mix pasta with sauce and toss well.</li>

                <li>Serve hot with basil or grated Parmesan cheese.</li>
              </ol>
            </div>
          </article>
        </section>
      )}
    </div>
  );
};

export default Maintext;
