const ClaudeRecipe = ({ shownrecipe, recipe }) => {
  return (
    <div>
      {shownrecipe && (
        <section className="mt-10 bg-orange-50 border border-orange-200 rounded-2xl p-6 shadow-sm">
          <h2 className="text-xl font-semibold mb-4">AI Suggested Recipe</h2>

          <pre className="whitespace-pre-wrap text-gray-800">{recipe}</pre>
        </section>
      )}
    </div>
  );
};
export default ClaudeRecipe;
