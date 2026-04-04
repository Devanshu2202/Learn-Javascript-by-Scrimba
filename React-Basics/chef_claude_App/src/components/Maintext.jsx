import { useState } from "react";
import ClaudeRecipe from "./ClaudeRecipe.jsx";
import IngredientsList from "./IngredientsList";
import { InferenceClient } from "@huggingface/inference";

const hf = new InferenceClient(import.meta.env.VITE_HF_TOKEN);

const Maintext = () => {
  const [ingredientList, setIngredientList] = useState([]);
  const [shownrecipe, setShownRecipe] = useState(false);
  const [recipe, setRecipe] = useState("");

  const generateRecipe = async () => {
    const prompt = `[INST] You are an expert chef. Create a delicious recipe using these specific ingredients: ${ingredientList.join(",")}. 
    You may also include basic pantry staples like salt, pepper, cooking oil, and water.
    
    Please format your response exactly like this:
    **Recipe Title:** [Creative Name]
    **Prep Time:** [Time]
    
    **Ingredients:**
    [List format]
    
    **Instructions:**
    [Numbered steps]
    [/INST]`;

    // 3. Call the Hugging Face API
    try {
      const response = await hf.chatCompletion({
        model: "deepseek-ai/DeepSeek-R1:fastest",
        messages: [{ role: "user", content: prompt }],
        max_tokens: 600, // Increased significantly so the recipe doesn't cut off
        temperature: 0.7,
      });

      const aiRecipe = response.choices[0].message.reasoning;

      setRecipe(aiRecipe);
      setShownRecipe(true);
    } catch (err) {
      console.error(err);
    }
  };

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
        className="flex flex-col sm:flex-row gap-3 bg-white shadow-md border border-gray-200 p-3 rounded-2xl"
      >
        <input
          name="ingredient"
          placeholder="e.g oregano"
          className="flex-1 px-4 py-2 rounded-xl outline-none border border-gray-200 focus:ring-2 focus:ring-orange-400"
        />

        <button
          type="submit"
          className="bg-black text-white px-5 py-2 rounded-xl hover:bg-gray-800 transition w-full sm:w-auto"
        >
          + Add Ingredient
        </button>
      </form>
      <IngredientsList
        ingredientList={ingredientList}
        setIngredientList={setIngredientList}
        setShownRecipe={setShownRecipe}
        generateRecipe={generateRecipe}
      />

      <ClaudeRecipe shownrecipe={shownrecipe} recipe={recipe} />
    </div>
  );
};

export default Maintext;
