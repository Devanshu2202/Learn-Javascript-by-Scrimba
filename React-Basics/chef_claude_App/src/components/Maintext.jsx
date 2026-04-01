import { useState } from "react";
import ClaudeRecipe from "./ClaudeRecipe.jsx";
import IngredientsList from "./IngredientsList";

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
      <IngredientsList
        ingredientList={ingredientList}
        setIngredientList={setIngredientList}
        setShownRecipe={setShownRecipe}
      />
      <ClaudeRecipe shownrecipe={shownrecipe} />
    </div>
  );
};

export default Maintext;
