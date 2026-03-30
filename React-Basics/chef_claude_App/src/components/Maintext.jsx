import { useState } from "react";

const Maintext = () => {
  const [ingredientList, setIngredientList] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();

    const formData = new FormData(e.target);
    const value = formData.get("ingredient");

    if (value.trim() === "") return;

    setIngredientList((prevIngredientList) => [...prevIngredientList, value]);
    e.target.reset();
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
                  className="bg-gray-100 px-4 py-2 rounded-xl shadow-sm"
                >
                  {item}
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

            <button className="bg-orange-500 text-white px-5 py-2 rounded-xl hover:bg-orange-600 transition">
              Get Recipe
            </button>
          </div>
        </section>
      )}
    </div>
  );
};

export default Maintext;
