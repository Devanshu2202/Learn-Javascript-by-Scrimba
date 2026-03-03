/**
Challenge: 

When the button is clicked, call out to the Bored API
(URL: https://apis.scrimba.com/bored/api/activity)
and replace the h4 with the activity from the API

*/

const dataTitle = document.getElementById("datatitle");
const dataElement = document.getElementById("dataelement");
const requestBtn = document.getElementById("requestbtn");

requestBtn.addEventListener("click", function () {
  fetch("https://apis.scrimba.com/bored/api/activity")
    .then((res) => {
      return res.json();
    })
    .then((data) => {
    dataElement.textContent = data.activity;
    });
});
