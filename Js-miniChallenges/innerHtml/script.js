const filmInput = document.getElementById("film-input");
const addBtn = document.getElementById("add-btn");
const filmList = document.getElementById("film-list");

addBtn.addEventListener("click", function () {
  const listItem = document.createElement("li");

  listItem.textContent = filmInput.value;

  listItem.classList.add("film-item");

  filmList.appendChild(listItem);

  filmInput.value = "";
});
