const Maintext = () => {
  return (
    <div>
      <div className="flex gap-2 w-full justify border border-gray-400 px-4 items-center p-2 rounded-xl bg-gray-100">
        <input
          className="flex-1 ml-2 outline-none w-2xs"
          placeholder="e.g oregano"
          type="text"
        />
        <button className="bg-black text-white px-2 py-2 rounded-xl">
          + Add ingridient
        </button>
      </div>

      <div className="py-10">
        {" "}
        <h1 className="text-4xl py-4 font-medium ">Ingredient on hand:</h1>
        <ul className="py-5 ml-5 list-disc flex flex-col gap-5">
          <li>Chicken breasts</li>
          <li>Most of the main spices</li>
          <li>Olive oil</li>
          <li>Heavy cream</li>
          <li>Chicken broth</li>
          <li>Parmesan cheese</li>
          <li>Spinach</li>
        </ul>
      </div>

      <div className="bg-[#f0efeb] flex justify-between rounded-xl py-10">
        <div className="ml-10">
          <h2 className="text-xl font-semibold">Ready for a recipe?</h2>
          <p>Generate a recipe from your list of ingredients</p>
        </div>

        <div>
          <button className="bg-orange-500 py-2 px-6 rounded-xl mr-10">
            Get a recipe
          </button>
        </div>
      </div>
    </div>
  );
};
export default Maintext;
