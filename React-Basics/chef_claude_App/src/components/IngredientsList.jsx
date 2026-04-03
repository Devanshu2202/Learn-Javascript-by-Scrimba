import { RiDeleteBin6Line } from "react-icons/ri";

const IngredientsList = ({
  ingredientList,
  setIngredientList,
  generateRecipe,
}) => {
  function handleDelete(itemToDelete) {
    setIngredientList((prev) => prev.filter((item) => item !== itemToDelete));
  }
  return (
    <div>
      {ingredientList.length > 2 && (
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
              onClick={generateRecipe}
              className="bg-orange-500 text-white px-5 py-2 rounded-xl hover:bg-orange-600 transition"
            >
              Get Recipe
            </button>
          </div>
        </section>
      )}
    </div>
  );
};
export default IngredientsList;
