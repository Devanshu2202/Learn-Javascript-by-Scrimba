const ClaudeRecipe = ({ shownrecipe }) => {
  return (
    <div>
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
export default ClaudeRecipe;
