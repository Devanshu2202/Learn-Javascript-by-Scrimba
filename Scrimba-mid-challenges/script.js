// fetch("https://apis.scrimba.com/jsonplaceholder/todos",{
//   method:"POST",
//   body:JSON.stringify({
//     title: "Buy milk",
//     completed: false
//   }),
//   headers: {
//     "Content-Type": "application/json"
//   }
// })
// .then((res)=>{
//   return res.json()
// })
// .then((data)=>{
//   console.log(data);
  
// })

/**
 * Challenge part 1: GET the current weather for your city with 
 * the Open Weather API and log it to the console.
 * 
 * BaseURL: https://apis.scrimba.com/openweathermap/data/2.5/
 * Endpoint: /weather
 * Query: ??? (https://openweathermap.org/current)
    * NOTE: It says you need to include appid in your query, but you can skip that this time
 */

fetch("https://apis.scrimba.com/openweathermap/data/2.5/weather?q=Ahmedabad")
.then((res)=>{
  return res.json()
})
.then((data)=>{
  console.log(data);
  
})

 /**
 * Challenge: Define our anonymous callback function as a separate function, then
 * pass it as the 2nd parameter to our addEventListener
 */

 let shuffle = function (){
    fetch("https://apis.scrimba.com/deckofcards/api/deck/new/shuffle/")
        .then(res => res.json())
        .then(data => console.log(data))
}

document.getElementById("deck-btn").addEventListener("click", shuffle)