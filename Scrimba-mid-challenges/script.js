/**
Challenge:

Send a request to add a new todo item
    - BaseURL: https://apis.scrimba.com/jsonplaceholder/
    - Endpoint: /todos
Body object should contain a "title" property (string) 
  and a "completed" property (boolean)
Don't add the .then() blocks yet - we have 1 more thing 
  to do before it'll work correctly

Part 2 - add the .then blocks to check the data coming back

*/

fetch("https://api.freeapi.app/api/v1/public/randomproducts/1")
  .then((res) => {
    console.log("Response received");   // Debug
    return res.json();
  })
  .then((resdata) => {
    console.log("Full Data:", resdata);
    console.log("Status Code:", resdata.data.title);
  })
  .catch((error) => {
    console.error("Error:", error);
  });